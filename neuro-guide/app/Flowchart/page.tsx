import Link from 'next/link'
import { IoMdExit } from "react-icons/io";
import React from 'react'

const page = () => {
  return (
    <>
     <div className="bg-[url('./flow.png')] bg-cover -mx-2 bg-full bg-no-repeat">
        <div className="pt-56 text-5xl font-mono text-center font-medium text-black"> First Sem Planner </div>
        <div className="text-md mt-5 mx-96 font-light font-mono text-center font-sm text-black">pick the highest level class you can. The second number in the course name is the number of credit hours for the class. Pick 12-15 hours of classes</div>

        <div className="text-center text-medium rounded-3xl font-mono px-8 py-1 bg-black mx-80 text-white mt-12">Required Courses</div>
        <div className="font-mono text-medium text-black flex flex-row justify-center space-x-5 my-10">
            <div className="">ECS 1100 | </div>
            <div className="">UNIV 1010 | </div>
            <div className="">CS 1200</div>
        </div>
        <div className="flex flex-row justify-center space-x-24">
        <div className="flex flex-col justify-between ">
        <div className="text-center text-medium rounded-3xl font-mono w-56 mb-4 px-8 py-1 bg-black text-white mt-12">CS Class - 1</div>
        
            <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-black">CS 1436</label>
            </div>
            <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-black">CS 1337</label>
            </div>
            <div className="flex items-center mb-32">
            <input id="checkbox2" type="checkbox" disabled className="form-checkbox h-4 w-4 text-black cursor-not-allowed"/>
            <label htmlFor="checkbox2" className="ms-2 text-sm font-medium text-black">CS 2336 OR CS 2337</label>
            </div>
        </div>

        <div className="flex flex-col justify-between ">
        <div className="text-center text-medium rounded-3xl font-mono w-56  mb-4 px-8 py-1 bg-black text-white mt-12">Core Class - 2+</div>
            <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-black">THEA 1310</label>
            </div>
            <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-black">GOVT 2305</label>
            </div>
            <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-black">HIST 2301</label>
            </div>
            <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-black">ECON 2301</label>
            </div>
            <div className="flex items-center mb-32">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-black">RHET 1302</label>
            </div>
        </div>

        <div className="flex flex-col justify-between ">
        <div className="text-center text-medium rounded-3xl font-mono w-56  mb-4 px-8 py-1 bg-black text-white mt-12">Math - 1+</div>
        
            <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-black">MATH 2413 or 2417</label>
            </div>
            <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-black">MATH2414 or 2419</label>
            </div>
            <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-black">CS 2305</label>
            </div>
            <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-black">PHYS 2325/2125</label>
            </div>
            <div className="flex items-center mb-32">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium  text-black">PHYS 2326/2126</label>
            </div>
        </div>
        </div>
        <a href="https://registrar.utdallas.edu/registration/schedule-planner/" className="relative px-12 py-6 mx-96 left-64 -mt-20 bg-black text-white rounded-3xl mb-7">Schedule Planner</a>
<div className="py-12"></div>
        <Link href="/StepTwoCard">
        <div className="icon" style={{ color: 'black', fontSize: '2rem', position: 'absolute', right: '300px', top:'900px', width: '40px',height: '40px' }}> {}
          <IoMdExit />
        </div>
      </Link>
        
    </div>
    </>
  )
}

export default page