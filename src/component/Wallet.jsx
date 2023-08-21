// eslint-disable-next-line no-unused-vars
import React from 'react'
import eye from '../assets/eye.svg'
import Rectangle from '../assets/Rectangle.png'
import Rectangle2 from '../assets/Rectangle1.png'

const Wallet = () => {
  return (
    <div className=' h-[9.4rem] bg-[#032282] rounded-xl relative z-20 overflow-hidden'>
                <p className='pt-5 ml-7 text-sm text-[#CDCDCD] font-nunito'>Wallet Balance</p>
                <div className='w-full pl-6 flex flex-row gap-3 justify-start items-center mx-auto'>
                <h2 className='text-[#FFF] text-xl ml-1 font-sora'>₦50,000.00</h2>
                <span><img src={eye}/></span>
                </div>
                <div className='flex flex-row mt-4 sm:justify-evenly justify-between pr-7 sm:pl-0 pl-7 sm:gap-2 gap-4 z-20'>
                <button className='bg-[#FFFFFF26] pr-4 pl-4 pt-2 pb-2 text-[#FFF] text-sm rounded-md font-nunito'>Add fund</button>
                <button className='bg-[#FFFFFF26]  pr-4 pl-4 pt-2 pb-2 text-[#FFF] text-sm rounded-md font-nunito'>Withdraw</button>
                <span className='absolute -right-[.2rem] -bottom-[1rem] z-10'><img src={Rectangle}/></span>
                <span className='absolute left-[5.3rem] -top-1 z-10'><img src={Rectangle}/></span>
                <span className='absolute left-[9.8rem] top-0 z-10'><img src={Rectangle2}/></span>
                <span className='absolute left-[9.5] top-1 z-10'><img src={Rectangle2}/></span>
                </div>
            </div>
  )
}

export default Wallet