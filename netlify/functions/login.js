const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');
require('dotenv').config();

// Database connection
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Secret key for JWT
const SECRET_KEY = process.env.JWT_SECRET;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { email, password } = JSON.parse(event.body);

  const connection = await mysql.createConnection(dbConfig);

  try {
    const [rows] = await connection.execute('SELECT * FROM USERS WHERE email = ?', [email]);
    if (rows.length > 0 && await bcrypt.compare(password, rows[0].password)) {
      const id = rows[0].id;
      const name = rows[0].name;
      const verified = rows[0].verified;
      const token = jwt.sign({  email, verified, name, id }, SECRET_KEY, { expiresIn: '12h' });
      return {
        statusCode: 200,
        body: JSON.stringify({ token : token, success:true, verified: verified }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Invalid credentials' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error logging in', error: error.message }),
    };
  } finally {
    await connection.end();
  }
};
