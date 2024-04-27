import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Menu from './Pages/Menu';
import Header from './Components/Header';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MobileApp from './Pages/MobileApp';
import ContactUs from './Pages/Contact-us';
import Footer from './Components/Footer';


const App = () => { 


    useEffect(
        ()=>{
          
  Aos.init();

        },[]
    )
    return (
        <div className='w-[1200px] mx-auto' data-aos = "zoom-out">
            <Navbar/>
         
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/mobile-app' element={<MobileApp/>}/>
    <Route path='/contact-us' element={<ContactUs/>}/>
    <Route path='/cart' element={<Cart/>}/>
</Routes>

<Footer/>
            
        </div>
    );
}

export default App;
