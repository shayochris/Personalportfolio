import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import Navbar from "./Navbar"
import bg from '../assets/images/bg.jpg'
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function Projects() {
    const {theme,ui,border,isDark} = useContext(ThemeContext)  
    return (
    <div className={`wrapper ${theme}`} >
        <div className="container">
            <Navbar/>
            <div className="p-2">
                <p className="text-primary text-xl font-semibold capitalize">my projects</p>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                    {[...Array(8)].map((n,i) =>(
                    <div key={i} className={`${isDark ? `${ui}` : `border ${border}`} overflow-hidden rounded-lg`}>
                        <img src={bg} alt="" className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h2 className="font-semibold text-xl">project name</h2>
                            <p className="my-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis minima maxime nulla hic, harum odio.</p>
                            <Link to="/" className="text-blue-500 text-sm font-semibold">Preview</Link>
                        </div>
                    </div>))
                    }
                </div>
            </div>
            
        </div>
    </div>
  )
}
