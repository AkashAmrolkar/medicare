
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaUser, FaLock, FaCaretUp  } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../assets/images/header-logo.svg'

const Header = () => {
  const user = useSelector((state) => state.user.user);

  const [showLoginMenu, setShowLoginMenu] = useState(false)
  const handleLoginMenu = () =>{
    setShowLoginMenu(!showLoginMenu)
  }
  window.addEventListener('click', function(){
    setShowLoginMenu(!showLoginMenu)
  });

  const menus = [
    {
      menuItem: 'Home',
      menuLink: '/'
    },
    {
      menuItem: 'About Us',
      menuLink: '/about'
    },
    {
      menuItem: 'Doctors',
      menuLink: '/doctors'
    },
    {
      menuItem: 'Contact Us',
      menuLink: '/contact'
    },
  ]
  return (
    <div className=' py-4 bg-slate-100 shadow-lg'>
      <div className='container'>
        <div className=' flex justify-between items-center'>
          <div>
            <img src={logo} alt='logo' height='40' width='140' loading='lazy' />
          </div>
          <div className='flex gap-7 font-medium text-lg'>
            {
              menus.map((item, index)=>{
                return(
                  <Link to={item.menuLink} key={index} className='relative hover:text-primary active:text-primary'>{item.menuItem}</Link>                  
                )
}             )
            }
          </div>
          {
            user ? 
              <div className=' rounded-full h-10 w-10 border border-slate-900 flex gap-2 cursor-pointer relative' onClick={handleLoginMenu}>
                {
                  user.profileImage? <img src={user.profileImage} className='w-10 h-10 object-cover rounded-full' />: <img src='' className='w-10 h-10 object-cover rounded-full' />
                }
                <FaCaretUp className=' text-gray-600 h-4 w-4 text-base' />
                {
                  showLoginMenu && 
                <div className='absolute top-16 bg-white px-4 py-6 shadow-lg w-max right-0'>
                  <div className='flex gap-3 mb-5'>
                  {
                    user.profileImage? <img src={user.profileImage} className='w-10 h-10 object-cover rounded-full' />: <img src='' className='w-10 h-10 object-cover rounded-full' />
                  }
                  <div>
                    <h6>{user.userName}</h6>
                    <p>{user?.role}</p>
                  </div>
                  </div>
                  <div className='flex flex-col'>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/logout'>Logout</Link>
                  </div>
                </div>
                }
              </div> 
              : 
              <div className='flex gap-4'>
                <Link to='/register'>
                  <div className='flex gap-1 items-center border border-slate-900 rounded-lg py-3 px-5 hover:bg-primary hover:text-white hover:border-white transition delay-75'><FaUser/><p className=' font-medium text-sm'>Register</p></div>
                </Link>
                <Link to='/login'>
                  <div className='flex gap-1 items-center border border-slate-900 rounded-lg py-3 px-5 hover:bg-primary hover:text-white hover:border-white transition delay-75'><FaLock/><p className=' font-medium text-sm'>Login</p></div>
                </Link>
              </div>
          
          }
          
        </div>
      </div>

    </div>
  )
}

export default Header