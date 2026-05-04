import { FaCheckCircle, FaHeart, FaHandshake } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

const features = [
    {
        icon: <FaCheckCircle />,
        title: "Premium Quality & Fair Pricing",
        desc: "Every animal is checked by certified veterinarians to ensure top health standards.",
        color: "text-(--primary)",
        bg: "bg-(--primary)/10",
    },
    {
        icon: <FaHeart />,
        title: "Ethical Sourcing",
        desc: "We ensure humane treatment and proper feeding for all livestock.",
        color: "text-(--secondary)",
        bg: "bg-(--secondary)/10",
    },
    {
        icon: <FaHandshake />,
        title: "Safe Delivery",
        desc: "Hassle-free transportation to your doorstep.",
        color: "text-(--primary)",
        bg: "bg-(--primary)/10",
    },
    {
        icon: <MdOutlineSupportAgent />,
        title: "24/7 Support",
        desc: "Dedicated team to assist you at every step.",
        color: "text-(--secondary)",
        bg: "bg-(--secondary)/10",
    },
];

const WhyChooseUs = () => {
    return (
        <section id='about' className="py-10 sm:py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-(--primary)">
                        Why Choose <span className='text-(--secondary)'>QurbaniHat ?</span>
                    </h2>
                    <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
                        We understand the religious and emotional significance of Qurbani. Thats why we have built a platform that prioritizes transparency, health, and convenience.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
                        >
                            <div
                                className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 text-xl ${item.bg} ${item.color}`}
                            >
                                {item.icon}
                            </div>

                            <h4 className="text-lg font-semibold mb-2 text-(--secondary)">
                                {item.title}
                            </h4>

                            <p className="text-sm text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;