import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Breadcrumb } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutpage from "./Components/About/Aboutpage";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Home/Contact";
import Home from "./Components/Home/Home";
import Navmenu from './Components/Navmenu/Navmenu';
import Resourcepage from "./Components/Resource/Resourcepage";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <BrowserRouter>
      <Navmenu/>
      <Breadcrumb/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<Blog/>}/>
        <Route path='/Blog' element={<Aboutpage/>}/>
        <Route path='/Resource' element={<Resourcepage/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Not-found' element={<h1>404 NOT FOUND</h1>}/>
         </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
