import Link from "next/link";
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="Hero px-4 py-4 sm:px-12  sm:py-20 bg-[#FAF3E0]">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                    <p className="badge badge-warning rounded-full"> Eid-ul-Adha Collection 2026</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-(--primary)">
                        Celebrate Your{" "}
                        <span className="text-(--secondary)">Qurbani</span> with Excellence
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                        Choose from our premium selection of ethically raised cows and goats, delivered with religious integrity and professional care directly to your doorstep. Quality guaranteed.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">

                        <Link
                            href="/animals"
                            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-(--secondary) text-white font-semibold hover:opacity-90 transition"
                        >
                            <FaShoppingBag />
                            Browse Animals
                        </Link>

                        <Link
                            href="#about"
                            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full border-2 border-slate-500 text-slate-700 hover:bg-slate-100 transition"
                        >
                            About Us
                            <FaArrowRight />
                        </Link>

                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 relative">
                    <img
                        src="/images/hero-image.jpg"
                        alt="Livestock"
                        className="w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover rounded-xl"
                    />

                    {/*  Badge */}
                    <div className="scale-75 sm:scale-100 flex items-center gap-3 absolute -bottom-6 -right-6 sm:-bottom-5 sm:-right-5 bg-white px-4 py-3 rounded-xl shadow-md">
                        <div className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-(--secondary)/10 text-(--secondary)">
                            ✓
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm font-semibold text-(--primary)">
                                100% Healthy
                            </p>
                            <p className="text-[10px] sm:text-xs text-slate-500">
                                Vet Certified
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;