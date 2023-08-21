// eslint-disable-next-line no-unused-vars
import React from 'react'
import strongbox from '../assets/strongbox.svg'
import Chevron from '../assets/Chevron.svg'
import radar from '../assets/radar.svg'
import security from '../assets/security.svg'
import medal from '../assets/medal.svg'
import cards from '../assets/cards.svg'
import card from '../assets/card.svg'
import cube from '../assets/cube.svg'
import shop from '../assets/shop.svg'
import home from '../assets/home.svg'
import category from '../assets/category.svg'

const Nav = () => {
  return (
    <nav className=' hidden  pt-8 sm:w-[16.4rem] sm:block'>
        <div className='flex flex-col justify-start items-start pl-7'>
          <header className='pb-5 mb-5'>
            <h1 className='text-3xl font-extrabold text-white'>Paybox</h1>
            <p className='text-white text-xs'>by LibertyPay</p>
          </header>
          <nav>
            <div className='flex border-t-2 border-dashed border-t-slate-800 pt-6 flex-row gap-2'><img src={home}/><p className='text-white font-nunito'>Home</p></div>
            <div className='flex flex-row gap-2 rounded-lg w-[14rem] bg-[#192749] -ml-3 p-3 mt-4'><img src={category} className='ml-0'/><p className='text-white'>Analytic Dashboard</p></div>
            <ul className='border-t-2 border-b-2 border-dashed mt-5 mb-4 pb-4 pt-3 border-t-slate-800 border-b-slate-800'>
              <li className='w-full'>
                <div className='w-full flex flex-row justify-between pt-2 pb-2 text-base'>
                  <div className='flex flex-row gap-2'>
                    <img src={strongbox}/>
                    <p className='text-[#FFF] font-nunito'>Personal</p>
                  </div>
                  <div>
                    <img src={Chevron}/>
                  </div>
                </div>
              </li>
              <li className='w-full'>
                <div className='w-full flex flex-row justify-between pt-2 pb-2 text-base'>
                  <div className='flex flex-row gap-2 flex-1'>
                    <img src={shop}/>
                    <p className='text-[#FFF] font-nunito'>Sale hub</p>
                  </div>
                  <div>
                    <img src={Chevron}/>
                  </div>
                </div>
              </li>
              <li className='w-full'>
                <div className='w-full flex flex-row justify-between pt-2 pb-2 text-base'>
                  <div className='flex flex-row gap-2 flex-1'>
                    <img src={cube}/>
                    <p className='text-[#FFF] font-nunito'>Talent management</p>
                  </div>
                  <div>
                    <img src={Chevron}/>
                  </div>
                </div>
              </li>
              <li className='w-full'>
                <div className='w-full flex flex-row justify-between pt-2 pb-2 text-base'>
                  <div className='flex flex-row gap-2 flex-1'>
                    <img src={card}/>
                    <p className='text-[#FFF] font-nunito'>Spend management</p>
                  </div>
                  <div>
                    <img src={Chevron}/>
                  </div>
                </div>
              </li>
              <li className='w-full'>
                <div className='w-full flex flex-row justify-between pt-2 pb-2 text-base'>
                  <div className='flex flex-row gap-2 flex-1'>
                    <img src={cards}/>
                    <p className='text-[#FFF] font-nunito'>Cards</p>
                  </div>
                </div>
              </li>
            </ul>
            <ul>
            <li className='w-full'>
                <div className='w-full flex flex-row justify-between pt-2 pb-2 text-base'>
                  <div className='flex flex-row gap-2 flex-1'>
                    <img src={medal}/>
                    <p className='text-[#FFF] font-nunito'>Leaderboard</p>
                  </div>
                </div>
              </li>
              <li className='w-full'>
                <div className='w-full flex flex-row justify-between pt-2 pb-2 text-base'>
                  <div className='flex flex-row gap-2 flex-1'>
                    <img src={security}/>
                    <p className='text-[#FFF] font-nunito'>Profile and Settings</p>
                  </div>
                </div>
              </li>
              <li className='w-full'>
                <div className='w-full flex flex-row justify-between pt-2 pb-2 text-base'>
                  <div className='flex flex-row gap-2 flex-1'>
                    <img src={radar}/>
                    <p className='text-[#FFF] font-nunito'>Bank Performance</p>
                  </div>
                  <div>
                    <img src={Chevron}/>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
  )
}

export default Nav