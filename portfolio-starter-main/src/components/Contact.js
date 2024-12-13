import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [user_name, setUserName] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setUserName(e.target.value);
        break;
      case 'email':
        setUserEmail(e.target.value);
        break;
      case 'message':
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Basic form validation
    if (!user_name || !user_email || !message) {
      toast.warn('Please fill out all fields.', {
        className: 'bg-yellow-100 text-yellow-800',
        bodyClassName: 'text-sm',
      });
      return;
    }

    const templateParams = {
      user_name: user_name,
      user_email: user_email,
      message: message
    };

    emailjs.send('service_xax1j09', 'template_yeh603j', templateParams, 'R0rzN9Wn-2VS0-lpc')
      .then((result) => {
        toast.success('Email sent successfully!', {
          className: 'bg-green-100 text-green-800',
          bodyClassName: 'text-sm',
          icon: '✔️',
        });
        console.log(result.text);
      }, (error) => {
        toast.error('Failed to send email. Please try again later.', {
          className: 'bg-red-100 text-red-800',
          bodyClassName: 'text-sm',
          icon: '❌',
        });
        console.log(error.text);
      });

    setUserName('');
    setUserEmail('');
    setMessage('');
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
              value={user_name}
              onChange={handleChange}
              placeholder='Your name'
            />

            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              name='email'
              value={user_email}
              onChange={handleChange}
              placeholder='Your email'
            />
            
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              name='message'
              value={message}
              onChange={handleChange}
              placeholder='Your message'
            ></textarea>

            <button type="submit" className='btn btn-lg'>
              Send message
            </button>
          </motion.form>
        </div>
      </div>
      <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="mt-4 mx-4 flex justify-center items-center"
            toastClassName="text-sm p-3 rounded-md shadow-lg"
          />


    </section>
  );
};

export default Contact;
