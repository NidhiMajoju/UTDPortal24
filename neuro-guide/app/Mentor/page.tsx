import React from 'react'
import { IoMdExit } from "react-icons/io";
import MentorQ from '../NidhiComps/MentorQ'
import Link from 'next/link';
const page = () => {
  return (
    <>
        <div className="bg-[url('./transferbg.png')] bg-cover -mx-2 bg-full bg-no-repeat">
        <div className="pt-56 text-6xl font-mono text-center font-medium text-black"> Mentor Request Form </div>
        <MentorQ/>
        <button className="relative left-80 font-mono text-2xl mb-24 py-4 px-6 bg-black text-white mx-96 rounded-3xl">submit</button>
        </div>
        <Link href="/StepSixCard">
        <div className="icon" style={{ color: 'black', fontSize: '2rem', position: 'absolute', right: '300px', top:'1300px', width: '40px',height: '40px' }}> {}
          <IoMdExit />
        </div>
      </Link>
    </>

  )
}

export default page