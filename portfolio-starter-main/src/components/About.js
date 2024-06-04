import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from '../assets/about-pic.jpeg';
import PDF from '../assets/SuhejbCV.pdf'; // Import the PDF file

const About = () => {
  const [ref, ] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-y-0 lg:gap-x-20 lg-gap-y-0 h-screen'>
          { /* IMG */}
          <div className='lg:flex-1 bg-contain bg-no-repeat h-[640px]'>
            <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}}> 
              <img src={Image} alt='' className='w-full  max-w-[50vh] max-h-[50vh] lg:max-h-full rounded-3xl' />
            </motion.div>
          </div>

          { /* text */}
          <div className='lg:w-1/2 lg:order-first mt-8 lg:mt-0 flex flex-col justify-center'> 
            <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={"show"} viewport={{once:    false, amount: 0.3}}>
              <h2 className='h2 text-accent text-4xl'>
                About me
              </h2>

              <h3 className='h3 mb-4 text-2xl'> {/* Increased font size */}
                I'm Freelance Front-end Developer
              </h3>

              <p className='mb-6 text-xl'> {/* Increased font size */}
               I'm, a Frontend Web Developer, Logo Designer, and Web Designer. I specialize in crafting captivating digital experiences through clean interfaces, memorable logos, and stunning web layouts. Let's collaborate and turn your vision into a digital masterpiece. Explore my portfolio and let's create something extraordinary together.
              </p>

              <div className='flex gap-x-8 items-center'>
                <a href={PDF} download className='btn btn-lg flex items-center justify-center'>Download CV</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
