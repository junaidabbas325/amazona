import React, {useState} from 'react';
import './styles/NavBar.css';
import {Link} from 'react-router-dom'
import Gig from '../pages/gig'

// Funcction start from here
function App() {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)
  const [visible7, setVisible7] = useState(false)
  const [visible8, setVisible8] = useState(false)
  const [visible9, setVisible9] = useState(false)
  //For Close Moduls 

  const showModal1 = () => {
    setVisible1(true)
  };
  const showModal2 = () => {
    setVisible2(true)
    console.log('showmodal2 called')
  };
  const showModal3 = () => {
    setVisible3(true)
  };
  const showModal4 = () => {
    setVisible4(true)
  };
  const showModal5 = () => {
    setVisible5(true)
  };
  const showModal6 = () => {
    setVisible6(true)
  };
  const showModal7 = () => {
    setVisible7(true)
  };
  const showModal8 = () => {
    setVisible8(true)
  };
  const showModal9 = () => {
    setVisible9(true)
  };
  //For Close model
  const closeModal1 = () => {
    setVisible1(false)
  };
  const closeModal2 = () => {
    setVisible2(false)
    console.log('closemodal2 called')
  };
  const closeModal3 = () => {
    setVisible3(false)
  };
  const closeModal4 = () => {
    setVisible4(false)
  };
  const closeModal5 = () => {
    setVisible5(false)
  };
  const closeModal6 = () => {
    setVisible6(false)
  };
  const closeModal7 = () => {
    setVisible7(false)
  };
  const closeModal8 = () => {
    setVisible8(false)
  };
  const closeModal9 = () => {
    setVisible9(false)
  };
  //console.log


  // Main Component Star from here
  return (
    <>
<nav>
  <div>
    <img src="/images/Fiverr_LOGO.svg" className="fiverr_logo" />
  </div>
  <form className="form_css">
    <input placeholder="Find Services" />
    <button>Search</button>
  </form>
  <div className="menu_bar">
  <ul>
    <li style={{color: "#1FD0B6"}}>Fiverr Pro</li>
    <li><Link to="/Explore">Explore</Link></li>
    <li>English</li>
    <li>RsPKR</li>
    <li>Become a Seller</li>
    <li><Link to="/signin" ><span  className="signincss">Sign In</span></Link></li>
    
  </ul>
  <Link  to="/join"><button className="Join_btn" >Join</button></Link>
  </div>
</nav>
<div className="nav_Cat">
  <ul>
    <li onPointerEnter={showModal1} onPointerOut={closeModal1} style={{marginLeft: "0"}}>Graphics & Design</li>
    <li onPointerEnter={showModal2} onPointerOut={closeModal2} >Digital Marketing</li>
    <li onPointerEnter={showModal3} onPointerOut={closeModal3} >Writing & Translation</li>
    <li onPointerEnter={showModal4} onPointerOut={closeModal4} >Video & Animation</li>
    <li onPointerEnter={showModal5} onPointerOut={closeModal5} >Music & Audio</li>
    <li onPointerEnter={showModal6} onPointerOut={closeModal6} >Programming & Teach</li>
    <li onPointerEnter={showModal7} onPointerOut={closeModal7} >Business</li>
    <li onPointerEnter={showModal8} onPointerOut={closeModal8} >Lifestyle</li>
    <li onPointerEnter={showModal9} onPointerOut={closeModal9} >Industries</li>

  </ul>
</div>



</>

  );
}




export default App;
