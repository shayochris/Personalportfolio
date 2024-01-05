import {Link} from "react-router-dom"
import { useContext, useState } from "react";
import { AiOutlineClose,AiOutlineMenu,AiOutlineHome,AiOutlineProfile} from "react-icons/ai";
import { BsBrightnessHighFill,BsFillCloudMoonFill} from "react-icons/bs";
import { ThemeContext, } from "../contexts/ThemeContext";

export default function Navbar() {
  const [mobile,setMobile]=useState(false);
  const {theme,isDark} = useContext(ThemeContext)
  const txt=isDark ? <BsBrightnessHighFill className="w-5 h-5"/> : <BsFillCloudMoonFill className="w-5 h-5"/>;
  const changeTheme=()=>{
    const mode=JSON.parse(localStorage.getItem("dark"));
    theme.setIsDark(!mode);
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
                <li><Link to="/" className={` navlink`}>Projects</Link></li>
                <li><Link to="/" className={` navlink`}>Contact</Link></li>
                <button className="ml-4" onClick={changeTheme}>{txt}</button>
            </ul>
            <div className="sm:hidden flex">
              <button onClick={changeTheme}>{txt}</button>
              <button onClick={()=>setMobile(true)} className="ml-2"><AiOutlineMenu className="w-5 h-5"/></button>
              
            </div>
            
            {mobile
             &&
              <div className={`modal ${theme}`}>
                <nav className={`navbar border-b-[1px] ${theme}`}>
                    <p className="text-2xl font-bold">Chris.</p>
                    <button onClick={()=>setMobile(false)}><AiOutlineClose className="w-5 h-5"/></button>
                </nav>
                <ul className="">
                  <li><Link to="/" className="flex items-center w-full rounded-lg my-2 p-2">
                    <span className="mr-2"><AiOutlineHome/></span>
                    Home</Link></li>
                  <li><Link to="/Skills" className="flex items-center w-full my-2 p-2">
                    <span className="mr-2"><AiOutlineProfile/></span>
                    Skills</Link></li>
                  <li><Link to="/About" className="flex items-center w-full my-2 p-2">
                    <span className="mr-2"><AiOutlineHome/></span>
                    About</Link></li>
                  <li><Link to="/" className="flex items-center w-full my-2 p-2">
                    <span className="mr-2"><AiOutlineHome/></span>
                    Home</Link></li>
                </ul>
              </div>
            }
           
        </nav>
    </div>
  )
}
