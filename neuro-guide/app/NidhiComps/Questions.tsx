import React from 'react'
import APCalc from './APCalc'
import APCalcBC from './APCalcBC'
import ApCSA from './ApCSA'
import APPhys1 from './APPhys1'
import APPhys2 from './APPhys2'
import APPhysEmag from './APPhysEmag'

import ApEcon from './ApEcon'
import APLit from './APLit'
import APSpan from './APSpan'
import APPhysElec from './APPhysElec'
const Questions = () => {
  return (
    <>
     <div className="my-10">
        <div className="mx-96">
            <div className="text-left text-xl">AP Calc AB</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">1</div>
                    <APCalc/>
                <div className="font-light text-xl">5</div>
            </div>
        </div>
    </div>

    <div className="mb-10">
        <div className="mx-96">
            <div className="text-left text-xl">AP Calc BC</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">1</div>
                    <APCalcBC/>
                <div className="font-light text-xl">5</div>
            </div>
        </div>
    </div>
    <div className="mb-10">
        <div className="mx-96">
            <div className="text-left text-xl">AP Computer Science </div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">1</div>
                <ApCSA/>
                <div className="font-light text-xl">5</div>
            </div>
        </div>
    </div>
    <div className="mb-10">
        <div className="mx-96">
            <div className="text-left text-xl">AP Physics 1</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">1</div>
                    <APPhys1/>
                <div className="font-light text-xl">5</div>
            </div>
        </div>
    </div>
    <div className="mb-10">
        <div className="mx-96">
            <div className="text-left text-xl">AP Physics 2</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">1</div>
                    <APPhys2/>
                <div className="font-light text-xl">5</div>
            </div>
        </div>
    </div>


    <div className="my-10">
        <div className="mx-96">
            <div className="text-left text-xl">Physics C Emag</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">1</div>
                    
                    <APPhysEmag/>
                <div className="font-light text-xl">5</div>
            </div>
        </div>
    </div>

    <div className="mb-10">
        <div className="mx-96">
            <div className="text-left text-xl">AP Physics C Elec</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">1</div>
                    <APPhysElec/>
                <div className="font-light text-xl">5</div>
            </div>
        </div>
    </div>
    <div className="mb-10">
        <div className="mx-96">
            <div className="text-left text-xl">AP Macroeconomics</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">1</div>
                    <ApEcon/>
                <div className="font-light text-xl">5</div>
            </div>
        </div>
    </div>
    <div className="mb-10">
        <div className="mx-96">
            <div className="text-left text-xl">AP Literature</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">1</div>
                    <APLit/>
                <div className="font-light text-xl">5</div>
            </div>
        </div>
    </div>
    <div className="mb-10">
        <div className="mx-96">
            <div className="text-left text-xl">AP Spanish</div>
            <div className="flex justify-center my-8">
                <div className="font-light text-xl">1</div>
                    <APSpan/>
                <div className="font-light text-xl">5</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Questions