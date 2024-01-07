import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import Navbar from "./Navbar"
import bg from '../assets/images/bg.jpg'
import social from '../assets/images/social.png'
import ecommerce from '../assets/images/ecommerce.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { FaReact } from "react-icons/fa"
import { SiDjango, SiTailwindcss } from "react-icons/si"

export default function Projects() {
    const {theme,ui,border,isDark} = useContext(ThemeContext)  
    return (
    <div className={`wrapper ${theme}`} >
        <div className="container">
            <Navbar/>
            <div className="p-2">
                <p className="text-primary text-xl font-semibold capitalize">my projects</p>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div className={`${isDark ? `${ui}` : `border ${border}`} relative overflow-hidden rounded-lg`}>
                        <img src={social} alt="" className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h2 className="font-semibold text-xl">Social</h2>
                            <p className="my-3 text-sm">Social is an online system that brings the idea of social interaction into the digital space</p>
                            <div className="flex mb-2">
                                <div className=" bg-blue-500 rounded-full mr-2 p-1 flex items-end">
                                    <FaReact className="text-white h-5 w-5"/>
                                </div>
                                <div className=" bg-red-500 rounded-full mr-2 p-1 flex items-end">
                                    <SiTailwindcss className="text-white h-5 w-5"/>
                                </div>
                                <div className=" bg-green-500 rounded-full mr-2 p-1 flex items-end">
                                    <SiDjango className="text-white h-5 w-5"/>
                                </div>
                            </div>
                            <a href="https://social-x1vi.onrender.com" className="text-blue-500 text-sm font-semibold mt-2">Preview</a>
                        </div>
                    </div>

                    <div className={`${isDark ? `${ui}` : `border ${border}`} relative overflow-hidden rounded-lg`}>
                        <img src={ecommerce} alt="" className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h2 className="font-semibold text-xl">E-commerce</h2>
                            <p className="my-3 text-sm">An online Store that allows you to order your favorite items</p>
                            <div className="flex mb-2">
                                <div className=" bg-blue-500 rounded-full mr-2 p-1 flex items-end">
                                    <FaReact className="text-white h-5 w-5"/>
                                </div>
                                <div className=" bg-red-500 rounded-full mr-2 p-1 flex items-end">
                                    <SiTailwindcss className="text-white h-5 w-5"/>
                                </div>
                                <div className=" bg-green-500 rounded-full mr-2 p-1 flex items-end">
                                    <SiDjango className="text-white h-5 w-5"/>
                                </div>
                            </div>
                            <a href="https://ecommerce-o8ja.onrender.com" className="text-blue-500 text-sm font-semibold mt-2">Preview</a>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
  )
}
