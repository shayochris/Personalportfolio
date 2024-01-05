import { AiFillHome, AiFillMessage, AiFillStar } from "react-icons/ai";
import {FaBriefcase, FaUser} from 'react-icons/fa'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function MobileNav() {
  return (
    <div className='sticky bottom-0 w-full bg-[#212121] md:hidden' >
        <div className="py-2 px-4 flex justify-between items-center">

            <Link to="/" className="flex flex-col justify-center items-center">
                <AiFillHome className="w-5 h-5"/>
                <p className="text-xs">Home</p>
            </Link>
            <Link to="/skills" className="flex flex-col justify-center items-center">
                <AiFillStar className="w-5 h-5"/>
                <p className="text-xs">Skills</p>
            </Link>
            <Link to="/about" className="flex flex-col justify-center items-center">
                <FaUser className="w-5 h-5"/>
                <p className="text-xs">About me</p>
            </Link>
            <Link to="/" className="flex flex-col justify-center items-center">
                <FaBriefcase className="w-5 h-5"/>
                <p className="text-xs">projects</p>
            </Link>
            <Link to="/" className="flex flex-col justify-center items-center">
                <AiFillMessage className="w-5 h-5"/>
                <p className="text-xs">contact me</p>
            </Link>
        </div>
    </div>
  )
}
