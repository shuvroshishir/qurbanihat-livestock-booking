"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";
import loading from "../loading";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
    const { data, isPending } = authClient.useSession();
    const router = useRouter();

    if (isPending) return loading();

    const user = data?.user;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 animate__animated animate__fadeIn">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-(--secondary)">
                    My Profile
                </h1>
                <p className="text-gray-500 mt-2">
                    View and manage your account information easily.
                </p>
            </div>

            {/* Card */}
            <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md text-center space-y-5">

                <Avatar className="h-30 w-30 mx-auto">
                    <Avatar.Image
                        alt={user?.name}
                        src={user?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback className="text-4xl">
                        {user?.name?.charAt(0)}
                    </Avatar.Fallback>
                </Avatar>

                <h2 className="text-xl font-semibold">{user?.name}</h2>

                <p className="text-gray-500">{user?.email}</p>

                <div>
                    <button
                        onClick={() => router.push("/update-profile")}
                        className="w-full mt-10 px-6 py-2 bg-(--secondary) text-white rounded-lg hover:shadow-lg flex-center gap-2"
                    >
                        Update Info <FaEdit />
                    </button>

                    <Link href={'/'}>
                        <button className="w-full mt-3 px-6 py-2 bg-(--primary) text-white rounded-lg hover:shadow-lg flex-center gap-2">
                            Back to Home <IoMdArrowRoundBack size={20} />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Profile;