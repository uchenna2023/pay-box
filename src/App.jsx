import './App.css'

import Nav from './component/Nav'
import Header from './component/Header'


function App() {
  

  return (
    <>
      <main className='bg-[#07112D] pr-0  w-[full] flex justify-center sm:justify-end sm:pt-8  sm:pr-11 sm:pb-4 sm:w-[101.25rem]'>
        <Nav/>
        <Header />
      </main>
    </>
  )
}

export default App
