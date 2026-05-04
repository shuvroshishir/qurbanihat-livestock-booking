"use client"

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Navbar = () => {
    const router = useRouter();

    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleSignout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/"); // redirect to login page
                },
            },
        });
    }

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
                <Link href={'/'}>
                    <div className="flex items-center text-2xl">
                        <img src='/images/cow-logo.png' alt="logo" height={50} width={50} />
                        <p className="text-(--primary) font-bold hidden sm:block">Qurbani<span className="text-(--secondary)">Hat</span></p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>

            {!user &&
                <div className="navbar-end gap-2">
                    <Link href='/login'><Button className='bg-(--secondary) text-white'>Login</Button></Link>
                    <Link href='/register'><Button className='bg-(--primary) text-white'>Register</Button></Link>
                </div>
            }

            {user &&
                <div className="navbar-end gap-2">
                    <Link href='/profile'>
                        <Avatar>
                            <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                    </Link>
                    <Button
                        onClick={handleSignout}
                        variant="danger-soft">
                        SignOut
                    </Button>
                </div>
            }
        </nav>
    );
};

export default Navbar;
