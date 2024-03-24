import React from 'react'
import Link from 'next/link'

import { IoMdExit } from "react-icons/io";

const page = () => {
  return (
    <div className="bg-[url('./flow.png')] bg-cover -mx-2 bg-full bg-no-repeat"> 
          <div className="font-mono text-5xl text-center text-black py-60"> Resources</div>
      <div className="flex justify-center">
      </div>
      <div className="flex flex-col items-center justify-center -my-36 space-y-9">
        <div className="flex flex-col w-96 bg-Bluedark bg-opacity-95 shadow-lg p-4 rounded-lg text-white mb-4">
          <a className="text-white hover:underline" href="https://libguides.utdallas.edu/az.php?s=102954">Research Link</a>
        </div>
        <div className="flex flex-col w-96 bg-Bluedark bg-opacity-95 shadow-lg p-4 rounded-lg text-white mb-4">
          <a className="text-white hover:underline" href="https://app.joinhandshake.com/login">Handshake Link</a>
          <a className="text-white hover:underline" href="https://www.linkedin.com/signup">Join LinkedIn</a>
        </div>
        <div className="w-96 bg-Bluedark bg-opacity-95 shadow-lg p-4 rounded-lg text-white mb-4">
          <a className="text-white hover:underline" href="/Mentor">Request Upperclassmen Mentor</a>
        </div>
      </div>
      <div className="py-44"></div>
      <Link href="/StepSixCard">
        <div className="icon" style={{ color: 'black', fontSize: '2rem', position: 'absolute', right: '300px', top:'760px', width: '40px',height: '40px' }}> {}
          <IoMdExit />
        </div>
      </Link>
    </div>
  )
}

export default page