import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit  = (e) => {
console.log(email);
      e.preventDefault();
      navigate('/thank', {state : email});
    }
    return (
        <div>
            <div className="mt-10 mb-40">
                <div className="flex justify-center">
                    <div className="flex flex-col gap-2 items-start">
                        <h2 className=" py-4 font-bold text-3xl">Register for wizard Tech</h2>
                        <p className="text-left">Make sure to grab your spot for this year's conference ! We love technology and consistently <br />
                            work towards being the premier provider of technology solutions and events that connect the <br />world</p>
                    </div>
                </div>
                <div className="flex justify-center">

                    <form className="mt-4 flex flex-col gap-1 items-start">
                        <label htmlFor="" className="">Email:</label><br />
                        <input type="text" onChange={(e) => setEmail(e.target.value)} className="border rounded w-96 p-3" /><br />
                        <button onClick={handleSubmit} className="bg-[#5F9EA0] w-96 p-3 text-white rounded">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}