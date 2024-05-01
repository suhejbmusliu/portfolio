import React from 'react';
//motion
import { motion } from 'framer-motion'
//variante 
import {fadeIn} from '../variants'
//image
import img1 from '../assets/Qendraera-project.jpg'
import img2 from '../assets/Aodproject.png'
import img3 from '../assets/Logo-bg.png'

const Work = () => {
  return <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
            <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'> 

              {/* text */}
              <div>
                <h2 className='h2 leading-tight text-accent'>
                  My latest <br/> Work
                </h2>
                <p className='max-w-sm mb-16'>
                Your logo is the cornerstone of your personal brand. Let me craft a visual identity that reflects your unique personality and values. From concept sketches to polished designs.
                </p>
                <button className='btn btn-sm'>View all project</button>
              </div>

              {/* image */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-2xl '>

                {/* overaly */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 trasition-all duration-300'></div>

                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />

                {/* pretittle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Development</span> 
                </div>

                 {/* tittle */}
                 <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                   <span className='text-3xl text-white'>Qendra Era</span>
                 </div>
                 

              </div>

            </motion.div>
            <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-4'>

              {/*image */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-2xl '>

                  {/* overaly */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 trasition-all duration-300'></div>

                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" />

                  {/* pretittle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Development</span> 
                  </div>

                  {/* tittle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>ArOfDifference</span>
                  </div>
                  

              </div>

              <div className='group relative overflow-hidden border-2 border-white/50 rounded-2xl '>

                  {/* overaly */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 trasition-all duration-300'></div>

                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />

                  {/* pretittle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Logo Design</span> 
                  </div>

                  {/* tittle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>All logos</span>
                  </div>
                  

              </div>
              

            </motion.div>
        </div>
      </div>
    </section>
};

export default Work;
