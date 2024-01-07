import { useContext, useState } from "react"
import {Link} from 'react-router-dom'
import { ThemeContext,} from "../contexts/ThemeContext"
import Navbar from "./Navbar";
import { AiFillGithub,AiFillLinkedin,AiFillFacebook,AiFillInstagram } from "react-icons/ai";
import {MdWavingHand} from "react-icons/md"
import chris from "../assets/images/chris.jpg"
import { BsStars } from "react-icons/bs";
export default function Home() {
  const {theme, ui,isDark} =useContext(ThemeContext) ;
  return (
    <div className={`wrapper ${theme}`}>
        <div className="container">
          <Navbar/>
          <div className="flex sm:flex-row flex-col relative top-20 mb-4">
            <div className="w-full sm:h-[300px] flex justify-center items-center">
              <div className={`md:h-[200px] h-[150px] md:w-[200px] w-[150px] rounded-full overflow-hidden ${ui}`}>
                <img src={chris} alt="" className="w-full h-full object-cover bg-center ring-4" />
              </div>
            </div>

            <div className="w-full sm:h-[300px] flex flex-col justify-center sm:items-start items-center mt-6 sm:mt-0">
              <p className="flex items-center text-lg" >Hello, <span><MdWavingHand className="w-6 h-6 ml-2 text-green-500"/></span> </p>
              <p className={`text-primary text-2xl`}>I am christopher shayo</p>
              <p className="my-2 capitalize flex items-center"> 
              <span className="mr-2 text-primary"><BsStars className="w-6 h-6" /></span> web developer</p>
              <p className="text-center md:text-start my-2">i specialize in crafting sophisticated software systems using modern technology trends and best practices, Let's collaborate to bring your ideas into reality in the digital world.</p>
              <Link to="/contact">
                <button className={`bg-primary text-white px-4 py-2 font-semibold mt-2 rounded-lg`}>Hire me</button>
              </Link>
            </div>
          </div>
          <div className="flex relative top-24 justify-center ">
            <a href="https://github.com/shayochris" className="mr-4"><AiFillGithub className={`h-12 w-12 `}/></a>
            <a href="https://linkedin.com/in/christopher-shayo-032aba223" className="mr-4"><AiFillLinkedin className={`h-12 w-12 `}/></a>
            <a href="/" className="mr-4"><AiFillFacebook className={`h-12 w-12 `}/></a>
            <a href="/" className=""><AiFillInstagram className={`h-12 w-12 `}/></a>
          </div>
        </div>
    </div>
  )
}
