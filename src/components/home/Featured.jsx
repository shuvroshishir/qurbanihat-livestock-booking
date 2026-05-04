import Link from "next/link";
import AnimalCard from "../shared/AnimalCard";
import { IoArrowForward } from "react-icons/io5";

const getAnimals = async () => {
    try {
        const res = await fetch("https://qurbanihat-livestock-booking.vercel.app/data.json");
        return res.json();
    }
    catch (err) {
        throw new Error("Failed to fetch data.")
    }
}

const Featured = async () => {
    const animals = await getAnimals();
    return (
        <section className="Featured container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">

            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-(--primary)">Featured Animals</h2>
                    <p className="text-slate-600 mt-2 text-sm sm:text-base">
                        Hand-picked premium livestock for your Qurbani.
                    </p>
                </div>
                <Link href="/animals" className="font-semibold px-4 py-2 border border-black/10 rounded-md text-(--secondary) hover:bg-(--secondary) hover:text-white transition flex items-center gap-1">
                    View All <IoArrowForward size={20} />
                </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {animals.slice(0, 4).map((animal, index) => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>

        </section>
    );
};

export default Featured;