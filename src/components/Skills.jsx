
import Navbar from './Navbar'
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import react_icon from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import javascript from "../assets/images/javascript.png";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import php from "../assets/images/laravel.png";
import python from "../assets/images/py.png";
import django from "../assets/images/django.png";
export default function Skills() {
    const {theme}=useContext(ThemeContext);
  return (
    <div className={`absolute h-full w-full left-0 top-0 overflow-y-scroll ${theme}`}>
        <div className="container">
            <Navbar/>
            <p className='p-2 text-xl '>what i know</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-2'>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[150px]">
                        <img src={react_icon} alt="" />
                        <p>React JS</p>
                    </div>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[150px]">
                        <img src={tailwind} alt="" />
                        <p>Tailwind</p>
                    </div>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[150px] p-2">
                        <img src={javascript} alt="" />
                        <p>Javascript</p>
                    </div>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[150px] p-2">
                        <img src={php} alt="" />
                        <p>Laravel</p>
                    </div>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[150px] p-2">
                        <img src={css} alt="" />
                        <p>vanilla CSS</p>
                    </div>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[150px] p-2">
                        <img src={html} alt="" />
                        <p>HTML</p>
                    </div>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[150px] p-2">
                        <img src={python} alt="" className='w-full h-full object-cover'/>
                        <p>Python</p>
                    </div>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[150px] p-2">
                        <img src={django} alt="" className='w-full h-full object-cover'/>
                        <p>Django</p>
                    </div>
                </div>
        
            </div>
        </div>
        
    </div>
  )
}
