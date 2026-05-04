import Link from "next/link";
import { FaHome } from "react-icons/fa";

import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">

            <div className="container mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-20 flex flex-col-reverse md:flex-row items-center gap-2 sm:gap-10">
                <div className="flex-1 text-center md:text-left text-(--primary)">

                    <h1 className="text-5xl md:text-9xl font-bold mb-4">
                        404
                    </h1>

                    <p className="text-2xl md:text-3xl font-semibold mb-3">
                        Oops! Page not found.
                    </p>

                    <p className="text-gray-500 mb-6 max-w-md">
                        Sorry, the page you’re looking for doesn’t exist or has been moved.
                        Let’s get you back on track.
                    </p>

                    <Link
                        href="/"
                        className="flex justify-center items-center sm:justify-start"
                    >
                        <button className=" w-fit bg-(--secondary) text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition duration-200 flex items-center gap-2">
                            <FaHome />
                            Go Back to Home
                        </button>

                    </Link>

                </div>

                <div className="flex-1">
                    <img
                        src="/images/ninja-cow.png"
                        alt="Error Illustration"
                        className="w-full max-w-sm mx-auto"
                    />
                </div>

            </div>

        </div>
    );
};

export default NotFound;