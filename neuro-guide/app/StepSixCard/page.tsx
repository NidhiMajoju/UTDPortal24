import React from 'react'
import Link from 'next/link'
import FileNav from '../NidhiComps/FileNav'
import Bio from '../NidhiComps/Bio'

const page = () => {
  return (
    <>
    <div className="bg-[url('./card6.png')] bg-cover -mx-2 bg-no-repeat">
      <Bio/>
      <div className="text-center font-mono text-6xl font-semibold mt-24 mb-2 text-black mx-80">6. Engineering Advice </div>
      <div className="text-center font-mono  text-6xl font-semibold mb-96 text-black mx-96"> </div>
      <Link href = "/Resources" className = "relative top-custom-bottom2c font-mono mx-custom-mx text-2xl">click me</Link>
      <div className="mb-custom-mb1"></div>
      <FileNav/>
      <div className="mb-56"></div>
    </div>
    </>
  )
}

export default page