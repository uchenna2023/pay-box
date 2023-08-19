import './App.css'
import Vector from './assets/Vector.svg'
import Ellipse from './assets/Ellipse.svg'
import home from './assets/home.svg'
import category from './assets/category.svg'

function App() {
  

  return (
    <>
      <main className='bg-[#07112D] w-[1620px] flex justify-end pt-6 pr-11 pb-4 border'>
      <section className='border w-[263px] pt-8'>
        <div className='flex flex-col justify-start items-start border pl-7'>
          <section className='pb-7 mb-5'>
            <h1 className='text-3xl font-extrabold text-white'>PayBox</h1>
            <p className='text-white text-xs'>by LibertyPay</p>
          </section>
          <nav>
            <div className='flex flex-row gap-2'><img src={home}/><p className='text-white'>Home</p></div>
            <div className='flex flex-row gap-2 rounded-lg w-[224px] bg-[#192749] -ml-3 p-3 mt-4'><img src={category} className='ml-0'/><p className='text-white'>Analytic Dashboard</p></div>
          </nav>
        </div>
      </section>
      <section className='w-[1300px] bg-[#F8F9FB] rounded-2xl'>
        <nav className='w-full flex justify-between pl-12 pr-14 pt-12 pb-7 bg-[#FFFFFF] rounded-3xl'>
          <h1>Analytics Dashboard</h1>
          <div className='flex flex-row gap-4'>
            <div className='w-10 border h-10 bg-[#ECF1FF] rounded-full flex justify-center items-center relative'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.4 16.33C20.12 17.08 19.53 17.65 18.76 17.91C17.68 18.27 16.57 18.54 15.45 18.73C15.34 18.75 15.23 18.7701 15.12 18.7801C14.94 18.8101 14.76 18.83 14.58 18.85C14.36 18.8801 14.13 18.9 13.9 18.92C13.27 18.97 12.65 19 12.02 19C11.38 19 10.74 18.97 10.11 18.91C9.84002 18.89 9.58002 18.8601 9.32002 18.82C9.17002 18.8 9.02002 18.7801 8.88002 18.76C8.77002 18.74 8.66002 18.73 8.55002 18.71C7.44002 18.53 6.34002 18.26 5.27002 17.9C4.47002 17.63 3.86002 17.06 3.59002 16.33C3.32002 15.61 3.42002 14.77 3.85002 14.05L4.98002 12.17C5.22002 11.76 5.44002 10.97 5.44002 10.49V8.63005C5.44002 5.00005 8.39002 2.05005 12.02 2.05005C15.64 2.05005 18.59 5.00005 18.59 8.63005V10.49C18.59 10.97 18.81 11.76 19.06 12.17L20.19 14.05C20.6 14.75 20.68 15.57 20.4 16.33Z" fill="#032282"/>
              <path d="M12 10.76C11.58 10.76 11.24 10.42 11.24 10V6.90001C11.24 6.48001 11.58 6.14001 12 6.14001C12.42 6.14001 12.76 6.48001 12.76 6.90001V10C12.75 10.42 12.41 10.76 12 10.76Z" fill="white"/>
              <path d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.87999 21.11C9.55999 20.81 9.31999 20.41 9.17999 20C9.30999 20.02 9.43999 20.03 9.57999 20.05C9.80999 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z" fill="#032282"/>
            </svg>
            <span className='absolute top-2 right-[.1px]'>
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
        <section className='p-5 grid grid-cols-4 gap-x-3 gap-y-2 '>
          <div className=' h-[151px] bg-[#FFF] border'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
          <div className=' h-[151px] bg-[#FFF] border'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
          <div className=' h-[151px] bg-[#FFF] border'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
          <div className=' h-[151px] bg-[#FFF] border'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
          <div className=' h-[203px] bg-[#FFF] p-3 rounded-[10px]'>
            <div className='w-full bg-[#F6FAFF] h-full rounded-[10px]'>
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
                    <h4 className='font-bold text-[#032282]'>₦500</h4>
                  </div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>This week</p>
                    <h4 className='font-bold  text-[#032282]'>₦500</h4>
                  </div>
                </div>
                <div>
                <div>
                    <p className='text-sm text-[#4F64A7]'>Yesterday</p>
                    <h4 className='font-bold  text-[#032282]'>₦500</h4>
                  </div>
                  <div>
                    <p className='text-sm text-[#4F64A7]'>Last week</p>
                    <h4 className='font-bold  text-[#032282]'>₦500</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-[203px] bg-[#FFF] border'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
          <div className=' h-[203px] bg-[#FFF] border'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
          <div className=' h-[203px] bg-[#FFF] border'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
          <div className=' h-[151px] bg-[#FFF] border'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
          <div className=' h-[151px] bg-[#FFF] border'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
          <div className=' h-[151px] bg-[#FFF] border'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
          <div className=' h-[151px] bg-[#FFF] border'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
          <div className=' h-[203px] bg-[#FFF] border'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
          <div className='h-[203px] bg-[#FFF] border border-green-600 col-start-2 col-end-4'>
            <div className='w-[265px] h-[104px] bg-[#F6FAFF] mx-auto mt-3'>
              <p className='pt-6 ml-4'>Total saving balance</p>
              <h2 className='text-[#032282] text-xl font-extrabold mt-5 ml-4'>₦194,000</h2>

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
        </section>
        
      </section>
    </main>
    </>
  )
}

export default App
