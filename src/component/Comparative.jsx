// eslint-disable-next-line no-unused-vars
import React from 'react'
import Group from '../assets/Group.svg'

const Comparative = () => {
  return (
    <div className='sm:h-[12.7rem] bg-[#FFF] rounded-xl pb-10 col-start-2 col-end-4 flex flex-col sm:flex sm:flex-row'>
                <div className='p-5 flex-1'>
                <div className='border-b-2 sm:w-60 w-56 border-dashed'>
                    <p className='font-medium mb-3 font-nunito'>Transaction Comparative</p>
                    <div>
                    <div className='mb-5'>
                        <div className='flex flex-row gap-2 justify-start items-center'>
                        <div className='w-2 h-2 rounded-full bg-[#032282]'></div>
                        <p className='text-xs text-[#37474F] font-nunito'>send Money</p>
                        </div>
                        <h4 className='text-[#263238] text-base font-bold font-sora'>₦105,000,000</h4>
                    </div>
                    </div>
                </div>
                <div className='flex gap-6 flex-row mt-5'>
                    <div>
                    <div>
                        <div className='flex flex-row gap-2 justify-start items-center'>
                        <div className='w-2 h-2 rounded-full bg-[#F4BE38]'></div>
                        <p className='text-xs text-[#37474F] font-nunito'>Cashout</p>
                        </div>
                        <h4 className='text-[#263238] text-base font-bold font-sora'>₦12,000,000</h4>
                    </div>
                    </div>
                    <div>
                    <div>
                        <div className='flex flex-row gap-2 justify-start items-center'>
                        <div className='w-2 h-2 rounded-full bg-[#EDE1FF]'></div>
                        <p className='text-xs text-[#37474F] font-nunito'>Utility and bills</p>
                        </div>
                        <h4 className='text-[#263238] text-base font-bold font-sora'>₦4,200,000</h4>
                    </div>
                    </div>
                </div>
                </div>
                <div className='flex-1 relative'>
                <img src={Group}/>
                    <div className='absolute top-16 left-5'>
                    <div className='w-9 h-9 shadow-md bg-[#FFF] rounded-full flex justify-center items-center'>
                    <p className='text-xs font-sora'>76%</p>
                    </div>
                </div>
                <div className='absolute top-20 left-40'>
                    <div className='w-9 h-9 shadow-md bg-[#FFF] rounded-full flex justify-center items-center'>
                    <p className='text-xs font-sora'>12%</p>
                    </div>
                </div>
                <div className='absolute left-20 top-[158px]'>
                    <div className='w-9 h-9 shadow-md bg-[#FFF] rounded-full flex justify-center items-center'>
                    <p className='text-xs font-sora'>12%</p>
                    </div>
                </div>
                </div>
            </div>
  )
}

export default Comparative