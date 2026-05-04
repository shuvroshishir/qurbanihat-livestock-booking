"use client";

import Link from "next/link";
import AnimalCard from "@/components/shared/AnimalCard";
import { IoArrowBack } from "react-icons/io5";
import { FaSort } from "react-icons/fa";
import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";


const AllAnimals = () => {
    const [animals, setAnimals] = useState([]);
    const [sort, setSort] = useState("default");
    const [loading, setLoading] = useState(true);

    // fetch data
    useEffect(() => {
        fetch("https://qurbanihat-livestock-booking.vercel.app/data.json")
            .then((res) => res.json())
            .then((data) => {
                setAnimals(data);
                setLoading(false);
            });
    }, []);


    let sortedAnimals = [...animals];
    if (sort !== "default") {
        sortedAnimals = [...animals].sort((a, b) => {
            if (sort === "low") return a.price - b.price;
            if (sort === "high") return b.price - a.price;
            return 0;
        });
    }

    return (
        <section className="AllAnimals container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">

            {/* Header (same style as Featured) */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">

                <div>
                    <h2 className="text-2xl sm:text-4xl font-bold text-(--primary)">
                        All Animals
                    </h2>
                    <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-md">
                        Discover healthy and ethically raised livestock across Bangladesh.
                    </p>
                </div>

                <Link
                    href="/"
                    className="w-fit text-sm font-semibold px-4 py-2 rounded-md border border-black/10 text-(--secondary) hover:bg-(--secondary) hover:text-white transition flex items-center gap-1"
                >
                    <IoArrowBack size={20} /> Back Home
                </Link>
            </div>

            {/* Filters (simple & clean) */}
            <div className="bg-white border border-black/10 rounded-xl p-4 mb-10 flex flex-wrap gap-3">
                <div className="p-2 bg-slate-100 rounded-md border border-black/10 text-(--secondary) flex items-center">
                    <FaSort /> <span className="font-semibold">Sort:</span>
                </div>
                <select
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-black/10 px-3 py-2 rounded-md text-sm">
                    <option value='default'>Default</option>
                    <option value='low'>Price: Low to High</option>
                    <option value='high'>Price: High to Low</option>
                </select>
            </div>

            {
                loading ?
                    <div className="flex justify-center items-center min-h-[50vh]">
                        <MoonLoader color="#064E3B" loading={true} />
                    </div>

                    :

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            sortedAnimals.map((animal) => (
                                <AnimalCard key={animal.id} animal={animal} />
                            ))
                        }
                    </div>
            }

        </section>
    );
};

export default AllAnimals;