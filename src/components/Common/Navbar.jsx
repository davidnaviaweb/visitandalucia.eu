import React from 'react'
import ThemeSwitch from '../ThemeSwitch'
import DropdownMenu from '../DropdownMenu'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                <Link to="/categoria/alojamientos" className="px-4 py-2 mr-2 rounded-full hover:bg-puertoRico-500 hover:text-white">Hoteles</Link>
                {/* <DropdownMenu /> */}
                <Link to="/categoria/restaurantes" className="px-4 py-2 mr-2 rounded-full hover:bg-puertoRico-500 hover:text-white">Restaurantes</Link>
                <Link to="/categoria/playas" className="px-4 py-2 mr-2 rounded-full hover:bg-puertoRico-500 hover:text-white">Playas</Link>
            </nav>
            <ThemeSwitch />
        </>
    )
}
