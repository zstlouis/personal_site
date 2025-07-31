import React, { useState } from 'react'
import ExpenseTracker from '../assets/expenseApp.jpg'
import Camera from '../assets/camera.jpg'
import EmployeeManagement from '../assets/employee_management.jpg'
import Lego from '../assets/lego.jpg'

const Projects = () => {

    const [projects] = useState([
        {
            image: ExpenseTracker,
            name: "Expense Tracking",
            brief: "Application allows user to tracker expenses based on various categories",
            url: "https://github.com/zstlouis/expense_tracker",
            techstack: [
                "React", "MongoDB", "Node.js", "Express", "Tailwind CSS"
            ]
        },
        {
            image: Camera,
            name: "AI Image Generator",
            brief: "Application allows user generate an image based on an inputted description using OpenAI",
            url: "https://github.com/zstlouis/ai_image_generator",
            techstack: [
                "React", "Tailwind CSS"
            ]
        },
        {
            image: EmployeeManagement,
            name: "Employee Management System",
            brief: "Application allows user to tracker expenses and based on various categories",
            url: "https://github.com/zstlouis/Employee_Management",
            techstack: [
                "Java", "Spring", "MongoDB"
            ]
        },
        {
            image: Lego,
            name: "Lego Character Identifier",
            brief: "Identify various lego minifigures using TensorFlow.",
            url: "https://github.com/zstlouis/TensorflowProjects/tree/master/Lego_Minifigures",
            techstack: [
                "Python", "TensorFlow"
            ]
        }

    ])
    return (
        <section id="projects" 
        className="min-h-screen font-mono flex items-center justify-center py-20">
            <div className='max-w-3xl mx-auto px-4'>
                <h2 className='max-w-3xl text-4xl fonts-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600
            bg-clip-text text-transparent text-center'>
                Feature Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div 
                        key={index} 
                        className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10
                     hover:border-blue-700 hover:shadow-amber-50 hover:-translate-y-1 transition-all hover:bg-cyan-900">

                            <h3 className='font-semibold text-xl mb-4'>{project.name}</h3>
                            <p className="text-gray-300 mb-4">{project.brief}</p>
                            <div className='flex flex-wrap sm:items-center gap-2 mb-4'>
                                {project.techstack.map((tech, index) => (
                                    <span key={index} className='bg-blue-500/10 text-blue-400
                                py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:-translate-y-1'>
                                        {tech}
                                    </span>
                                ))}
                               
                            </div>
                             <div className="flex flex-col items-center text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 rounded-xl">
                                    <p className="text-gray-200">View Project</p>
                                    <a href={project.url} className='flex justify-between items-center font-bold
                                     text-blue-400 transition-colors hover:text-white cursor-pointer '>
                                        <img src={project.image}></img>
                                    </a>
                                </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects