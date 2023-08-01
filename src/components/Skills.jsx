
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
export default function Skills() {
    const {theme}=useContext(ThemeContext);
  return (
    <div className={`absolute h-full w-full left-0 top-0 overflow-y-scroll ${theme}`}>
        <div className="container">
            <Navbar/>
            <p className='p-2 text-xl '>what i know</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-4'>
            <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={react_icon} alt="" className='w-full h-full' />
                    </div>
                    <p className="text-center">React JS</p>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={tailwind} alt="" className='w-full h-full' />
                    </div>
                    <p className="text-center">Tailwind</p>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={javascript} alt="" className='w-full h-full' />
                    </div>
                    <p className="text-center">JavaScript</p>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={laravel} alt="" className='w-full h-full' />
                    </div>
                    <p className="text-center">Laravel</p>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={css} alt="" className='w-full h-full' />
                    </div>
                    <p className="text-center">vanilla CSS</p>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={html} alt="" className='w-full h-full' />
                        
                    </div>
                    <p className="text-center">HTML</p>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={python} alt="" className='w-full h-full'/>
                        
                    </div>
                    <p className="text-center">Python</p>
                </div>
                <div className={`relative border-[1px] rounded-lg overflow-hidden p-4 ${theme}`}>
                    <div className="flex flex-col  justify-center items-center h-[110px] sm:h-[150px] p-2">
                        <img src={django} alt="" className='w-full h-full' />
                    </div>
                    <p className="text-center">Django</p>
                </div>
        
            </div>
        </div>
        
    </div>
  )
}
