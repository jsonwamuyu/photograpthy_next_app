import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    // toggle mebole nav
    const [toggle, setToggle] = useState(false);

    // Backgound color change on scroll
    const [bgColor, setBgColor] = useState('transparent');

    // Text color change on scrolling
    const [textColor, setTextColor] = useState("#ffffff");

    const handleToggle = () =>{
        setToggle(!toggle);
    }

    useEffect(() =>{
        const changeColor = () =>{
            if (window.scrollY >= 90) {
                setBgColor("#ffffff");
                setTextColor("#000000");
            }else{
                setBgColor("transparent");
                setTextColor("#ffffff"); 
            }
        }
        window.addEventListener('scroll', changeColor);
    },[])

  return (
    <nav className='fixed top-0 left-0 z-10 ease-in duration-900 w-full' style={{backgroundColor:`${bgColor}`}}>
        <div className='flex justify-between items-center max-w-[1240px] m-auto p-4 text-white'>
            {/* Logo */}
            <Link href="/">
                <h2 className='text-4xl font-bold' style={{color:`${textColor}`}}>Captur</h2>
            </Link>

            {/* Menu */}
            <ul className='hidden sm:flex space-x-8' style={{color:`${textColor}`}}>
                <li><Link className='text-lg hover:text-gray-400' href='/'>Home</Link></li>
                <li><Link className='text-lg hover:text-gray-400' href='/#gallery'>Gallery</Link></li>
                <li><Link className='text-lg hover:text-gray-400' href='/portifolio'>Work</Link></li>
                <li><Link className='text-lg hover:text-gray-400' href='/contact'>Contact Us</Link></li>
            </ul>

            {/* Mobile button */}
            <div onClick={handleToggle} className='sm:hidden block z-10 cursor-pointer ease-in duration-300'>
                {toggle ? <AiOutlineClose size={25} style={{color:`${textColor}`}}/> : <AiOutlineMenu size={25} style={{color:`${textColor}`}}/>}
            </div>

            {/* Mobile menu */}
                <div className={toggle ? 'absolute flex justify-center items-center w-full h-screen sm:hidden bg-black text-white top-0 left-0 bottom-0 text-center ease-in duration-300'
                : 'absolute flex justify-center items-center w-full h-screen sm:hidden bg-black text-white top-0 left-[-100%] bottom-0 text-center ease-in duration-300'}>
                <ul className='flex flex-col space-y-8'>
                    <li><Link className='text-4xl hover:text-gray-500' href='/'>Home</Link></li>
                    <li><Link className='text-4xl hover:text-gray-500' href='/#gallery'>Gallery</Link></li>
                    <li><Link className='text-4xl hover:text-gray-500' href='/portifolio'>Work</Link></li>
                    <li><Link className='text-4xl hover:text-gray-500' href='/contact'>Contact Us</Link></li>
                </ul>
            </div>
        </div>        
    </nav>
  )
}

export default Navbar