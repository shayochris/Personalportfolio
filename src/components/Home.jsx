import { useContext, useState } from "react"
import {Link} from 'react-router-dom'
import { ThemeContext,} from "../contexts/ThemeContext"
import Navbar from "./Navbar";
import { AiFillGithub,AiFillLinkedin,AiFillFacebook,AiFillInstagram } from "react-icons/ai";
import chris from "../assets/images/chris.jpg"
export default function Home() {
  const {theme, ui} =useContext(ThemeContext) ;
  return (
    <div className={`wrapper ${theme}`}>
        <div className="container">
          <Navbar/>
          <div className="flex sm:flex-row flex-col relative top-20 mb-4">
            <div className="w-full sm:h-[300px] flex justify-center items-center">
              <div className={`md:h-[200px] h-[150px] md:w-[200px] w-[150px] rounded-full overflow-hidden ${ui}`}>
                <img src={chris} alt="" className="w-full h-full object-cover bg-center" />
              </div>
            </div>

            <div className="w-full sm:h-[300px] flex flex-col justify-center sm:items-start items-center mt-6 sm:mt-0">
              <p>Hello</p>
              <p className={`text-primary text-2xl`}>I am christopher shayo</p>
              <p>a web developer</p>
              <p className="text-center md:text-start my-2">As a passionate web developer , i specialize in crafting sophisticated systems using modern technology trends.Explore my portfolio to witness the fusion of creativity and innovation in the digital realm.</p>
              <Link to="/contact">
                <button className={`bg-primary text-white px-4 py-2 font-semibold mt-2 rounded-lg`}>Hire me</button>
              </Link>
            </div>
          </div>
          <div className="flex relative top-24 justify-center ">
            <Link to="/" className="mr-4"><AiFillGithub className={`h-12 w-12 ${theme}`}/></Link>
            <Link to="/" className="mr-4"><AiFillLinkedin className={`h-12 w-12 ${theme}`}/></Link>
            <Link to="/" className="mr-4"><AiFillFacebook className={`h-12 w-12 ${theme}`}/></Link>
            <Link to="/" className=""><AiFillInstagram className={`h-12 w-12 ${theme}`}/></Link>
          </div>
        </div>
    </div>
  )
}
