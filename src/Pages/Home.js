import React from 'react'
import main from '../img/main.jpg'

export default function Home() {
    return (
        <div>
            <div className='container'>
                <div className="flex justify-center mt-8">

                    <img src={main} alt="Main" className='max-w-3xl' />
                </div>
                <div className="flex justify-center">
                    <div className='flex flex-col gap-2 items-start max-w-3xl'>
                        <h2 className='text-3xl my-9 font-bold'>welcome to wizard Tech</h2>
                        <p className="text-left" >
                            This is a fictitious campany ans conference created by <span className='text-red-500'><a href="https://www.amazon.com/s?k=a+mazon+com&adgrpid=127260490003&hvadid=548017362226&hvdev=c&hvlocphy=1029477&hvnetw=g&hvqmt=b&hvrand=8525174546460543851&hvtargid=kwd-321362582074&hydadcr=27983_11498193&tag=hydglogoo-20&ref=pd_sl_6g4xlojujf_b" className='amazonred'>amazon Corporation,or its affiliates</a></span>,Solely <br />
                            for the creation ans developement of educational training meterials.Any resemblance to real 
                            products or services is 
                            purely coincidental, Information previded about the products or services is also fictitious ans should not be construed as respresentative of actual products or services on the <br />
                            market in a similar product or service category.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}