import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import Navbar from "./Navbar"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

export default function Contact() {
    const {theme,ui,border} = useContext(ThemeContext)
    const [success,setSuccess] = useState(false);
    const [name,setname]  = useState("");
    const [email,setemail]  = useState("");
    const [message,setmessage]  = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault()
        setSuccess(true)
        setname("")
        setemail("")
        setmessage("")
    }
  return (
    <div className={`wrapper ${theme}`}>
        <div className="container">
            <Navbar/>
            <div className="p-2">
                
                <form action="" className="w-[90%] md:w-[50%] mx-auto p-2 mt-8" onSubmit={handleSubmit}>
                    <h2 className="text-2xl my-2 text-primary font-semibold">Get in Touch</h2>
                    {success && <p className="text-green-500 my-2" >Message Received</p>}
                    
                    <input type="text" className={`${ui} input my-2` } placeholder="Full Name" required
                    value={name} onChange={(e) => setname(e.target.value)}
                    />
                    <input type="email" className={`${ui} input my-2` } placeholder="Your Email" required
                    value={email} onChange={(e) => setemail(e.target.value)}
                    />
                    <textarea className={`${ui} input my-2`} cols="5" placeholder="Your Message" required
                    value={message} onChange={(e) => setmessage(e.target.value)}
                    ></textarea>
                    <div className=" my-2">
                        <button className="bg-primary w-full px-4 py-3 text-white rounded-full">Submit</button>
                    </div>
                    

                    <fieldset className={`border-t-2 ${border} text-center mt-4`}>
                        <legend className="p-2 font-semibold" >More</legend>
                    </fieldset>

                    <div className="flex justify-center ">
                        <a href="https://github.com/shayochris" className="mr-4"><AiFillGithub className={`h-12 w-12 `}/></a>
                        <a href="https://linkedin.com/in/christopher-shayo-032aba223" className="mr-4"><AiFillLinkedin className={`h-12 w-12 `}/></a>
                        <a href="/" className="mr-4"><AiFillFacebook className={`h-12 w-12 `}/></a>
                        <a href="/" className=""><AiFillInstagram className={`h-12 w-12 `}/></a>
                    </div>

                </form>
            </div>
    
           
        </div>
    </div>
  )
}
