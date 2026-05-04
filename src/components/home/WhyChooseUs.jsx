import { FaCheckCircle, FaHeart, FaHandshake } from "react-icons/fa";

const features = [
    {
        icon: <FaCheckCircle />,
        title: "Premium Quality",
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
        title: "Direct from Farmers",
        desc: "No middlemen. Fair prices for buyers and better earnings for farmers.",
        color: "text-(--primary)",
        bg: "bg-(--primary)/10",
    },
];

const WhyChooseUs = () => {
    return (
        <section id='about' className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-(--primary)">
                        Why Choose QurbaniHat
                    </h2>
                    <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
                        Redefining the livestock marketplace with quality and trust.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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