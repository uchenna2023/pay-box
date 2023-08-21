// eslint-disable-next-line no-unused-vars
import React from 'react'

const Status = () => {
  return (
    <div className=' h-[9.4rem] bg-[#FFF] p-3 rounded-[.6rem]'>
                <div className='w-full bg-[#F6FAFF] h-full rounded-[.6rem]'>
                <div className='flex flex-row justify-between pl-3 pr-3 pt-3 items-center'>
                    <h4 className='text-sm text-[#4F64A7] font-nunito'>Transaction status</h4>
                    <button className=' pt-2 pb-2 pl-3 pr-3 rounded-md bg-[#EAF4FF]'>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <p className='text-xs text-[#032282] font-nunito'>Today</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.67399 10.2181L11.7188 7.1436C12.3194 6.53713 11.8941 5.5 11.0448 5.5H4.95517C4.10586 5.5 3.68057 6.53713 4.28119 7.1436L7.32601 10.2181C7.69827 10.594 8.30173 10.594 8.67399 10.2181Z" fill="#032282"/>
                        </svg>
                    </div>
                    </button>
                </div>
                <div className='flex flex-row gap-20 justify-evenly -ml-4 mt-6'>
                    <div>
                    <div>
                        <div className='flex flex-row justify-center gap-2 items-center'>
                        <div className='w-2 h-2 rounded-full bg-[#18A201]'></div>
                        <p className='text-xs text-[#4F64A7] font-nunito'>Successful</p>
                        </div>
                        <h4 className='font-bold text-[#032282] font-sora'>442</h4>
                    </div>
                    </div>
                    <div>
                    <div>
                    <div className='flex flex-row justify-center gap-3 items-center'>
                        <div className='w-2 h-2 rounded-full bg-[#F00]'></div>
                        <p className='text-xs text-[#4F64A7] font-nunito'>Failed</p>
                        </div>
                        <h4 className='font-bold  text-[#032282] font-sora'>18</h4>
                    </div>
                    </div>
                </div>
                </div>
            </div>
  )
}

export default Status