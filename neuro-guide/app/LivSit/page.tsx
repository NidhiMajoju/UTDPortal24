import React from 'react'
import Link from 'next/link'

import { IoMdExit } from "react-icons/io";


const page = () => {
  return (
    <>

     <div className="bg-[url('./flow.png')] bg-cover -mx-2 bg-full bg-no-repeat"> 
     <div className="font-mono text-5xl text-center text-white py-20 mb-12"> Living Situation</div>
     <div className="py-10"></div>
     <div className="flex justify-center items-center w-1/2font-mono">
     <div className="tableContainer ">
      <table className="table ">
        <thead>
          <tr className="header bg-black text-white text-2xl">
            <th className="px-20 py-10">Commuter</th>
            <th className="px-20 py-10">Living On Campus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-6 text-center"><a href="https://services.utdallas.edu/transit/park/">Parking Information</a></td>
            <td className="px-6 py-6 text-center"><a href="https://housing.utdallas.edu/housing-options/university-commons/">University Commons</a></td>
          </tr>
          <tr>
            <td className="px-6 py-6 text-center"><a href="https://services.utdallas.edu/transit/permits/">Buy Parking Pass</a></td>
            <td className="px-6 py-6 text-center"><a href="https://housing.utdallas.edu/housing-options/university-village/">University Village</a></td>
          </tr>
          <tr>
            <td className="px-6 py-6 text-center"><a href="https://services.utdallas.edu/transit/myparking/">Register Vehicle</a></td>
            <td className="px-6 py-6 text-center"><a href="https://housing.utdallas.edu/housing-options/canyon-creek-heights/">Canyon Creek</a></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    <div className="py-44"></div>
    <Link href="/StepThreeCard">
        <div className="icon" style={{ color: 'black', fontSize: '2rem', position: 'absolute', right: '300px', top:'700px', width: '40px',height: '40px' }}> {}
          <IoMdExit />
        </div>
      </Link>
     </div>
    </>

  )
}

export default page