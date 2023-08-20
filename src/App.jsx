import './App.css'
import Vector from './assets/Vector.svg'
import Ellipse from './assets/Ellipse.svg'
import home from './assets/home.svg'
import category from './assets/category.svg'
import eye from './assets/eye.svg'
import Rectangle from './assets/Rectangle.png'
import Rectangle2 from './assets/Rectangle1.png'
import Group from './assets/Group.svg'
import strongbox from './assets/strongbox.svg'
import Chevron from './assets/Chevron.svg'
import radar from './assets/radar.svg'
import security from './assets/security.svg'
import medal from './assets/medal.svg'
import cards from './assets/cards.svg'
import card from './assets/card.svg'
import cube from './assets/cube.svg'
import shop from './assets/shop.svg'

function App() {
  

  return (
    <>
      <main className='bg-[#07112D] pr-0  w-[full] flex justify-center sm:justify-end sm:pt-6  sm:pr-11 sm:pb-4 sm:w-[101.25rem]'>
      <section className=' hidden  pt-8 sm:w-[16.4rem] sm:block'>
        <div className='flex flex-col justify-start items-start pl-7'>
          <section className='pb-7 mb-5'>
            <h1 className='text-3xl font-extrabold text-white'>PayBox</h1>
            <p className='text-white text-xs'>by LibertyPay</p>
          </section>
          
          <nav>
            <hr className='text-white  mt-5 h-2 mb-5'/>
            <div className='flex flex-row gap-2'><img src={home}/><p className='text-white font-nunito'>Home</p></div>
            <div className='flex flex-row gap-2 rounded-lg w-[14rem] bg-[#192749] -ml-3 p-3 mt-4'><img src={category} className='ml-0'/><p className='text-white'>Analytic Dashboard</p></div>
            <hr className='text-white  mt-5 h-2 mb-5'/>
            <ul>
              <li className='w-full'>
                <div className='w-full flex flex-row justify-between pt-3 pb-3 text-base'>
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
                <div className='w-full flex flex-row justify-between pt-3 pb-3 text-base'>
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
                <div className='w-full flex flex-row justify-between pt-3 pb-3 text-base'>
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
                <div className='w-full flex flex-row justify-between pt-3 pb-3 text-base'>
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
                <div className='w-full flex flex-row justify-between pt-3 pb-3 text-base'>
                  <div className='flex flex-row gap-2 flex-1'>
                    <img src={cards}/>
                    <p className='text-[#FFF] font-nunito'>Cards</p>
                  </div>
                </div>
              </li>
            </ul>
            <hr className='text-white  mt-5 h-2 mb-5'/>
            <ul>
            <li className='w-full'>
                <div className='w-full flex flex-row justify-between pt-3 pb-3 text-base'>
                  <div className='flex flex-row gap-2 flex-1'>
                    <img src={medal}/>
                    <p className='text-[#FFF] font-nunito'>Leaderboard</p>
                  </div>
                </div>
              </li>
              <li className='w-full'>
                <div className='w-full flex flex-row justify-between pt-3 pb-3 text-base'>
                  <div className='flex flex-row gap-2 flex-1'>
                    <img src={security}/>
                    <p className='text-[#FFF] font-nunito'>Profile and Settings</p>
                  </div>
                </div>
              </li>
              <li className='w-full'>
                <div className='w-full flex flex-row justify-between pt-3 pb-3 text-base'>
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
      </section>
      <section className='sm:w-[81rem] w-full bg-[#F8F9FB] sm:rounded-2xl sm:pb-5 pb-20'>
        <nav className='w-full flex justify-between sm:pl-12 sm:pr-14 sm:pt-12 pb-0 sm:pb-7 bg-[#032282] mb-4 sm:bg-[#FFFFFF] sm:rounded-3xl'>
          <div className='w-full flex flex-col gap-1'>
            <div className='flex w-full justify-between items-center p-2 flex-row sm:hidden'>
                <div className='flex flex-row gap-1 pl-3 items-center'>
                  <div className='text-white'>4:44</div>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.67805 12.7902L12.2402 2.25L1.70001 6.81218H7.67805V12.7902Z" fill="white"/>
                      </svg>
                  </div>
                </div>
                <div className='flex flex-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none">
                    <path opacity="0.25" fillRule="evenodd" clipRule="evenodd" d="M16.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V3C15.5 2.44772 15.9477 2 16.5 2Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13 4H12C11.4477 4 11 4.44772 11 5V11C11 11.5523 11.4477 12 12 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4ZM7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6ZM3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z" fill="white"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9828 4.52294C12.0717 2.89057 9.6574 2 7.13272 2C4.60056 2 2.17953 2.89589 0.266142 4.53708L0.103645 4.67646C-0.0277638 4.78918 -0.0353068 4.98954 0.0872572 5.11176L1.2142 6.23557C1.32359 6.34466 1.4985 6.3521 1.6168 6.2527L1.75641 6.13541C3.26327 4.86943 5.15517 4.18035 7.13272 4.18035C9.10354 4.18035 10.9894 4.86472 12.494 6.12283L12.6336 6.23952C12.7519 6.33847 12.9264 6.33084 13.0356 6.22195L14.1627 5.09797C14.2855 4.97558 14.2777 4.77488 14.1459 4.66228L13.9828 4.52294ZM7.13272 5.46979C8.72355 5.46979 10.251 5.99754 11.4953 6.97486L11.6711 7.11298C11.8113 7.2231 11.8236 7.43059 11.6974 7.55643L10.5667 8.68407C10.4621 8.78836 10.2966 8.80034 10.178 8.7122L10.0401 8.60976C9.19975 7.98518 8.18639 7.65015 7.13272 7.65015C6.07256 7.65015 5.05328 7.98934 4.2101 8.62109L4.07212 8.72448C3.95351 8.81334 3.78742 8.80164 3.68252 8.69703L2.55216 7.56981C2.42623 7.44423 2.43819 7.23727 2.57774 7.12694L2.75259 6.98871C3.99984 6.00267 5.53421 5.46979 7.13272 5.46979ZM7.13272 8.93959C7.77222 8.93959 8.3936 9.10763 8.94112 9.42805L9.16295 9.55788C9.33114 9.65631 9.36071 9.88666 9.22282 10.0242L7.32874 11.913C7.2124 12.029 7.02377 12.029 6.90743 11.913L5.02552 10.0363C4.88824 9.8994 4.91685 9.67022 5.08361 9.57107L5.30296 9.44065C5.8555 9.11212 6.48478 8.93959 7.13272 8.93959Z" fill="white"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="14" viewBox="0 0 32 14" fill="none">
                    <path opacity="0.35" fillRule="evenodd" clipRule="evenodd" d="M5.5 1.5H24.5C25.8807 1.5 27 2.61929 27 4V10.5C27 11.8807 25.8807 13 24.5 13H5.5C4.11929 13 3 11.8807 3 10.5V4C3 2.61929 4.11929 1.5 5.5 1.5ZM5.5 2.5C4.67157 2.5 4 3.17157 4 4V10.5C4 11.3284 4.67157 12 5.5 12H24.5C25.3284 12 26 11.3284 26 10.5V4C26 3.17157 25.3284 2.5 24.5 2.5H5.5Z" fill="white"/>
                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M28 4.7998C28.8904 5.25498 29.5 6.18128 29.5 7.24995C29.5 8.31862 28.8904 9.24492 28 9.7001V4.7998Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 3.5H24C24.5523 3.5 25 3.94772 25 4.5V10C25 10.5523 24.5523 11 24 11H6C5.44772 11 5 10.5523 5 10V4.5C5 3.94772 5.44772 3.5 6 3.5Z" fill="white"/>
                  </svg>
                </div>
              </div>
            <div className='flex w-full justify-between items-center pl-4 pr-4 pb-2 mt-3 flex-row'>
              <h1 className='text-white sm:text-[#242424] font-medium font- sm:font-semibold font-nunito'>Analytics Dashboard</h1>
              <button className='bg-[#FFFFFF26] pr-6 pl-6 pt-2 pb-2 text-[#FFF] text-sm rounded-md sm:hidden font-nunito'>Menu</button>
            </div>
          </div>
          
          <div className='hidden sm:flex sm:flex-row sm:gap-4'>
            <div className='w-10 border h-10 bg-[#ECF1FF] rounded-full flex justify-center items-center relative'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.4 16.33C20.12 17.08 19.53 17.65 18.76 17.91C17.68 18.27 16.57 18.54 15.45 18.73C15.34 18.75 15.23 18.7701 15.12 18.7801C14.94 18.8101 14.76 18.83 14.58 18.85C14.36 18.8801 14.13 18.9 13.9 18.92C13.27 18.97 12.65 19 12.02 19C11.38 19 10.74 18.97 10.11 18.91C9.84002 18.89 9.58002 18.8601 9.32002 18.82C9.17002 18.8 9.02002 18.7801 8.88002 18.76C8.77002 18.74 8.66002 18.73 8.55002 18.71C7.44002 18.53 6.34002 18.26 5.27002 17.9C4.47002 17.63 3.86002 17.06 3.59002 16.33C3.32002 15.61 3.42002 14.77 3.85002 14.05L4.98002 12.17C5.22002 11.76 5.44002 10.97 5.44002 10.49V8.63005C5.44002 5.00005 8.39002 2.05005 12.02 2.05005C15.64 2.05005 18.59 5.00005 18.59 8.63005V10.49C18.59 10.97 18.81 11.76 19.06 12.17L20.19 14.05C20.6 14.75 20.68 15.57 20.4 16.33Z" fill="#032282"/>
              <path d="M12 10.76C11.58 10.76 11.24 10.42 11.24 10V6.90001C11.24 6.48001 11.58 6.14001 12 6.14001C12.42 6.14001 12.76 6.48001 12.76 6.90001V10C12.75 10.42 12.41 10.76 12 10.76Z" fill="white"/>
              <path d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.87999 21.11C9.55999 20.81 9.31999 20.41 9.17999 20C9.30999 20.02 9.43999 20.03 9.57999 20.05C9.80999 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z" fill="#032282"/>
            </svg>
            <span className='absolute left-5 top-2'>
              <img src={Vector}/>
            </span>
            </div>
            <div className='flex flex-row gap-3'>
              <img src={Ellipse}/>
              <div>
                <h3 className='font-bold text-sm'>Dexter Olaniyi</h3>
                <p className='text-xs'>dexterola@gmail.com</p>
              </div>
              <span className='flex items-end'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.3571 11.5221C11.0987 12.7805 9.08457 12.8224 7.77583 11.6479L7.64302 11.5221L4.41079 8.08924C4.08535 7.7638 4.08535 7.23616 4.41079 6.91072C4.71119 6.61032 5.18388 6.58721 5.51079 6.8414L5.5893 6.91072L8.82153 10.3436C9.43815 10.9602 10.4177 10.9927 11.0725 10.441L11.1786 10.3436L14.4108 6.91072C14.7362 6.58529 15.2639 6.58529 15.5893 6.91072C15.8897 7.21113 15.9128 7.68382 15.6586 8.01073L15.5893 8.08924L12.3571 11.5221Z" fill="#121826"/>
              </svg>
              </span>
            </div>
          </div>
        </nav>
        <section className=' flex flex-col gap-3 sm:grid sm:grid-cols-4 p-3 sm:p-5 sm:gap-y-3 sm:gap-x-3 '>
          <div className=' h-[9.4rem] bg-[#032282] rounded-xl relative z-20 overflow-hidden'>
            <p className='pt-5 ml-7 text-sm text-[#CDCDCD]'>Wallet Balance</p>
            <div className='w-full pl-6 flex flex-row gap-3 justify-start items-center mx-auto'>
              <h2 className='text-[#FFF] text-xl ml-1 font-sora'>₦50,000.00</h2>
              <span><img src={eye}/></span>
            </div>
            <div className='flex flex-row mt-4 sm:justify-evenly justify-between pr-7 sm:pl-0 pl-7 sm:gap-2 gap-4 z-20'>
              <button className='bg-[#FFFFFF26] pr-4 pl-4 pt-2 pb-2 text-[#FFF] text-sm rounded-md'>Add fund</button>
              <button className='bg-[#FFFFFF26]  pr-4 pl-4 pt-2 pb-2 text-[#FFF] text-sm rounded-md'>Withdraw</button>
              <span className='absolute -right-[.2rem] -bottom-[1rem] z-10'><img src={Rectangle}/></span>
              <span className='absolute left-[5.3rem] -top-1 z-10'><img src={Rectangle}/></span>
              <span className='absolute left-[9.8rem] top-0 z-10'><img src={Rectangle2}/></span>
              <span className='absolute left-[9.5] top-1 z-10'><img src={Rectangle2}/></span>
              
            </div>
          </div>
          <div className=' h-[9.4rem] bg-[#FFF] pl-3 pr-3 rounded-xl'>
            <div className='w-full h-[6.5rem] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4 text-sm'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4 font-sora'>₦194,000</h2>

            </div>
            <div className='flex flex-row mt-2'>
              <p className='ml-7 text-xs '>View details</p>
              <span className='flex flex-row relative'>
                <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.8112 7.4519C13.0193 8.6788 13.0595 10.6426 11.932 11.9186L11.8112 12.0481L8.51569 15.1995C8.20327 15.5168 7.69674 15.5168 7.38432 15.1995C7.09594 14.9066 7.07375 14.4458 7.31777 14.127L7.38432 14.0505L10.6799 10.899C11.2718 10.2978 11.303 9.34277 10.7733 8.70431L10.6799 8.60095L7.38432 5.44952C7.0719 5.13222 7.0719 4.61778 7.38432 4.30048C7.67271 4.00758 8.1265 3.98505 8.44033 4.23288L8.51569 4.30048L11.8112 7.4519Z" fill="#032282"/>
                </svg>
                <svg className='absolute right-1 text-sky-200'xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.8112 7.4519C13.0193 8.6788 13.0595 10.6426 11.932 11.9186L11.8112 12.0481L8.51569 15.1995C8.20327 15.5168 7.69674 15.5168 7.38432 15.1995C7.09594 14.9066 7.07375 14.4458 7.31777 14.127L7.38432 14.0505L10.6799 10.899C11.2718 10.2978 11.303 9.34277 10.7733 8.70431L10.6799 8.60095L7.38432 5.44952C7.0719 5.13222 7.0719 4.61778 7.38432 4.30048C7.67271 4.00758 8.1265 3.98505 8.44033 4.23288L8.51569 4.30048L11.8112 7.4519Z" fill="#032282"/>
                </svg>
              </span>
            </div>
          </div>
          <div className=' h-[9.4rem] bg-[#FFF] pl-3 pr-3 rounded-xl'>
            <div className='w-full h-[6.5rem] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4 text-sm'>Total Customers</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4 font-sora'>₦919</h2>

            </div>
            <div className='flex flex-row mt-2'>
              <p className='ml-7 text-xs '>View details</p>
              <span className='flex flex-row relative'>
                <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.8112 7.4519C13.0193 8.6788 13.0595 10.6426 11.932 11.9186L11.8112 12.0481L8.51569 15.1995C8.20327 15.5168 7.69674 15.5168 7.38432 15.1995C7.09594 14.9066 7.07375 14.4458 7.31777 14.127L7.38432 14.0505L10.6799 10.899C11.2718 10.2978 11.303 9.34277 10.7733 8.70431L10.6799 8.60095L7.38432 5.44952C7.0719 5.13222 7.0719 4.61778 7.38432 4.30048C7.67271 4.00758 8.1265 3.98505 8.44033 4.23288L8.51569 4.30048L11.8112 7.4519Z" fill="#032282"/>
                </svg>
                <svg className='absolute right-1 text-sky-200'xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.8112 7.4519C13.0193 8.6788 13.0595 10.6426 11.932 11.9186L11.8112 12.0481L8.51569 15.1995C8.20327 15.5168 7.69674 15.5168 7.38432 15.1995C7.09594 14.9066 7.07375 14.4458 7.31777 14.127L7.38432 14.0505L10.6799 10.899C11.2718 10.2978 11.303 9.34277 10.7733 8.70431L10.6799 8.60095L7.38432 5.44952C7.0719 5.13222 7.0719 4.61778 7.38432 4.30048C7.67271 4.00758 8.1265 3.98505 8.44033 4.23288L8.51569 4.30048L11.8112 7.4519Z" fill="#032282"/>
                </svg>
              </span>
            </div>
          </div>
          <div className=' h-[9.4rem] bg-[#FFF] pl-3 pr-3 rounded-xl'>
            <div className='w-full h-[6.5rem] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4 text-sm'>Total POS</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4 font-sora'>0</h2>

            </div>
            <div className='flex flex-row mt-2'>
              <p className='ml-7 text-xs '>View details</p>
              <span className='flex flex-row relative'>
                <svg className='' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.8112 7.4519C13.0193 8.6788 13.0595 10.6426 11.932 11.9186L11.8112 12.0481L8.51569 15.1995C8.20327 15.5168 7.69674 15.5168 7.38432 15.1995C7.09594 14.9066 7.07375 14.4458 7.31777 14.127L7.38432 14.0505L10.6799 10.899C11.2718 10.2978 11.303 9.34277 10.7733 8.70431L10.6799 8.60095L7.38432 5.44952C7.0719 5.13222 7.0719 4.61778 7.38432 4.30048C7.67271 4.00758 8.1265 3.98505 8.44033 4.23288L8.51569 4.30048L11.8112 7.4519Z" fill="#032282"/>
                </svg>
                <svg className='absolute right-1 text-sky-200'xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.8112 7.4519C13.0193 8.6788 13.0595 10.6426 11.932 11.9186L11.8112 12.0481L8.51569 15.1995C8.20327 15.5168 7.69674 15.5168 7.38432 15.1995C7.09594 14.9066 7.07375 14.4458 7.31777 14.127L7.38432 14.0505L10.6799 10.899C11.2718 10.2978 11.303 9.34277 10.7733 8.70431L10.6799 8.60095L7.38432 5.44952C7.0719 5.13222 7.0719 4.61778 7.38432 4.30048C7.67271 4.00758 8.1265 3.98505 8.44033 4.23288L8.51569 4.30048L11.8112 7.4519Z" fill="#032282"/>
                </svg>
              </span>
            </div>
          </div>
          <div className=' h-[12.7rem] bg-[#FFF] p-3 rounded-[0.6rem]'>
            <div className='w-full bg-[#F6FAFF] h-full rounded-[0.6rem]'>
              <div className='flex flex-row justify-between pl-3 pr-3 pt-3 items-center'>
                <h4 className='text-sm text-[#4F64A7]'>Total transfer</h4>
                <button className=' pt-2 pb-2 pl-3 pr-2 rounded-md bg-[#EAF4FF]'>
                  <div className='flex flex-row justify-center items-center gap-3'>
                    <p className='text-xs text-[#032282]'>more</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8.67399 10.2181L11.7188 7.1436C12.3194 6.53713 11.8941 5.5 11.0448 5.5H4.95517C4.10586 5.5 3.68057 6.53713 4.28119 7.1436L7.32601 10.2181C7.69827 10.594 8.30173 10.594 8.67399 10.2181Z" fill="#032282"/>
                    </svg>
                  </div>
                </button>
              </div>
              <div className='flex flex-row gap-20 justify-evenly -ml-4 mt-6'>
                <div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>Today</p>
                    <h4 className='font-bold text-[#032282] font-sora'>₦500</h4>
                  </div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>This week</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                </div>
                <div>
                <div>
                    <p className='text-sm text-[#4F64A7]'>Yesterday</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>Last week</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' h-[12.7rem] bg-[#FFF] p-3 rounded-[0.6rem]'>
            <div className='w-full bg-[#F6FAFF] h-full rounded-[.6rem]'>
              <div className='flex flex-row justify-between pl-3 pr-3 pt-3 items-center'>
                <h4 className='text-sm text-[#4F64A7]'>Total transfer</h4>
                <button className=' pt-2 pb-2 pl-3 pr-2 rounded-md bg-[#EAF4FF]'>
                  <div className='flex flex-row justify-center items-center gap-3'>
                    <p className='text-xs text-[#032282]'>more</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8.67399 10.2181L11.7188 7.1436C12.3194 6.53713 11.8941 5.5 11.0448 5.5H4.95517C4.10586 5.5 3.68057 6.53713 4.28119 7.1436L7.32601 10.2181C7.69827 10.594 8.30173 10.594 8.67399 10.2181Z" fill="#032282"/>
                    </svg>
                  </div>
                </button>
              </div>
              <div className='flex flex-row gap-20 justify-evenly -ml-4 mt-6'>
                <div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>Today</p>
                    <h4 className='font-bold text-[#032282] font-sora'>₦500</h4>
                  </div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>This week</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                </div>
                <div>
                <div>
                    <p className='text-sm text-[#4F64A7]'>Yesterday</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>Last week</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' h-[12.7rem] bg-[#FFF] p-3 rounded-[.6rem]'>
            <div className='w-full bg-[#F6FAFF] h-full rounded-[.6rem]'>
              <div className='flex flex-row justify-between pl-3 pr-3 pt-3 items-center'>
                <h4 className='text-sm text-[#4F64A7]'>Total transfer</h4>
                <button className=' pt-2 pb-2 pl-3 pr-2 rounded-md bg-[#EAF4FF]'>
                  <div className='flex flex-row justify-center items-center gap-3'>
                    <p className='text-xs text-[#032282]'>more</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8.67399 10.2181L11.7188 7.1436C12.3194 6.53713 11.8941 5.5 11.0448 5.5H4.95517C4.10586 5.5 3.68057 6.53713 4.28119 7.1436L7.32601 10.2181C7.69827 10.594 8.30173 10.594 8.67399 10.2181Z" fill="#032282"/>
                    </svg>
                  </div>
                </button>
              </div>
              <div className='flex flex-row gap-20 justify-evenly -ml-4 mt-6'>
                <div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>Today</p>
                    <h4 className='font-bold text-[#032282] font-sora'>₦500</h4>
                  </div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>This week</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                </div>
                <div>
                <div>
                    <p className='text-sm text-[#4F64A7]'>Yesterday</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>Last week</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' h-[12.7rem] bg-[#FFF] p-3 rounded-[.6rem]'>
            <div className='w-full bg-[#F6FAFF] h-full rounded-[.6rem]'>
              <div className='flex flex-row justify-between pl-3 pr-3 pt-3 items-center'>
                <h4 className='text-sm text-[#4F64A7]'>Total transfer</h4>
                <button className=' pt-2 pb-2 pl-3 pr-2 rounded-md bg-[#EAF4FF]'>
                  <div className='flex flex-row justify-center items-center gap-3'>
                    <p className='text-xs text-[#032282]'>More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8.67399 10.2181L11.7188 7.1436C12.3194 6.53713 11.8941 5.5 11.0448 5.5H4.95517C4.10586 5.5 3.68057 6.53713 4.28119 7.1436L7.32601 10.2181C7.69827 10.594 8.30173 10.594 8.67399 10.2181Z" fill="#032282"/>
                    </svg>
                  </div>
                </button>
              </div>
              <div className='flex flex-row gap-20 justify-evenly -ml-4 mt-6'>
                <div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>Today</p>
                    <h4 className='font-bold text-[#032282] font-sora'>₦500</h4>
                  </div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>This week</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                </div>
                <div>
                <div>
                    <p className='text-sm text-[#4F64A7]'>Yesterday</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>Last week</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' h-[9.4rem] bg-[#FFF] p-3 rounded-[.6rem]'>
            <div className='w-full bg-[#F6FAFF] h-full rounded-[.6rem]'>
              <div className='flex flex-row justify-between pl-3 pr-3 pt-3 items-center'>
                <h4 className='text-sm text-[#4F64A7]'>Total transfer</h4>
                <button className=' pt-2 pb-2 pl-3 pr-3 rounded-md bg-[#EAF4FF]'>
                  <div className='flex flex-row justify-center items-center gap-3'>
                    <p className='text-xs text-[#032282]'>Today</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8.67399 10.2181L11.7188 7.1436C12.3194 6.53713 11.8941 5.5 11.0448 5.5H4.95517C4.10586 5.5 3.68057 6.53713 4.28119 7.1436L7.32601 10.2181C7.69827 10.594 8.30173 10.594 8.67399 10.2181Z" fill="#032282"/>
                    </svg>
                  </div>
                </button>
              </div>
              <div className='flex flex-row gap-20 justify-evenly -ml-4 mt-6'>
                <div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>Today</p>
                    <h4 className='font-bold text-[#032282] font-sora'>₦500</h4>
                  </div>
                </div>
                <div>
                <div>
                    <p className='text-sm text-[#4F64A7]'>Yesterday</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>₦500</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' h-[9.4rem] bg-[#FFF] p-3 rounded-[.6rem]'>
            <div className='w-full bg-[#F6FAFF] h-full rounded-[.6rem]'>
              <div className='flex flex-row justify-between pl-3 pr-3 pt-3 items-center'>
                <h4 className='text-sm text-[#4F64A7]'>Average Transaction Count</h4>
                <button className=' pt-2 pb-2 pl-3 pr-3 rounded-md bg-[#EAF4FF]'>
                  <div className='flex flex-row justify-center items-center gap-3'>
                    <p className='text-xs text-[#032282]'>Today</p>
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
                      <p className='text-sm text-[#4F64A7]'>Successful</p>
                    </div>
                    <h4 className='font-bold text-[#032282] font-sora'>442</h4>
                  </div>
                </div>
                <div>
                  <div>
                   <div className='flex flex-row justify-center gap-2 items-center'>
                      <div className='w-2 h-2 rounded-full bg-[#F00]'></div>
                      <p className='text-sm text-[#4F64A7]'>Failed</p>
                    </div>
                    <h4 className='font-bold  text-[#032282] font-sora'>18</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' h-[9.4rem] bg-[#FFF] p-3 rounded-[.6rem]'>
            <div className='w-full bg-[#F6FAFF] h-full rounded-[.6rem]'>
              <div className='flex flex-row justify-between pl-3 pr-3 pt-3 items-center'>
                <h4 className='text-sm text-[#4F64A7]'>Average Transaction Count</h4>
                <button className=' pt-2 pb-2 pl-3 pr-3 rounded-md bg-[#EAF4FF]'>
                  <div className='flex flex-row justify-center items-center gap-3'>
                    <p className='text-xs text-[#032282]'>Today</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8.67399 10.2181L11.7188 7.1436C12.3194 6.53713 11.8941 5.5 11.0448 5.5H4.95517C4.10586 5.5 3.68057 6.53713 4.28119 7.1436L7.32601 10.2181C7.69827 10.594 8.30173 10.594 8.67399 10.2181Z" fill="#032282"/>
                    </svg>
                  </div>
                </button>
              </div>
              <div className='flex flex-row gap-20 justify-evenly -ml-4 mt-6'>
                <div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>Value</p>
                    <h4 className='font-bold text-[#032282] font-sora'>₦20,400</h4>
                  </div>
                </div>
                <div>
                <div>
                    <p className='text-sm text-[#4F64A7]'>Count</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>442</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' h-[9.4rem] bg-[#FFF] p-3 rounded-[.6rem]'>
            <div className='w-full bg-[#F6FAFF] h-full rounded-[.6rem]'>
              <div className='flex flex-row justify-between pl-3 pr-3 pt-3 items-center'>
                <h4 className='text-sm text-[#4F64A7]'>Total Commission</h4>
                <button className=' pt-2 pb-2 pl-3 pr-3 rounded-md bg-[#EAF4FF]'>
                  <div className='flex flex-row justify-center items-center gap-3'>
                    <p className='text-xs text-[#032282]'>Today</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8.67399 10.2181L11.7188 7.1436C12.3194 6.53713 11.8941 5.5 11.0448 5.5H4.95517C4.10586 5.5 3.68057 6.53713 4.28119 7.1436L7.32601 10.2181C7.69827 10.594 8.30173 10.594 8.67399 10.2181Z" fill="#032282"/>
                    </svg>
                  </div>
                </button>
              </div>
              <div className='flex flex-row gap-2 justify-evenly -ml-4 mt-6'>
                <div>
                  <div>
                    <p className='text-xs text-[#4F64A7]'>POS Commission</p>
                    <h4 className='font-bold text-[#032282] font-sora'>₦87,000</h4>
                  </div>
                </div>
                <div>
                <div>
                    <p className=' text-[#4F64A7] text-xs'>Lotto Commission</p>
                    <h4 className='font-bold  text-[#032282] font-sora '>₦102,000</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' h-[12.7rem] bg-[#FFF] p-3 rounded-[.6rem]'>
            <div className='w-full bg-[#F6FAFF] h-full rounded-[.6rem]'>
              <div className='flex flex-row justify-between pl-3 pr-3 pt-3 items-center'>
                <h4 className='text-sm text-[#4F64A7]'>Average Commission Per Transaction</h4>
                <button className=' pt-2 pb-2 pl-3 pr-3 rounded-md bg-[#EAF4FF]'>
                  <div className='flex flex-row justify-center items-center gap-3'>
                    <p className='text-xs text-[#032282]'>Today</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8.67399 10.2181L11.7188 7.1436C12.3194 6.53713 11.8941 5.5 11.0448 5.5H4.95517C4.10586 5.5 3.68057 6.53713 4.28119 7.1436L7.32601 10.2181C7.69827 10.594 8.30173 10.594 8.67399 10.2181Z" fill="#032282"/>
                    </svg>
                  </div>
                </button>
              </div>
              <div className='flex flex-row gap-20 justify-evenly -ml-4 mt-6'>
                <div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>Value</p>
                    <h4 className='font-bold text-[#032282] font-sora'>₦20,400</h4>
                  </div>
                </div>
                <div>
                <div>
                    <p className='text-sm text-[#4F64A7]'>Count</p>
                    <h4 className='font-bold  text-[#032282] font-sora'>442</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:h-[12.7rem] bg-[#FFF] rounded-xl border pb-10 col-start-2 col-end-4 flex flex-col sm:flex sm:flex-row'>
            <div className='p-5 flex-1'>
              <div>
                <p className='font-medium'>Transaction Comparative</p>
                <div>
                  <div className='mb-7'>
                    <div className='flex flex-row gap-2 justify-start items-center'>
                      <div className='w-2 h-2 rounded-full bg-[#032282]'></div>
                      <p className='text-xs text-[#37474F]'>send Money</p>
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
                      <p className='text-xs text-[#37474F]'>Cashout</p>
                    </div>
                    <h4 className='text-[#263238] text-base font-bold font-sora'>₦12,000,000</h4>
                    </div>
                </div>
                <div>
                  <div>
                    <div className='flex flex-row gap-2 justify-start items-center'>
                      <div className='w-2 h-2 rounded-full bg-[#EDE1FF]'></div>
                      <p className='text-xs text-[#37474F]'>Utility and bills</p>
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
        </section>
      </section>
    </main>
    </>
  )
}

export default App
