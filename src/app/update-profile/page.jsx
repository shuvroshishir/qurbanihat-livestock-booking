"use client";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaUserEdit } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const UpdateProfile = () => {
    const router = useRouter();
    const handleUpdate = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;


        await authClient.updateUser({
            name,
            image,
        });
        router.push("/profile")
        toast.success("Updated Successfully ✅");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 animate__animated animate__fadeIn ">

            <div className="text-center mb-8 max-w-md">
                <h1 className="text-3xl font-bold text-[#064E3B]">
                    Update Your Profile
                </h1>
                <p className="text-gray-500 mt-2">
                    You can update your basic profile information here.
                    Make sure your name is correct and use a valid image URL for your profile picture.
                </p>
            </div>

            {/* Form */}
            <form
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                    }
                }}
                onSubmit={handleUpdate}
                className="bg-white px-8 py-10 rounded-2xl shadow-md w-full max-w-md space-y-5"
            >
                <div className="p-4 bg-green-300/10 border-2 border-(--secondary) text-(--secondary) rounded-full flex-center gap-2 ">
                    <FaUserEdit size={30} />
                    <h2 className="text-xl font-semibold text-center">
                        Edit Information
                    </h2>
                </div>


                {/* Name */}
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="New Name"
                    className="w-full border border-black/10 px-4 py-2 rounded-lg"
                />

                {/* Image URL */}
                <input
                    required
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="w-full border border-black/10 px-4 py-2 rounded-lg"
                />
                <div>
                    <button type="submit" className="w-full my-3 bg-(--secondary) text-white py-2 rounded-lg flex-center gap-2" >
                        Update <IoCheckmarkDoneCircleOutline size={20} />
                    </button>

                    <Link href={'/profile'}>
                        <button className="w-full bg-(--primary) text-white py-2 rounded-lg flex-center gap-2" >
                            Back to Profile <IoMdArrowRoundBack size={20} />
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;