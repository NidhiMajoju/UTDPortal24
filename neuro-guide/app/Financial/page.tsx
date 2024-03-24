import React from 'react'
import Link from 'next/link'

import { IoMdExit } from "react-icons/io";



const page = () => {
  return (
    <>
     <div className="bg-[url('./flow.png')] bg-cover -mx-2 bg-full bg-no-repeat"> 
      <div className="font-mono text-5xl text-center text-white py-20 mb-4"> Financial Information</div>
      <div className="flex flex-col justify-center items-center space-y-5 p-20">
      <div className="clubs1 flex flex-col justify-center items-center bg-Bluedark bg-opacity-95 shadow-lg w-1/2 h-24 rounded-lg text-white">
        <a className="link clu text-center" href="https://idp.utdallas.edu/idp/profile/SAML2/Redirect/SSO?execution=e1s1">Accept Scholarships</a>
      </div>
      <div className="clubs1 flex flex-col justify-center items-center bg-Bluedark bg-opacity-95 shadow-lg w-1/2 h-24 rounded-lg text-white">
        <a className="link clu text-center" href="https://studentaid.gov/fsa-id/sign-in/landing">Apply for FAFSA</a>
      </div>
      <div className="clubs1 flex flex-col justify-center items-center bg-Bluedark bg-opacity-95 shadow-lg w-1/2 h-24 rounded-lg text-white">
        <a className="link clu text-center" href="https://bursar.utdallas.edu/">EZ Pay</a>
      </div>
      <div className="clubs1 flex flex-col justify-center items-center bg-Bluedark bg-opacity-95 shadow-lg w-1/2 h-24 rounded-lg text-white">
        <a className="link clu text-center" href="https://finaid.utdallas.edu/calculator/">Tuition Calculator</a>
      </div>
    </div>
    <Link href="/StepFiveCard">
        <div className="icon" style={{ color: 'black', fontSize: '2rem', position: 'absolute', right: '300px', top:'760px', width: '40px',height: '40px' }}> {}
          <IoMdExit />
        </div>
      </Link>
      </div>
    </>
  )
}

export default page