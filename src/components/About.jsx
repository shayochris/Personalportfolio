
import Navbar from './Navbar'
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import { GiGraduateCap } from "react-icons/gi"
import {BsPersonFill} from "react-icons/bs"
import {MdEmail,MdLocationOn} from "react-icons/md"
import {AiFillPhone} from "react-icons/ai"
import {HiOfficeBuilding} from "react-icons/hi"
import {BiSolidTimeFive} from "react-icons/bi"
import camera from "../assets/images/laptop.jpg"

export default function About() {
    const {theme}=useContext(ThemeContext);
  return (
    <div className={`absolute h-full w-full left-0 top-0 overflow-y-scroll ${theme}`}>
        <div className="container">
            <Navbar/>
            {/* <p className='p-2 text-xl text-blue-600'>About me</p> */}
            <div className="p-2 grid lg:grid-cols-2 gap-4 mt-2">
                <div className={`card-2 overflow-hidden mb-4 h-auto ${theme}`}>
                    <div style={{backgroundImage:`url(${camera})`}} className='w-full h-20 bg-red-500  bg-cover bg-center'>
                        <div className="bg-black/60 w-full h-full  ">
                            <div className="flex items-center p-1 w-full h-full">
                                <div  className={`bg-white bg-cover h-10 w-10 rounded-full flex justify-center items-center mr-2`}>
                                    <BsPersonFill className="w-8 h-8 text-blue-600"/>
                                </div>
                                <p className='text-xl font-semibold text-white'>About me</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-sm p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto aperiam doloremque repudiandae, quos dolores perferendis similique accusamus dicta recusandae qui repellendus quaerat sunt minima, numquam id expedita voluptates impedit quo!</p>
                    <div className='px-2 pb-2 text-sm'>
                        <p className='flex items-center text-gray-500 my-1'>
                            <span><BsPersonFill className='mr-2 w-6 h-6'/></span>christopher shayo
                        </p>
                        <p className='flex items-center text-gray-500 my-1'>
                            <span><MdEmail className='mr-2 w-6 h-6'/></span>chrisshayo4@gmail.com
                        </p>
                        <p className='flex items-center text-gray-500 my-1'>
                            <span><AiFillPhone className='mr-2 w-6 h-6'/></span>+255 766 495 628
                        </p>
                        <p className='flex items-center text-gray-500 my-1'>
                            <span><MdLocationOn className='mr-2 w-6 h-6'/></span>Mbeya, Tanzania
                        </p>
                    </div>
                </div>
                <div className={`card-2 overflow-hidden mb-4 h-auto ${theme}`}>
                    <div style={{backgroundImage:`url(${camera})`}} className='w-full h-20 bg-red-500  bg-cover bg-center'>
                        <div className="bg-black/60 w-full h-full  ">
                            <div className="flex items-center p-1 w-full h-full">
                                <div  className={`bg-white bg-cover h-10 w-10 rounded-full flex justify-center items-center mr-2`}>
                                    <GiGraduateCap className="w-8 h-8 text-blue-600"/>
                                </div>
                                <p className='text-xl font-semibold text-white'>Education</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-sm p-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad accusamus voluptatibus itaque delectus eos sed esse non doloremque voluptatem iusto laborum consectetur commodi, quod repudiandae dignissimos a numquam dolor tenetur.</p>
                    <div className='px-2 pb-2 text-sm m'>
                        <p className='flex items-center text-gray-500 my-1'>
                            <span><GiGraduateCap className='mr-2 w-6 h-6'/></span>Bsc Computer Science
                        </p>
                        <p className='flex items-center text-gray-500 my-1'>
                            <span><HiOfficeBuilding className='mr-2 w-6 h-6'/></span>University of Dodoma
                        </p>
                        <p className='flex items-center text-gray-500 my-1'>
                            <span><BiSolidTimeFive className='mr-2 w-6 h-6'/></span>2018-2021
                        </p>
                        <p className='flex items-center text-gray-500 my-1'>
                            <span><MdLocationOn className='mr-2 w-6 h-6'/></span>Dodoma, Tanzania
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
