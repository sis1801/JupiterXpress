import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Form = () => {
    const [formData,setFormData] = useState({
        id : '',
        isWaybill : true
    })

    useEffect(() => {
        if (localStorage.getItem('track')){
            setFormData({id: localStorage.getItem('track'), isWaybill: true})
            localStorage.setItem('track','')
            // handleSubmit(1)
        }
    }, [])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]:type === 'radio' ? checked : value
        }));
      };
    const [trackingData,setTrackingData] = useState(null)
    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
        } catch (e) {}
        const data = await fetch('/.netlify/functions/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => response.json())
        setTrackingData(data)
        console.log(data)
    }
    return (
        <>
            <div className='w-full pt-16'>
                <div className='w-full p-8 flex flex-col items-center space-y-16'>
                    <div className='text-center text-3xl font-medium'>Track your Parcel</div>
                    
        <form className="flex flex-col items-center  space-y-8" onSubmit={handleSubmit}>
            <div className='flex space-x-8'>

            <div className='flex'>
            <input type="radio" id='awb' name='isWaybill' checked value={true} onChange={handleChange} />
            <label htmlFor="awb">AWB</label>
            </div>
            <div className='flex'>
            <input type="radio" id='order' name='isWaybill' value={false} onChange={handleChange} />
            <label htmlFor="order">Order Id</label>
            </div>
            </div>
            <div className='flex'>
            <input type="text" name="id" value={formData.id} onChange={handleChange} className="border py-2 px-4 sm:rounded-l-xl bg-blue-50" placeholder="Enter Tracking Id" />
            <button className="border py-2 px-4 sm:rounded-r-xl bg-blue-50">Track</button>
            </div>
        </form>
                </div>
            </div>
            {trackingData && <Result data={trackingData} />}
        </>
    )
}

const Card = ({scan}) => {
    return (
        <>
            <div className="w-full h-16 bg-white relative items-center px-8 flex border-b space-x-4">
                <div>{scan.ScanDateTime}</div>
                <div>{scan.ScannedLocation}</div>
                <div className="absolute right-8 cursor-pointer">{scan.Instructions}</div>
            </div>
        </>
    )
}

const Result = ({data}) => {
    useEffect(() => {
        console.log(data)
    },[data])
    return (
        <>
            <div className={`w-full p-8 overflow-hidden  `}>
                    {data?.data.ShipmentData[0].Shipment.Scans.slice().reverse().map((scan, index)=>(
                        <Card key={index} scan={scan.ScanDetail} />
                    ))}
            </div>
        
        </>
    )
}

const Tracking = () => {
  return (
    <>
        <Header />
        <Form />
        <Footer />
    </>
  )
}

export default Tracking