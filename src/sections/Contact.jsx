import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen font-mono flex items-center justify-center py-20">
        <div className="px-4 w-150">
            <h2 className='max-w-3xl text-4xl fonts-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600
            bg-clip-text text-transparent text-center'>
                Get In touch
            </h2>
            <form className='space-y-6' action="https://formsubmit.co/zstlouis7@gmail.com" method="POST">
                <div className="relative">
                    <input type="text" id='name' name='name' placeholder='Enter Name' required className='w-full bg-white/10 rounded px-4 py-3 text-white transition
                    focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'/>
                </div>

                 <div className="relative">
                    <input type="text" id='email' name='email' placeholder='Enter Email' required className='w-full bg-white/10 rounded px-4 py-3 text-white transition
                    focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'/>
                </div>

                 <div className="relative">
                    <textarea type="message" id='message' name='message' rows={5} placeholder='Input Message' required className='w-full bg-white/10 rounded px-4 py-3 text-white transition
                    focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'/>
                </div>

                <button type='submit' className='w-full bg-gradient-to-r flex justify-center cursor-pointer from-teal-500 to-indigo-600 px-6 rounded font-medium
                transition relative overflow-hidden hover:translate-y-1 py-3'> Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact