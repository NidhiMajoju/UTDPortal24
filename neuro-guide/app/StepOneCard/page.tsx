import React from 'react'
import Link from 'next/link'
import FileNav from '../NidhiComps/FileNav'
import Bio from '../NidhiComps/Bio'

const page = () => {
  return (
    <>
    <div className="bg-[url('./card1.png')] bg-cover -mx-2 bg-no-repeat">
      <Bio/>
      <div className="text-center font-mono text-6xl font-semibold mt-28 mb-2 text-black mx-96">1. Sign up for </div>
      <div className="text-center font-mono  text-6xl font-semibold mb-96 text-black mx-96">orientation </div>
      <Link href = "/OrientationSignUp" className = "relative top-custom-bottom2 font-mono mx-custom-mx text-2xl">click me</Link>
      <div className="mb-custom-mb"></div>
      <FileNav/>
      <div className="mb-56"></div>
    </div>
    </>
  )
}

export default page