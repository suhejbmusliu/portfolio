import React from 'react';

//images
import Logo from '../assets/logo.svg';

const Header = () => {
  return     <header className='py-8'>
                <div className='container mx-auto'>
                  <div className='flex justify-between items-center'>
                    {/* logo */}
                    <a href='#' className='mx-auto'>
                      <img src={Logo} alt='logo' width='70' />
                    </a>

                    {/* button */}
                    <button className='btn btn-sm mx-auto'>Work with me</button>
                  </div>
                </div>
      </header>
};

export default Header;
