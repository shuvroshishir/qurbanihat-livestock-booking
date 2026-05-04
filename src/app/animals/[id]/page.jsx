import ConfirmBookingBtn from '@/components/animal-details/ConfirmBookingBtn';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

const AnimalDetails = async ({ params }) => {
    const { id } = await params;
    console.log(id);

    const res = await fetch("https://qurbanihat-livestock-booking.vercel.app/data.json");
    const animals = await res.json();

    if (!res.ok) {
        notFound();
    }
    const animal = animals.find(animal => animal.id == id);
    if (!animal) {
        notFound();
    }
    // console.log(animal);




    return (
        <section className="bg-slate-50 py-10 ">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="space-y-6">

                        <div className="relative h-105 rounded-3xl overflow-hidden shadow-xl group">
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                fill
                                className="object-cover group-hover:scale-105 transition duration-700"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                            {/* Title on image */}
                            <div className="absolute bottom-6 left-6 text-white">
                                <h2 className="text-3xl font-bold">{animal.name}</h2>
                                <p className="text-lg mt-1 text-white/90">
                                    ৳ {animal.price.toLocaleString()}
                                </p>
                            </div>
                        </div>

                        {/* Description Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-black/10">
                            <h4 className="font-semibold text-(--primary) mb-2">
                                About this animal
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {animal.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                            {/* Breed */}
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/5">
                                <p className="text-xs text-gray-400">Breed</p>
                                <p className="font-semibold text-(--primary)">
                                    {animal.breed}
                                </p>
                                <p className="text-[11px] text-gray-500 mt-1">
                                    Premium quality livestock
                                </p>
                            </div>

                            {/* Weight */}
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/5">
                                <p className="text-xs text-gray-400">Weight</p>
                                <p className="font-semibold text-(--primary)">
                                    {animal.weight} kg
                                </p>
                                <p className="text-[11px] text-gray-500 mt-1">
                                    Ideal for Qurbani
                                </p>
                            </div>

                            {/* Age */}
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/5">
                                <p className="text-xs text-gray-400">Age</p>
                                <p className="font-semibold text-(--primary)">
                                    {animal.age} years
                                </p>
                                <p className="text-[11px] text-gray-500 mt-1">
                                    Healthy & well-grown
                                </p>
                            </div>

                            {/* Type */}
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/5">
                                <p className="text-xs text-gray-400">Category</p>
                                <p className="font-semibold text-(--primary)">
                                    {animal.type}
                                </p>
                                <p className="text-[11px] text-gray-500 mt-1">
                                    Verified livestock type
                                </p>
                            </div>

                            {/* Location */}
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/5 col-span-2 sm:col-span-1">
                                <p className="text-xs text-gray-400">Location</p>
                                <p className="font-semibold text-(--primary)">
                                    {animal.location}
                                </p>
                                <p className="text-[11px] text-gray-500 mt-1">
                                    Available for delivery
                                </p>
                            </div>

                        </div>


                    </div>


                    <div className="relative">

                        <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-black/10">

                            <h3 className="text-2xl font-semibold text-(--primary)">
                                Book Now
                            </h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Secure your livestock in seconds
                            </p>

                            <form className="space-y-5">

                                {/* Floating Input Style */}
                                <div>
                                    <label className="text-xs text-gray-400">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full mt-1 border-b border-black/20 focus:border-(--secondary) outline-none py-2 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full mt-1 border-b border-black/20 focus:border-(--secondary) outline-none py-2 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gray-400">Phone</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full mt-1 border-b border-black/20 focus:border-(--secondary) outline-none py-2 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gray-400">Address</label>
                                    <textarea
                                        rows={3}
                                        required
                                        className="w-full mt-1 border-b border-black/20 focus:border-(--secondary) outline-none py-2 text-sm"
                                    />
                                </div>
                                <ConfirmBookingBtn />

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AnimalDetails;