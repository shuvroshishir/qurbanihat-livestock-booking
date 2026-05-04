import Image from "next/image";
import Link from "next/link";




// method 1 - external function for pass into other components as props
// const getPosts = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         return res.json();
//     }
//     catch (err) {
//         throw new Error("Failed to fetch data.")
//     }
// }

const animals = [
    {
        name: "Majestic Sahiwal",
        location: "Pabna Dairy Farm",
        weight: "420 KG",
        price: "৳ 2,45,000",
        badge: "Organic Feed",
        image: "/images/animals/cows/1.jpg",
    },
    {
        name: "Royal Brahman",
        location: "Kushtia Heritage",
        weight: "380 KG",
        price: "৳ 1,95,000",
        badge: "Vaccinated",
        image: "/images/animals/cows/1.jpg",
    },
    {
        name: "Golden Beetal",
        location: "Sylhet Valley",
        weight: "65 KG",
        price: "৳ 45,000",
        badge: "Healthy",
        image: "/images/animals/cows/1.jpg",
    },
    {
        name: "Elite Friesian",
        location: "Dhaka Agro Hub",
        weight: "510 KG",
        price: "৳ 3,10,000",
        badge: "Premium",
        image: "/images/animals/cows/1.jpg",
    },
];

const Featured = () => {
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
                <Link href="/animals" className="font-semibold px-4 py-2 border border-black/10 rounded-md text-(--secondary) hover:bg-(--secondary) hover:text-white transition">
                    View All →
                </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {animals.map((animal, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden">

                        {/* Image */}
                        <div className="relative h-56">
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                fill
                                className="object-cover"
                            />
                            <span className="absolute top-3 left-3 bg-(--secondary) text-white text-xs px-2 py-1 rounded">
                                {animal.badge}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="font-semibold">{animal.name}</h3>
                            <p className="text-sm text-gray-500">{animal.location}</p>

                            <div className="flex justify-between mt-4 text-sm">
                                <div>
                                    <p className="text-gray-400">Weight</p>
                                    <p className="font-semibold">{animal.weight}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-400">Price</p>
                                    <p className="font-semibold text-green-600">
                                        {animal.price}
                                    </p>
                                </div>
                            </div>

                            <button className="mt-4 w-full py-2 border border-black/10 rounded-md text-(--secondary) hover:bg-(--secondary) hover:text-white transition">
                                View Details
                            </button>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default Featured;