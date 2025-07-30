import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
        <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10">
            <div className="flex gap-10 p-4 justify-center text-white">
                 <a href="https://www.linkedin.com/in/zach-st-louis/" target="_blank" className=" border p-1 rounded text-2xl hover:-translate-y-2 transition-all bg-blue-700">
                <FaLinkedin/>
                </a>
                <a href="https://github.com/zstlouis?tab=repositories" target="_blank" className=" border rounded p-1 text-2xl hover:-translate-y-2 transition-all bg-blue-700">
                <FaGithub />
                </a>
            </div>
            <p>@ 2025. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer