import Image from "next/image";
import Link from "next/link";
import { MdOutlineLocationOn } from "react-icons/md";

const AnimalCard = ({ animal }) => {
    return (
        <div className="animalCard animate__animated animate__fadeInUp  bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden hover:-translate-y-1 transition-all ease-in-out duration-200">

            {/* Image */}
            <div className="relative h-56">
                <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-(--secondary) text-white text-xs px-2 py-1 rounded">
                    {animal.breed}
                </span>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="font-semibold">{animal.name}</h3>
                <p className="text-sm text-gray-500 flex gap-0.5 items-center">{animal.location} <MdOutlineLocationOn /></p>

                <div className="flex justify-between mt-4 text-sm">
                    <div>
                        <p className="text-gray-400">Weight</p>
                        <p className="font-semibold">{animal.weight} KG</p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-400">Price</p>
                        <p className="font-semibold text-green-600">
                            ৳ {animal.price}
                        </p>
                    </div>
                </div>

                <Link href={`/animals/${animal.id}`}>
                    <button

                        className="mt-4 w-full py-2 border border-black/10 rounded-md text-(--secondary) hover:bg-(--secondary) hover:text-white transition ">
                        View Details
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default AnimalCard;