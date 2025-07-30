import React from 'react'
import ProfilePic from '../assets/profile-pic-home.jpg'
import resume from '../assets/ZacharyResume_01.pdf'
import { IoMdDownload } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center
    lg:flex-row-reverse gap-9 lg:gap-15">
            <div className="text-center z-10 px-4">
                <img src={ProfilePic} alt="" className="w-[300px] border-0 mt-10 rounded-4xl shadow-lg shadow-gray-600
            lg:m-0 lg:max-w-[250px] object-cover object-bottom hover:translate-y-1 transition-all" />
                <div className='flex px-10 justify-between py-10'>
                    <a href="https://www.linkedin.com/in/zach-st-louis/" target="_blank" className=" border p-1 rounded text-2xl hover:-translate-y-2 transition-all bg-blue-700">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/zstlouis?tab=repositories" target="_blank" className=" border rounded p-1 text-2xl hover:-translate-y-2 transition-all bg-blue-700">
                        <FaGithub />
                    </a>
                </div>
            </div>

            <div className="text-center font-mono z-10 px-4">
                <h1 className="text-3xl py-3 md:text-4xl lg:text-5xl lg:max-w-w[500px] font-semibold mg-6 
        bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    Zachary St. Louis</h1>
                <p className='text-gray-300 text-lg mb-8 max-w-lg mx-auto'>I am a Staff Software Engineer, experienced
                    with developing and creating dynamic applications with a deep
                    understanding of both front-end and back-end technologies.
                </p>
                <div className="flex justify-center items-center space-x-4">
                    <a href="#contact" className="bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded-2xl
                    hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246, 0.4]">Contact Me</a>

                    <a href={resume} download className="bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded-2xl
                    hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246, 0.4]">Resume <span className='h-2 ml-2 mt-1'><IoMdDownload /></span></a>
                </div>
            </div>
        </section>
    )
}

export default Home