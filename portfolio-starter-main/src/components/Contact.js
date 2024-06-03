import React from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

      // Accessing user's email from the form
  const userEmail = e.target.email.value;

  // Replace these values with your EmailJS service ID, template ID, and user ID
  emailjs.sendForm('service_xax1j09', 'template_ellrm2l', e.target, 'R0rzN9Wn-2VS0-lpc')
    .then((result) => {
      console.log(result.text);
      window.alert("Email sent successfully!"); // Alert for successful email sending
      // Add any success message or redirection logic here
    }, (error) => {
      console.log(error.text);
      window.alert("Failed to send email. Please try again later."); // Alert for failed email sending
      // Add any error handling logic here
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
          <motion.form onSubmit={sendEmail} variants={fadeIn('left', 0.3)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.3}} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 mb-40 items-start'>

            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              name='name'
              placeholder='Your name'
            />

            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              name='email'
              placeholder='Your email'
            />
            
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              name='message'
              placeholder='Your message'
            ></textarea>

            <button type='submit' className='btn btn-lg'>
              Send message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
