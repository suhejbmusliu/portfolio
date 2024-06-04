import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData.email); 

    emailjs.sendForm('service_xax1j09', 'template_dra9wh4', e.target, 'R0rzN9Wn-2VS0-lpc')
      .then((result) => {
        console.log(result.text);
        
      }, (error) => {
        console.log(error.text);
 
      });

  
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-5xl uppercase text-accent font-medium mb-2 tracking-wide'> Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form onSubmit={handleSubmit} variants={fadeIn('left', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 mb-40 items-start'>

            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name'
            />

            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your email'
            />
            
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your message'
            ></textarea>

            <button type="submit" className='btn btn-lg'>
              Send message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
