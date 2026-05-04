"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";

const Login = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);


        toast("Login Successful ✅");
    };

    return (
        <section className="Login sm:min-h-[80vh] container mx-auto shadow-lg hover:shadow-xl my-10 rounded-3xl overflow-hidden flex flex-col md:flex-row">

            {/* Left Side */}
            <div className="hidden md:flex md:w-1/2 bg-linear-to-br from-[#1d4140] to-[#08936e] text-white items-center justify-center p-12">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold">QurbaniHat</h1>
                    <p className="mt-4 text-sm opacity-80">
                        Connecting tradition with modern convenience.
                    </p>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex items-center justify-center p-6 bg-slate-100">
                <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-sm">

                    <h2 className="text-2xl font-bold text-(--primary)">
                        Welcome back
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                        Please login to your account
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full border border-black/10 px-4 py-2 rounded-md"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full border border-black/10 px-4 py-2 rounded-md"
                        />

                        <button
                            type="submit"
                            className="w-full bg-(--secondary) text-white py-2 rounded-md flex items-center justify-center gap-2">
                            Sign In <FaArrowRight />
                        </button>
                    </form>
                    <div className="mt-6">

                        {/* Divider */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-1 h-px bg-gray-200"></div>
                            <span className="text-xs text-gray-400">OR</span>
                            <div className="flex-1 h-px bg-gray-200"></div>
                        </div>

                        {/* Google Button */}
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 border border-black/10 py-2 rounded-md hover:bg-slate-50 transition"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="google"
                                className="w-5 h-5"
                            />
                            <span className="text-sm font-medium text-gray-700">
                                Continue with Google
                            </span>
                        </button>

                    </div>

                    <p className="mt-6 text-sm text-center">
                        Don’t have an account?{" "}
                        <Link href="/register" className="text-(--secondary) font-semibold">
                            Register
                        </Link>
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Login;