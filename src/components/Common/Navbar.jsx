import { useState } from 'react';
import ThemeSwitch from '../ThemeSwitch'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6';

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    console.log(isNavOpen)

    return (
        <>
            <section className='relative'>
                <button onClick={() => setIsNavOpen((prev) => !prev)} type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden">
                    <FaBars className={`size-6 ${isNavOpen ? "text-puertoRico-300" : "text-puertoRico-500 dark:text-white"}`} />
                </button>
                <div className={`absolute md:relative z-10 bg-white dark:bg-slate-800 md:bg-transparent w-64 right-0 rounded-lg border dark:border-slate-600 md:border-none md:flex md:w-auto ${isNavOpen ? "" : "hidden"}`}>
                    <ul className="flex flex-col p-4 rounded-lg md:p-0 md:flex-row md:items-center md:mt-0 md:border-0 ">
                        <li className='flex flex-col items-center mb-2 md:mb-0'>
                            <Link to="/categoria/alojamientos" className="px-4 py-2 mr-2 rounded-full hover:bg-puertoRico-500 hover:text-white">Hoteles</Link>
                        </li>
                        <li className='flex flex-col items-center mb-2 md:mb-0'>
                            <Link to="/categoria/restaurantes" className="px-4 py-2 mr-2 rounded-full hover:bg-puertoRico-500 hover:text-white">Restaurantes</Link>
                        </li>
                        <li className='flex flex-col items-center mb-2 md:mb-0'>
                            <Link to="/categoria/playas" className="px-4 py-2 mr-2 rounded-full hover:bg-puertoRico-500 hover:text-white">Playas</Link>
                        </li>
                        <li className='flex flex-col items-center mb-2 md:mb-0'>
                            <div className='flex items-center justify-center'>
                                <span className='mr-3 md:hidden dark:text-white'>Modo oscuro</span><ThemeSwitch />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
