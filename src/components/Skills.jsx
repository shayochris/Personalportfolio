
import Navbar from './Navbar'
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import react_icon from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import javascript from "../assets/images/javascript.png";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import laravel from "../assets/images/laravel.png";
import python from "../assets/images/py.png";
import django from "../assets/images/django.png";
import { FaBootstrap, FaLaravel, FaReact } from 'react-icons/fa';
import { SiDjango, SiMysql, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
export default function Skills() {
    const {theme,ui,isDark}=useContext(ThemeContext);
  return (
    <div className={`absolute h-full w-full left-0 top-0 overflow-y-scroll ${theme}`}>
        <div className="container">
            <Navbar/>
            <p className='p-2 text-xl text-center my-2 font-semibold text-primary '>what i know</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 p-4'>
                <div className="text-center flex flex-col items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-cyan-500 text-white flex items-center justify-center">
                        <FaReact className='w-16 h-16'/>
                    </div>
                    <p className="text-cyan-500 font-semibold text-xl">React JS</p>
                </div>
                <div className='flex flex-col items-center justify-center ' >
                    <SiNextdotjs className={`w-24 h-24 ${isDark ? "text-white" : "text-black"} rounded-full`}/>
                    <p className='text-xl font-semibold text-center'>Next JS</p>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-green-600 text-white flex items-center justify-center">
                        <SiDjango className='w-16 h-16'/>
                    </div>
                    <p className="text-green-600 font-semibold text-xl">Django</p>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-orange-700 text-white flex items-center justify-center">
                        <FaLaravel className='w-16 h-16'/>
                    </div>
                    <p className="text-orange-700 font-semibold text-xl">Laravel</p>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-blue-700 text-white flex items-center justify-center">
                        <SiMysql className='w-16 h-16'/>
                    </div>
                    <p className="text-blue-600 font-semibold text-xl">MySql</p>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-sky-500 text-white flex items-center justify-center">
                        <SiTailwindcss className='w-16 h-16'/>
                    </div>
                    <p className="text-sky-500 font-semibold text-xl">TailwindCss</p>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-purple-700 text-white flex items-center justify-center">
                        <FaBootstrap className='w-16 h-16'/>
                    </div>
                    <p className="text-purple-500 font-semibold text-xl">Bootsrap</p>
                </div>
                <div className='flex flex-col items-center justify-center ' >
                    <AiFillGithub className={`w-24 h-24 ${isDark ? "text-white" : "text-black"} rounded-full`}/>
                    <p className='text-xl font-semibold text-center'>Git</p>
                </div>
                
                
               
                
            {/* <div className={`relative rounded-lg overflow-hidden p-4 ${ui}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={react_icon} alt="" className='w-full h-full' />
                    </div>
                    <p className="text-center">React JS</p>
                </div>
                <div className={`relative rounded-lg overflow-hidden p-4 ${ui}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={tailwind} alt="" className='w-full h-full' />
                    </div>
                    <p className="text-center">Tailwind</p>
                </div>
                <div className={`relative rounded-lg overflow-hidden p-4 ${ui}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={javascript} alt="" className='w-full h-full' />
                    </div>
                    <p className="text-center">JavaScript</p>
                </div>
                <div className={`relative rounded-lg overflow-hidden p-4 ${ui}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={laravel} alt="" className='w-full h-full' />
                    </div>
                    <p className="text-center">Laravel</p>
                </div>
                <div className={`relative rounded-lg overflow-hidden p-4 ${ui}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={css} alt="" className='w-full h-full' />
                    </div>
                    <p className="text-center">vanilla CSS</p>
                </div>
                <div className={`relative rounded-lg overflow-hidden p-4 ${ui}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={html} alt="" className='w-full h-full' />
                        
                    </div>
                    <p className="text-center">HTML</p>
                </div>
                <div className={`relative rounded-lg overflow-hidden p-4 ${ui}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={python} alt="" className='w-full h-full'/>
                        
                    </div>
                    <p className="text-center">Python</p>
                </div>
                <div className={`relative rounded-lg overflow-hidden p-4 ${ui}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={django} alt="" className='w-full h-full' />
                    </div>
                    <p className="text-center">Django</p>
                </div> */}
        
            </div>
        </div>
        
    </div>
  )
}
