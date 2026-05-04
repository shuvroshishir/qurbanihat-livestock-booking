"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const Register = () => {


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.image,
        });

        console.log({ data, error });

        if (error) {
            toast(`Signup failed: ${error.message}`);
            return;
        }

        toast("Registration Successful 🎉");
    };

    return (
        <main className="Register sm:min-h-[80vh] container mx-auto shadow-lg hover:shadow-xl my-10 rounded-3xl overflow-hidden flex flex-col md:flex-row">

            {/* Left Side */}
            <div className="hidden md:flex md:w-1/2 bg-linear-to-br from-[#4B2C20] to-[#9f4d2c] text-white items-center justify-center p-12">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold">QurbaniHat</h1>
                    <p className="mt-4 text-sm opacity-80">
                        Join the most trusted livestock marketplace.
                    </p>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex items-center justify-center p-6 bg-slate-100">
                <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-sm">

                    <h2 className="text-2xl font-bold text-(--primary)">
                        Create Account
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                        Start your journey with us
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            className="w-full border border-black/10 px-4 py-2 rounded-md"
                        />

                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            required
                            className="w-full border border-black/10 px-4 py-2 rounded-md"
                        />

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
                            Register <FaArrowRight />
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
                        Already have an account?{" "}
                        <Link href="/login" className="text-(--secondary) font-semibold">
                            Login
                        </Link>
                    </p>

                </div>
            </div>
        </main>
    );
};

export default Register;