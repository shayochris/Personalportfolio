import { useContext } from "react"
import {Link} from 'react-router-dom'
import { ThemeContext } from "../contexts/ThemeContext"
import Navbar from "./Navbar";
import { AiFillGithub,AiFillLinkedin,AiFillFacebook,AiFillInstagram } from "react-icons/ai";
import chris from "../assets/images/chris.jpg"
export default function Home() {
  const {theme,ui}=useContext(ThemeContext);
  return (
    <div className={`absolute top-0 left-0 w-full h-screen overflow-y-scroll ${theme}`}>
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
              <p className="text-2xl text-[#8F00FF]">I am christopher shayo</p>
              <p>a web developer</p>
              <button className="bg-[#8F00FF] px-4 py-2 font-semibold mt-2 text-white rounded-lg">Hire me</button>
            </div>
          </div>
          <div className="flex relative top-32 justify-center ">
            <Link to="/" className="mr-4"><AiFillGithub className={`h-12 w-12 ${theme}`}/></Link>
            <Link to="/" className="mr-4"><AiFillLinkedin className={`h-12 w-12 ${theme}`}/></Link>
            <Link to="/" className="mr-4"><AiFillFacebook className={`h-12 w-12 ${theme}`}/></Link>
            <Link to="/" className=""><AiFillInstagram className={`h-12 w-12 ${theme}`}/></Link>
          </div>
        </div>
    </div>
  )
}
