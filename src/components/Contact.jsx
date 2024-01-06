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
                <h2 className="text-center text-xl text-primary font-semibold mt-4">Get in Touch</h2>
                <form action="" className="w-[80%] md:w-[50%] mx-auto p-2" onSubmit={handleSubmit}>
                    {success && <p className="text-green-500 my-2" >Message Received</p>}
                    
                    <input type="text" className={`${ui} input my-2` } placeholder="Full Name" required
                    value={name} onChange={(e) => setname(e.target.value)}
                    />
                    <input type="email" className={`${ui} input my-2` } placeholder="Your Emal" required
                    value={email} onChange={(e) => setemail(e.target.value)}
                    />
                    <textarea className={`${ui} input my-2`} cols="5" placeholder="Your Message" required
                    value={message} onChange={(e) => setmessage(e.target.value)}
                    ></textarea>
                    <div className="flex items-center justify-center my-2">
                        <button className="bg-primary px-4 py-3 text-white rounded-lg">Submit</button>
                    </div>
                    

                    <fieldset className={`border-t-2 ${border} text-center mt-4 text-primary`}>
                        <legend className="p-2 font-semibold" >My Socials</legend>
                    </fieldset>

                    <div className="flex justify-center ">
                        <Link to="/" className="mr-4"><AiFillGithub className={`h-8 w-8 text-primary`}/></Link>
                        <Link to="/" className="mr-4"><AiFillLinkedin className={`h-8 w-8 text-primary`}/></Link>
                        <Link to="/" className="mr-4"><AiFillFacebook className={`h-8 w-8 text-primary`}/></Link>
                        <Link to="/" className=""><AiFillInstagram className={`h-8 w-8 text-primary`}/></Link>
                    </div>

                </form>
            </div>
    
           
        </div>
    </div>
  )
}
