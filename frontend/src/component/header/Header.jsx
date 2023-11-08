
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png'
import bgImg from '../../assets/images/Blur.png'
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { useEffect, useRef } from 'react';

const navlinks =[
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Services",
    link: "/services"
  },
  {
    name: "Contact",
    link: "/contact"
  },
  {
    name: "Find Doctor",
    link: "/doctors"
  },
  {
    name: "SignUp",
    link: "/register"
  },
]

const Header = () => {
  
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleScroll = ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header');
        
      }
      {
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show_menu')
  }
  useEffect(()=>{
    handleScroll();
    return()=> window.removeEventListener('scroll', handleScroll)
  })
  return (
    <header className="p-4 bg-repeat bg-cover bg-white shadow mx-auto" ref={headerRef} style={{
      backgroundImage: `url(${bgImg})`}}>
      <div className="container mx-auto">
        <div className='flex items-center justify-between'>
          <div className='logo'>
            <img src={logo} />
          </div>
          <div className='navigation hidden sm:hidden md:block lg:block' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex justify-center items-center gap-4'>
              {
                navlinks.map((links, index)=>{
                  return(
                    <li key={index}>
                      <NavLink to={links.link} className={navclass=> navclass.isActive? 'text-blue-600 font-semibold border-b border-blue-600 text-base':'text-black font-normal text-base hover:text-blue-600 hover:border-b border-blue-600'}> {links.name} </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className='flex items-center gap-4'>
              <div className='hidden'>
                <Link to={'/'}>
                  <figure className=' rounded-full w-[40px] h-[40px]'>
                    <img src={userImg} alt='user Icon' className='w-full rounded-full' />
                  </figure>
                </Link>
              </div>
              <Link to={'/login'}>
                <button className='bg-blue-600 px-4 py-2 text-white flex justify-center rounded-[50px] font-bold'>Login</button>
              </Link>
              
          </div>
          <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu />
          </span>
        </div>
      </div>      
    </header>
  )
}

export default Header