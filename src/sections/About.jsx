import React from 'react'

const About = () => {

    const skills = [
        "Java", "Python", "React", "TensorFlow", "Javascript", "Tailwind CSS", "Node.js", "SQL"
    ]

    return (
        <section id="about" className="min-h-screen font-mono flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="max-w-3xl text-4xl fonts-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600
            bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className='p-8 mb-6 rounded-xl border-white border-2 hover:-translate-y-1 transition-all'>

                    <p className=" text-gray-300 mb-1 text-xl">
                        {" "}
                        Passionate developer with expertise in building scalable web applications and creating innovative solutions. 
                        Outside of work I enjoy golfing, fishing and snowboarding!
                    </p>
                </div>
                <div className="grid grid-cols-1">
                    <div className="rounded-xl p-6 ">
                        <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
                        <div className="grid grid-cols-2 text-center flex-wrap gap-4">{skills.map((skill, index) => <span className='bg-blue-500/10 text-blue-400
                        py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:-translate-y-1'  key={index}>{skill}</span>)}</div>
                    </div>

                    {/* <div className="p-6">
                        <h3 className="text-2xl text-center font-bold mb-8">🎓 Education</h3>
                        <ul className='pl-5  list-disc list-inside text-lg text-center text-gray-300'>
                            <li>
                                <strong>
                                    <em> AD: Fanshawe College</em>
                                </strong>
                            </li>
                            <li>
                                Program:Computer Programmer Analyst
                            </li>
                        </ul>
                    </div> */}

                </div>
                <div className="p-6 ">
                    <h3 className="text-2xl text-center font-bold mb-8">🎓 Work Experience</h3>
                    <ul className='pl-5  list-disc list-inside text-lg text-gray-300'>
                        <li className='list-none'>
                            <strong className='text-blue-400'>
                               ⚪️ Staff Software Engineer
                            </strong>
                            <br/> May 2022 - Present<br/>
                            <p className='py-2'>· Consult with clients to diagnose and resolve product issues included in 
                            Maximo Application Suite. Work with telemetry tools to collect and 
                            analyze data to identify performance bottlenecks. Conduct presentations on 
                            Maximo functionality and assist with creating training 
                            documentation for all new hires of Maximo application team.</p>
                        </li>
                         <li className='list-none py-1'>
                            <strong className='text-blue-400 '>
                                ⚪️ Software Engineer
                            </strong>
                            <br/> April 2020 - May 2022<br/>
                            <p className='py-2'> · Subject Matter Expert (SME) for Maximo Spatial where I assisted clients 
                            with data design and integration between Maximo Spatial and ArcGIS products. 
                            Supported clients with Maximo and Maximo Spatial environment upgrades. 
                            Published technical documentation for Maximo and Maximo Spatial.</p>
                        </li>
                    
                
                    </ul>
                </div>


            </div>
        </section>
    )
}

export default About