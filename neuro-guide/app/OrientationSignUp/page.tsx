import Link from 'next/link'
import { IoMdExit } from "react-icons/io";
import React from 'react'

const page = () => {
  return (
    <>
    <div className="bg-[url('./flow.png')] bg-cover -mx-2 bg-full "> 
      <div className="font-mono text-5xl text-center py-56"> Orientation Sign Up</div>
        <div className="flex flex-col justify-between mx-96 -my-24">
          <input className = "bg-lightBeige rounded-xl py-2 px-3 text-black placeholder-gray-400 font-normal text-xl"  type="text" placeholder='NetID'/>
          <input className = "bg-lightBeige rounded-xl py-2 px-3 text-black  placeholder-gray-400 font-normal text-xl my-8"  type="password" placeholder='Password'/>
        </div>

        <div className="py-12"></div>
        <div className="flex justify-center space-x-4 mx-96">
        <select className="dropdown" defaultValue="">
        <option value="">Choose an orientation date</option>
        <option value="option1">June 5</option>
        <option value="option2">June 17</option>
        <option value="option3">June 21</option>
        <option value="option3">July 5</option>
         </select>
        <select className="dropdown" defaultValue="">
        <option value="">Did you pay?</option>
        <option value="option1">Yes</option>
        <option value="option2">No</option>
        </select>
        </div>
        <div className="py-20"></div>
        <Link href = "/StepOneCard" className = "relative bottom-24 right-12 mx-custom-mx px-12 py-6 bg-black text-white rounded-3xl my-20">Submit</Link>
        <div className="py-20"></div>
        <Link href="/StepOneCard">
        <div className="icon" style={{ color: 'black', fontSize: '2rem', position: 'absolute', right: '300px', top:'700px', width: '40px',height: '40px' }}> {}
          <IoMdExit />
        </div>
      </Link>
      </div>

      </>
  )
}

export default page