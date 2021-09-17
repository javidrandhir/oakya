import React from 'react';

import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import { FaFacebookF,FaIndustry,FaBars,FaTimes } from "react-icons/fa";
import { IoIosArrowDropdown,IoMdContact } from "react-icons/io";
import { FiInstagram,FiTwitter } from "react-icons/fi";
import { AiFillHome,AiOutlineInfoCircle } from "react-icons/ai";
import { HiServer } from "react-icons/hi";


function Header() {
    const sidebarOpen=()=>{
        const bars=document.getElementById('bar');
        bars.classList.add('show')
    }
    const sidebarClose=()=>{
        const bars=document.getElementById('bar');
        bars.classList.remove('show')
    }
    return (
    
     
   
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="oakya" />
<div className='side-bar' onClick={sidebarOpen}><FaBars /></div>

            </div>
            <div className="nav-icons" id='bar'>
            <div className="close-bar" onClick={sidebarClose}><FaTimes /></div>
                <ul>
                    <li><a><span><AiFillHome /></span><Link to='/' >Home</Link></a></li>
                    <li><a><span><AiOutlineInfoCircle /></span> <Link to='/about' >About</Link></a></li>
                    <li><a><span><HiServer /></span> <Link to='/services' >Services</Link></a></li>
                   <li><a ><span><FaIndustry /></span> <Link to='/industry' >Industry</Link></a></li>
                    <li><a><span><IoMdContact /></span> <Link to='/contactus' >Contact Us</Link></a></li>
                </ul>
            </div>
            <div className="social-icons">
                <h3>Join us  <span><IoIosArrowDropdown /></span></h3>
              <ul className='facebook'>
                  <li><FaFacebookF /></li>
                  <li><FiInstagram /></li>
                  <li><FiTwitter /></li>
              </ul>
            </div>

        </div>
       
 

    )
}

export default Header
