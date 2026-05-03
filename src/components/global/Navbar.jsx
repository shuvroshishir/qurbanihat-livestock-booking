import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    const NavLinks =
        <>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/animals'>All Animals</Link></li>
        </>

    return (
        <nav className="navbar container mx-auto px-0">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-0 pr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {NavLinks}
                    </ul>
                </div>
                <div className="flex items-center text-xl">
                    <img src='/images/cow-logo.png' alt="logo" height={40} width={40} />
                    <p className="text-(--neutral) font-bold hidden sm:block">Qurbani<span className="text-(--secondary)">Hat</span></p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end gap-1">
                <Link href='/register'><Button className='bg-(--primary) text-white'>Register</Button></Link>
                <Link href='/register'><Button className='bg-(--secondary) text-white'>Login</Button></Link>
            </div>
        </nav>
    );
};

export default Navbar;
