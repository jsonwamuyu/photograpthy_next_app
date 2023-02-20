import React from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 z-10 ease-in duration-300 w-full'>
        <div className='flex justify-between items-center max-w-[1240px] m-auto p-4 text-white'>
            {/* Logo */}
            <Link href="/">
                <h2 className='text-4xl font-bold'>Captur</h2>
            </Link>

            {/* Menu */}
            <ul className='hidden sm:flex space-x-8'>
                <li><Link className='' href='/'>Home</Link></li>
                <li><Link className='' href='/#gallery'>Gallery</Link></li>
                <li><Link className='' href='/portifolio'>Work</Link></li>
                <li><Link className='' href='/contact'>Contact Us</Link></li>
            </ul>

            {/* Mobile button */}
            <div className='sm:hidden'>
                <AiOutlineMenu size={20}/>
            </div>

            {/* Mobile menu */}
            <div className='sm:hidden bg-black text-white'>
                <ul className='flex flex-col space-y-8'>
                    <li><Link className='' href='/'>Home</Link></li>
                    <li><Link className='' href='/#gallery'>Gallery</Link></li>
                    <li><Link className='' href='/portifolio'>Work</Link></li>
                    <li><Link className='' href='/contact'>Contact Us</Link></li>
                </ul>
            </div>
        </div>        
    </nav>
  )
}

export default Navbar