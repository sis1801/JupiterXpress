import React, { useEffect, useState } from "react";

const FullDetails = () => {
  const [formData, setFormData] = useState({
    whName : '',
    address: 'DTO',
    country : '',
    dest : '',
    weight : '',
    payMode : 'COD',
    codAmount : '0',
  })
  const [showCompare, setShowCompare] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCompare(true)
  }
  return (
    <>
      <div className="w-full p-4 flex flex-col items-center">
        <div className="text-3xl font-medium text-center">Enter Shipping Details</div>
        <form action="">
        <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="whName">Pickup Warehouse Name</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="whName"
                name="whName"
                placeholder="Ex. Patna Warehouse"
                value={formData.whName}
                onChange={handleChange}
              />
            </div>
            
          </div>
         
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="name">Buyer's Name</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="name"
                name="name"
                placeholder="Ex. 1500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Buyer's Phone</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            
          </div>
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Buyer's Address</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Buyer's Pincode</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            
          </div>
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Buyer's City</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Buyer's State</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            
          </div>
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Buyer's Country</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Address Type</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            
          </div>
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Payment Mode</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Order Id</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            
          </div>
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Shipment Mode</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Product Description</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            
          </div>
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">HSN Code</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">COD Amount</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            
          </div>
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Order Date</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Seller Name</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            
          </div>
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Seller Address</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Seller Inv</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            
          </div>
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Seller GST TIN</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Total Amount</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            
          </div>
        </form>
      </div>
    </>
  )
}

const ComparePrices = ({method, status, origin, dest, weight, payMode, codAmount, setStep}) => {
  const [price,setPrice] = useState(null)
  useEffect(()=>{
    console.log({method, status, origin, dest, weight, payMode, codAmount})
    const data = async () => {
      await fetch(`/.netlify/functions/price`, {
        method: 'POST',
        headers: { 'Accept': '*/*',
          'Content-Type': 'application/json',
          'Authorization': 'Token 2e80e1f3f5368a861041f01bb17c694967e94138',
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
        },
          body : JSON.stringify({method: method, status : status, origin : origin, dest : dest, weight : weight, payMode : payMode, codAmount : codAmount}),
        
      }).then(response => response.json()).then(result => {console.log(result); setPrice(result.price)}).catch(error => console.log(error + " " + error.message))
    }  
    data()
  }, []) 
  return (
    <>
      <div className="w-full inset-0 absolute p-4 flex flex-col bg-gray-100 items-center space-y-6">
        <div className="text-center text-3xl font-medium">
          CHOOSE YOUR SERVICE
        </div>
        <div className="w-full p-4 ">
          <div className="w-full h-16 bg-white relative items-center px-4 flex border-b" onClick={()=>setStep(1)}>
            <div>Delhivery</div>
            <div className="absolute right-4">{`${Math.round(price)}    >`}</div>
          </div>
        </div>
      </div>
    </>
  )
}

const InitialDetails = ({setStep}) => {
  
  const [formData, setFormData] = useState({
    method : 'S',
    status: 'DTO',
    origin : '',
    dest : '',
    weight : '',
    payMode : 'COD',
    codAmount : '0',
  })
  const [showCompare, setShowCompare] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCompare(true)
  }
  return (
    <>
      {showCompare && <ComparePrices {...formData} setStep={setStep} />}
      <div className="w-full p-4 flex flex-col items-center space-y-6">
        <div className="text-center text-3xl font-medium">
          Enter your Shipment Details
        </div>
        <form action="" className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2 flex flex-col justify-center">
              <label htmlFor="method">Shipping Method</label>
              <select
                name="method"
                id="method"
                className="border py-2 px-4 rounded-3xl"
                value={formData.method}
                onChange={handleChange}
              >
                <option value="S">Surface</option>
                <option value="E">Express</option>
              </select>
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2 flex flex-col justify-center">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                className="border py-2 px-4 rounded-3xl"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Delivered">Delivered</option>
                <option value="RTO">RTO</option>
                <option value="DTO">DTO</option>
              </select>
            </div>
          </div>
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="origin">Origin Pincode</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="origin"
                name="origin"
                placeholder="Ex. 813210"
                value={formData.origin}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="dest">Destination Pincode</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="dest"
                name="dest"
                placeholder="Ex. 845401"
                value={formData.dest}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full flex mb-2 flex-wrap ">
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2">
              <label htmlFor="weight">Weight (In grams)</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="weight"
                name="weight"
                placeholder="Ex. 1500"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2 flex flex-col justify-center">
              <label htmlFor="payMode">Payment Mode</label>
              <select
                name="payMode"
                id="payMode"
                className="border py-2 px-4 rounded-3xl"
                value={formData.payMode}
                onChange={handleChange}

              >
                <option value="COD">COD</option>
                <option value="Pre-paid">Prepaid</option>
                <option value="Pickup">Pickup</option>
                <option value="REPL">REPL</option>
              </select>
            </div>
            
          </div>
          <div className="flex-1 mx-2 mb-2 min-w-[300px] space-y-2 flex flex-col justify-center">
              <label htmlFor="codAmount">COD Amount</label>
              <input
                className="w-full border py-2 px-4 rounded-3xl"
                type="text"
                id="codAmount"
                name="codAmount"
                placeholder="Ex. 157"
                value={formData.codAmount}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="border bg-white mx-2  py-2 px-4 rounded-3xl">
              Submit and Compare
            </button>
        </form>
      </div>
    </>
  );
};

const CreateOrder = () => {
  const [step, setStep] = useState(0)
  return (
    <div className=" py-16 w-full h-full flex flex-col items-center overflow-x-hidden overflow-y-auto">
      {step==0 && <InitialDetails setStep={setStep} />}
      {step==1 && <FullDetails />}
    </div>
  );
};

export default CreateOrder;
