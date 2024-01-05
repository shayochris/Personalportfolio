import { useContext } from "react"
import {Link} from 'react-router-dom'
import Navbar from "./Navbar";
import { AiFillGithub,AiFillLinkedin,AiFillFacebook,AiFillInstagram } from "react-icons/ai";
import chris from "../assets/images/chris.jpg"
import { ThemeContext } from "../contexts/ThemeContext";
import MobileNav from "./MobileNav";
export default function Home() {
  const {theme, ui} =useContext(ThemeContext)
  return (
    <div className={`fixed top-0 left-0 w-full flex flex-col h-screen overflow-y-scroll ${theme}`}>
        <div className="container min-h-screen">
          <Navbar/>
          <div className="flex sm:flex-row flex-col relative top-20 mb-4">
            <div className="w-full sm:h-[300px] flex justify-center items-center">
              <div className={`md:h-[200px] h-[150px] md:w-[200px] w-[150px] rounded-full overflow-hidden ${ui} ring-8 ring-ui`}>
                <img src={chris} alt="" className="w-full h-full object-cover bg-center" />
              </div>
            </div>

            <div className="w-full sm:h-[300px] flex flex-col justify-center sm:items-start items-center mt-6 sm:mt-0">
              <p>Hello</p>
              <p className={`text-2xl text-primary`}>I am christopher shayo</p>
              <p className="text-gray-500 capitalize text-lg"> web developer</p>
              <p className="my-4 text-center md:text-start">
                As a passionate web developer , i specialize in crafting sophisticated systems using modern technology trends.Explore my portfolio to witness the fusion of creativity and innovation in the digital realm.</p>
              <button className={` px-4 py-2 font-semibold mt-2 rounded-lg bg-primary`}>Hire me</button>
            </div>
          </div>
          <div className="flex mt-32 justify-center ">
            <Link to="/" className="mr-4"><AiFillGithub className={`h-12 w-12 ${theme}`}/></Link>
            <Link to="/" className="mr-4"><AiFillLinkedin className={`h-12 w-12 ${theme}`}/></Link>
            <Link to="/" className="mr-4"><AiFillFacebook className={`h-12 w-12 ${theme}`}/></Link>
            <Link to="/" className=""><AiFillInstagram className={`h-12 w-12 ${theme}`}/></Link>
          </div>
         
        </div>
        <MobileNav/>
    </div>
  )
}
