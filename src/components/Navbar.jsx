import {Link} from "react-router-dom"
import { useContext, useState } from "react";
import { AiFillHome, AiFillMessage, AiFillStar,AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
import {FaBriefcase, FaUser} from 'react-icons/fa'
import { BsBrightnessHighFill,BsFillCloudMoonFill} from "react-icons/bs";
import { ThemeContext, } from "../contexts/ThemeContext";

export default function Navbar() {
  const [mobile,setMobile]=useState(false);
  const {theme,ui,isDark,setIsDark,border} = useContext(ThemeContext)
  const txt=isDark ? <BsBrightnessHighFill className="w-5 h-5"/> : <BsFillCloudMoonFill className="w-5 h-5"/>;
  const changeTheme=()=>{
    const mode=JSON.parse(localStorage.getItem("dark"));
    setIsDark(!mode);
    localStorage.setItem("dark",JSON.stringify(!mode));
  }
  return (
    <div className={`${theme}`}>
        <nav className={`navbar ${theme}`}>
            <p className={`${theme.green} text-2xl font-bold`}>Chris.</p>
            <ul className="hidden sm:flex">
                <li><Link to="/" className={` navlink`}>Home</Link></li>
                <li><Link to="/Skills" className={` navlink`}>Skills</Link></li>
                <li><Link to="/About" className={` navlink`}>About</Link></li>
                <li><Link to="/Projects" className={` navlink`}>Projects</Link></li>
                <li><Link to="/Contact" className={` navlink`}>Contact</Link></li>
                <button className="ml-4" onClick={changeTheme}>{txt}</button>
            </ul>
            <div className="sm:hidden flex">
              <button onClick={changeTheme}>{txt}</button>
              {!mobile ?
                <button onClick={()=>setMobile(true)} className="ml-2"><AiOutlineMenu className="w-5 h-5"/></button>
                :
                <button onClick={()=>setMobile(false)} className="ml-2"><AiOutlineClose className="w-5 h-5"/></button>
              }       
              
            </div>
        </nav>
        {mobile
             &&
              <div className={`modal ${theme}`}>
                <ul className={`${ui} p-2`}>
                  <li><Link to="/" className={`flex items-center w-full p-2 border-b ${border}`}>
                    <span className="mr-2"><AiFillHome className="w-5 h-5"/></span>
                    Home</Link></li>
                  <li><Link to="/Skills" className={`flex items-center w-full p-2 border-b ${border}`}>
                    <span className="mr-2"><AiFillStar className="w-5 h-5"/></span>
                    Skills</Link></li>
                  <li><Link to="/About" className={`flex items-center w-full p-2 border-b ${border}`}>
                    <span className="mr-2"><FaUser className="w-5 h-5"/></span>
                    About</Link></li>
                  <li><Link to="/Projects" className={`flex items-center w-full p-2 border-b ${border}`}>
                    <span className="mr-2"><FaBriefcase className="w-5 h-5"/></span>
                    Projects</Link></li>
                  <li><Link to="/Contact" className={`flex items-center w-full p-2`}>
                    <span className="mr-2"><AiFillMessage className="w-5 h-5"/></span>
                    Contact me</Link></li>
                </ul>
              </div>
            }
    </div>
  )
}
