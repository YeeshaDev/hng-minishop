//import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
function App() {
 
  return (
    <>
    <Navbar />
    <main className='max-w-[1300px] mx-auto'>

     <Routes>
      <Route path='/' element={<Home />} />
     </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
