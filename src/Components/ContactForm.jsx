import { useState } from "react";
import axios from "axios";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    subject: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name : formData.name,
      email : formData.email,
      message : formData.message,
      mobile :formData.mobile,
      subject :formData.subject,
    };

    try {
      await axios.post('http://35.154.100.196:3001/send-email', data);
      alert('Email sent successfully');
    } catch (error) {
      alert('Error sending email');
    }

    // Make the API call
    // fetch('http://35.154.100.196:3001/send-email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials': true,
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.success) {
    //       alert("Email sent successfully");
    //       // Handle successful login
    //     } else {
    //       alert('Email failed: ' + result.message);
    //       // Handle login failure
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     alert('An error occurred during Email');
    //   });
    }
  return (
    <div className="flex flex-col w-full lg:w-auto space-y-6 items-center text-black my-12 font-medium">
      <form action="" onSubmit={handleSubmit} className="flex flex-col space-y-2 w-full sm:w-[500px]">
        <input type="text" value={formData.name}  onChange={handleChange} name="name" placeholder="Full Name" className="py-2 px-4 rounded-3xl" />
        <input type="email" value={formData.email} onChange={handleChange} name="email" placeholder="E-mail Address" className="py-2 px-4 rounded-3xl"/>
        <input type="text" value={formData.mobile} onChange={handleChange} name="mobile" placeholder="Mobile Number" className="py-2 px-4 rounded-3xl"/>
        <input type="subject" value={formData.subject} onChange={handleChange} name="subject" placeholder="Subject" className="py-2 px-4 rounded-3xl"/>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="py-2 px-4 h-32 rounded-3xl"/>
        <button type="submit" className="px-4 py-2 border border-white text-white rounded-3xl">Send</button>
      </form>
    </div>
  )
}

export default ContactForm
