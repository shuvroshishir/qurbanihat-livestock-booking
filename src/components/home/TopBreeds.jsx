import Image from "next/image";

const breeds = [
    {
        name: "Brahman Cow",
        type: "Cow",
        image: "/images/animals/cows/1.jpg",
    },
    {
        name: "Sahiwal Cow",
        type: "Cow",
        image: "/images/animals/cows/2.jpg",
    },
    {
        name: "Deshi Cow",
        type: "Cow",
        image: "/images/animals/cows/4.jpg",
    },
    {
        name: "Black Bengal Goat",
        type: "Goat",
        image: "/images/animals/goats/4.jpg",
    },
    {
        name: "Jamunapari Goat",
        type: "Goat",
        image: "/images/animals/goats/2.jpg",
    },
    {
        name: "Beetal Goat",
        type: "Goat",
        image: "/images/animals/goats/7.jpg",
    },
];

const TopBreeds = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-(--secondary)">
                        Premium Breeds
                    </h2>
                    <p className="text-slate-600 mt-2 text-sm sm:text-base">
                        Select from our elite lineage of livestock
                    </p>
                </div>

                {/* Circle Grid */}
                <div className="flex flex-wrap justify-center md:justify-between gap-8">

                    {breeds.map((breed, index) => (
                        <div key={index} className="text-center group">

                            {/* Circle Image */}
                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition">

                                <Image
                                    src={breed.image}
                                    alt={breed.name}
                                    fill
                                    className="object-cover"
                                />

                            </div>

                            {/* Name */}
                            <p className="mt-4 text-sm sm:text-base font-medium text-slate-700">
                                {breed.name}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default TopBreeds;