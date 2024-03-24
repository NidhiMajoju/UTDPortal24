import Link from 'next/link'
import { IoMdExit } from "react-icons/io";
import React from 'react'

const page = () => {
  return (
    <>
    <div className="bg-[url('./flow.png')] bg-cover -mx-2 bg-full bg-no-repeat"> 
     <div className="font-mono text-5xl text-center text-black py-60"> Clubs/Extraccuricular</div>
      <div className="flex flex-col items-center justify-center -mt-36 space-y-8 ">
        <div className="bg-Bluedark bg-opacity-95 shadow-lg w-2/5 p-4 rounded-lg text-white">
          <h2 className="text-lg font-semibold mb-4">Suggested clubs for your major</h2>
          <p>WOMEN IN STEM</p>
          <p>UTD Girls Who Code</p>
          <p>Artificial Intelligence Society</p>
          <p>ACM</p>
        </div>
        <div className="bg-Bluedark bg-opacity-95 shadow-lg w-2/5 p-4 rounded-lg text-white">
          <h2 className="text-lg font-semibold mb-4">
            <a className="text-white" href="https://www.utdallas.edu/research/">Research</a>
          </h2>
        </div>
        <div className="bg-Bluedark bg-opacity-95 shadow-lg w-2/5 p-4 rounded-lg text-white">
          <h2 className="text-lg font-semibold mb-4">
            <a className="text-white" href="https://soc.utdallas.edu/">All Clubs</a>
          </h2>
        </div>
        <div className="bg-Bluedark bg-opacity-95 shadow-lg w-2/5 p-4 rounded-lg text-white">
          <h2 className="text-lg font-semibold mb-4">
            <a className="text-white" href="https://ie.utdallas.edu/go-abroad/">Study abroad</a>
          </h2>
        </div>
      </div>
      <div className="py-20"></div>
     </div>
     <Link href="/StepFourCard">
        <div className="icon" style={{ color: 'black', fontSize: '2rem', position: 'absolute', right: '300px', top:'900px', width: '40px',height: '40px' }}> {}
          <IoMdExit />
        </div>
      </Link>
   </>
  )
}

export default page