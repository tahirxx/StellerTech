
import { SparklesIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    let Links = [
        {name: 'Home', link: '/'},
        {name: 'Services', link: '/'},
        {name: 'About', link: '/'},
        {name: 'Contact', link: '/'}
    ]

    let [isOpen, setIsOpen] = useState(false);

    isOpen

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className="shadowmd w-full fixed top-0 left-0 z-10">
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
                {/* logo */}
                <div className='flex text-2xl cursor-pointer items-center gap-2'>
                    <SparklesIcon className='w-7 h-7 text-blue-600'/>
                   <span className='font-bold'>StellarTech Consulting</span> 
                   
                </div>

                {/* menu icon */}
                 <div onClick={handleOpen} className='block w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
                   {
                    !isOpen ? <Bars3BottomRightIcon size={20}/> : <XMarkIcon size={20} />
                   }
                   
                </div>

                {/* nav link */}
                
                <ul className= {!isOpen ? 'hidden md:flex pl-9 md:pl-0 md:items-center md:pb-0 transition-all duration-500 ease-in' : 'fixed left-[-100%]' }>
                    {
                        Links.map(link => (
                        <li className='font-semibold my-7 md:my-0 md:ml-8 hover:text-gray-500'>
                            <a href='/'>{link.name}</a>
                            </li>))
                    }
                    <button className='btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static'>Get Started</button>
                </ul>
               
            </div>
        </div>
  )
}
