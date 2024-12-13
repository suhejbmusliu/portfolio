import React from 'react';

// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'Web Development',
    description: 'Transform your vision into reality with my expertise in web development. Whether youre launching a personal blog',
    link: 'Learn  more',
  },
  {
    name: 'UI Design',
    description: 'Immerse your audience in captivating digital journeys with my bespoke UI designs. From sleek interfaces to seamless interactions.',
    link: 'Learn  more',
  },
  {
    name: 'Logo-Design',
    description: 'Your logo is the cornerstone of your personal brand. Let me craft a visual identity that reflects your unique personality and values. From concept sketches to polished designs.',
    link: 'Learn  more',
  }
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto my-12 '>
        <div className='flex flex-col lg:flex-row '>
          {/* text*/}
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{once:    false, amount: 0.3}} className='flex-1 mb-12 lg-mb-0'>
          <h2 className='h2 text-accent mb-6 mt-4 sm:mt-12'>What I Do.</h2>
            <h3 className='h3 mx-w-[455px] mb-16'>I'm, a Frontend Web Developer, Logo Designer, and Web Designer.</h3>
            <a href='https://github.com/suhejbmusliu' className='btn btn-sm p-5 '>
                See my work
                </a>
          </motion.div>
          
          {/* services */}
          <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={"show"} viewport={{once:    false, amount: 0.3}}>
              {/* services lists*/}
              <div>
                {services.map((services, index)=> {
                  //destructure service
                  const {name, description, link} = services;
                  return <div className='border-b border-white/50 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                        <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center
                        '>
                          <BsArrowUpRight />
                        </a>
                        <a href='#' className='text-gradient text-sm'>
                          {link}
                        </a>
                    </div>

                  </div>;
                })}
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
