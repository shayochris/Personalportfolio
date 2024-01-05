
import Navbar from './Navbar'
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import { GiGraduateCap } from "react-icons/gi"
import {BsPersonFill, BsPhoneFill} from "react-icons/bs"
import {SiWebpack} from "react-icons/si"
import {MdEmail,MdLocationOn} from "react-icons/md"
import {AiFillAndroid, AiFillBulb, AiFillPhone} from "react-icons/ai"
import {HiOfficeBuilding} from "react-icons/hi"
import {BiSolidTimeFive} from "react-icons/bi"
import camera from "../assets/images/laptop.jpg"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import MobileNav from './MobileNav';

export default function About() {
    const {theme,isDark,ui}=useContext(ThemeContext);
  return (
    <div className={`absolute h-full w-full left-0 top-0 overflow-y-scroll ${theme}`}>
        <div className="container ">
            <Navbar/>
            {/* <p className='p-2 text-xl text-blue-600'>About me</p> */}
            <div className="p-2 my-2">
              
                <div className={`my-2  p-2 rounded-lg ${ui}`}>
                    <p className='pb-2 font-semibold text-lg'>Hi i'm christopher shayo</p>
                    <p className='text-sm'>I am a proffessional web developer capable of creating cross cutting websites with 2 years of experience.Programming is my passion and commitment i give the best i have got to my work, feel free to reach out anytime you will need my services</p>
                    <div className="mt-2 text-sm">
                        <div className='flex  items-center'>
                            <div className='h-8 w-8 rounded-full flex justify-center items-center'>
                                <MdEmail className='h-6 w-6'/>
                            </div>
                            <p className='ml-2'>chrisshayo4@gmail.com</p> 
                        </div>
                        <div className='flex  items-center'>
                            <div className='h-8 w-8 rounded-full flex justify-center items-center'>
                                <AiFillPhone className='h-6 w-6'/>
                            </div>
                            <p className='ml-2'>0766495628</p> 
                        </div>
                        <div className='flex  items-center'>
                            <div className='h-8 w-8 rounded-full flex justify-center items-center'>
                                <MdLocationOn className='h-6 w-6'/>
                            </div>
                            <p className='ml-2'>Tanzania</p> 
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <p className='pb-2 font-semibold text-xl'>Services I Offer</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mt-2">
                        <div className={`overflow-hidden rounded-lg ${ui}`}>
                            <div className="flex items-center justify-center p-4 bg-purple-500 h-[80px]">
                                <div className={`avatar-lg bg-purple-700 flex items-center justify-center mt-16 ring-4 ${isDark ? "ring-[#282828]" : "ring-[#eee]"}`}>
                                    <SiWebpack className='w-8 h-8 text-white'/>
                                </div>
                            </div>
                            <div className={`mt-12 p-3 text-center ${ui}`}>
                                <p className="text-lg font-semibold mb-2 text-purple-500">Web development</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis vel non laborum eos ab. Mollitia quos unde perferendis laboriosam aliquid doloremque harum quam, dolore atque eveniet officia asperiores neque! Quisquam.</p>
                            </div>
                        </div>
                        <div className={`overflow-hidden rounded-lg ${ui}`}>
                            <div className="flex items-center justify-center p-4 bg-blue-500 h-[80px]">
                                <div className={`avatar-lg bg-blue-700 flex items-center justify-center mt-16 ring-4 ${isDark ? "ring-[#282828]" : "ring-[#eee]"}`}>
                                    <AiFillAndroid className='w-8 h-8 text-white'/>
                                </div>
                            </div>
                            <div className={`mt-12 p-3 text-center ${ui}`}>
                                <p className="text-lg font-semibold mb-2 text-blue-500">App development</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis vel non laborum eos ab. Mollitia quos unde perferendis laboriosam aliquid doloremque harum quam, dolore atque eveniet officia asperiores neque! Quisquam.</p>
                            </div>
                        </div>
                        <div className={`overflow-hidden rounded-lg ${ui}`}>
                            <div className="flex items-center justify-center p-4 bg-green-500 h-[80px]">
                                <div className={`avatar-lg bg-green-700 flex items-center justify-center mt-16 ring-4 ${isDark ? "ring-[#282828]" : "ring-[#eee]"}`}>
                                    <AiFillBulb className='w-8 h-8 text-white'/>
                                </div>
                            </div>
                            <div className={`mt-12 p-3 text-center ${ui}`}>
                                <p className="text-lg font-semibold mb-2 text-green-500">Ui/UX Design</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis vel non laborum eos ab. Mollitia quos unde perferendis laboriosam aliquid doloremque harum quam, dolore atque eveniet officia asperiores neque! Quisquam.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='mt-12'>
                    <p className='pb-2 font-semibold text-xl '>Education</p>
                    <div className="mt-2 grid sm:grid-cols-3 gap-4 text-sm mb-2">
                        <div className={`card flex  items-center p-4 ${ui}`}>
                            <div className={`${ui} h-8 w-8 rounded-full flex justify-center items-center`}>
                                <GiGraduateCap className='h-6 w-6'/>
                            </div>
                            <p className='ml-2'>Bsc Computer Science</p> 
                        </div>
                        <div className={`card flex  items-center p-4 ${ui}`}>
                            <div className={`${ui} h-8 w-8 rounded-full flex justify-center items-center`}>
                                <HiOfficeBuilding className='h-6 w-6'/>
                            </div>
                            <p className='ml-2'>University of Dodoma</p> 
                        </div>
                        <div className={`card flex  items-center p-4 ${ui}`}>
                            <div className={`${ui} h-8 w-8 rounded-full flex justify-center items-center`}>
                                <BiSolidTimeFive className='h-6 w-6'/>
                            </div>
                            <p className='ml-2'>2018-2021</p> 
                        </div>
                    </div>
                    
                </div>

                <div className='mt-12'>
                    <p className='pb-2 font-semibold text-xl'>Experience</p>
                    <div className="mt-2 grid grid-cols-3 gap-4 text-sm mb-2">
                        <div className={`card flex flex-col justify-center items-center p-4 ${ui}`}>
                            <p className="text-4xl font-bold">2+</p>
                            <p>Years</p>
                        </div>
                        <div className={`card flex flex-col justify-center items-center p-4 ${ui}`}>
                            <p className="text-4xl font-bold">10+</p>
                            <Link to="/" className="underline">Projects</Link>
                        </div>
                        <div className={`card flex flex-col justify-center items-center p-4 ${ui}`}>
                            <p className="text-4xl font-bold">2+</p>
                            <p>Techs</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
