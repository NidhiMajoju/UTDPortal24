import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="bg-[url('./flow.png')] bg-cover -mx-2 bg-full bg-no-repeat"> 
      <div className="font-mono text-5xl text-center py-56"> Welcome to UTD</div>
        <div className="flex flex-col justify-between mx-96 -my-24">
          <input className = "bg-lightBeige rounded-xl py-2 px-3 text-black placeholder-gray-400 font-normal text-xl"  type="text" placeholder='NetID'/>
          <input className = "bg-lightBeige rounded-xl py-2 px-3 text-black  placeholder-gray-400 font-normal text-xl my-8"  type="password" placeholder='Password'/>
        </div>
        <div className="py-24"></div>
      <Link href = "/StepOneCard" className = "relative left-80 mx-96 px-12 py-6 bg-black text-white rounded-3xl mb-7">Get Started</Link>
      <div className="py-24"></div>
      </div>

    </>
 
  )
}
