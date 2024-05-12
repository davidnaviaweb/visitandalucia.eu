import React from 'react'
import ThemeSwitch from '../ThemeSwitch'
import DropdownMenu from '../DropdownMenu'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link to="/provincia/" className="mr-5">First Link</Link>
                <DropdownMenu />
                <a className="mr-5 ">Second Link</a>
                <a className="mr-5 ">Third Link</a>
                <a className="mr-5 ">Fourth Link</a>
            </nav>
            <ThemeSwitch />
        </>
    )
}
