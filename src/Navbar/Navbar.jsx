import { useState, useEffect } from 'react'
import { FaBars, FaXmark } from "react-icons/fa6";
import HeadIcon from '../assets/icon.png'

 const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) { // Adjust the scroll threshold as needed
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
     <header className={`text-black shadow-bottom-only fixed top-0 left-0 right-0 z-30 shadow-green-900 transition-colors duration-300 ease-in-out ${isScrolled ? "bg-green-200" : "bg-white"}`}>
        <nav className='md:px-0 px-10 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <img src={HeadIcon} alt="Logo" className="w-12 h-12" />
                <a href="/" className='text-2xl font-bold text-black'>DV<span className='text-green-600'> LP</span></a>
            </div>
            {/* nav-items for lg devices */}
            <ul className='md:flex md:gap-6 lg:gap-10 text-lg hidden'>
                <li className='text-black text-base hover:text-green-800'><a href="">Home</a></li>
                <li className='text-black text-base hover:text-green-800'><a href="">Service</a></li>
                <li className='text-black text-base hover:text-green-800'><a href="">Feature</a></li>
                <li className='text-black text-base hover:text-green-800'><a href="">Product</a></li>
                <li className='text-black text-base hover:text-green-800'><a href="">Testimonial</a></li>
                <li className='text-black text-base hover:text-green-800'><a href="">FAQ</a></li>
            </ul>


            <div className='text-white md:flex gap-4 items-center hidden'>
                <button className="bg-white text-green-500 px-4 py-2 font-medium rounded hover:bg-green-300 hover:text-green-900 transition-all duration-200 ease-in">Login</button>   
                <button className="bg-green-500 px-4 py-2 font-medium rounded hover:bg-green-300 hover:text-green-900 transition-all duration-200 ease-in">SignUp</button>      
            </div>

            {/* mobile menu btn, display mobile screen */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark  className='w-5 h-5 text-green-600'/> : <FaBars className='w-5 h-5 hover:text-green-600'/>
                    }
                </button>
            </div>

        </nav>
        {/* Menu Items small screens */}
        <div className='z-40'>
        <ul className={`md:hidden gap-4 flex flex-col text-lg space-y-4 px-4 py-6 mt-20 bg-green-200 ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
            <li className='text-black hover:text-green-800'><a href="">Home</a></li>
            <li className='text-black hover:text-green-800'><a href="">Service</a></li>
            <li className='text-black hover:text-green-800'><a href="">Feature</a></li>
            <li className='text-black hover:text-green-800'><a href="">Product</a></li>
            <li className='text-black hover:text-green-800'><a href="">Testimonial</a></li>
            <li className='text-black hover:text-green-800'><a href="">FAQ</a></li>
        </ul>
        </div>
     </header>
   )
 }
 
 export default Navbar 