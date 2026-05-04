import { FaShieldAlt, FaWeight, FaLeaf, FaUserCheck } from "react-icons/fa";

const tipsData = [
    {
        icon: <FaShieldAlt />,
        title: "Health Check",
        desc: "Ensure the animal is active, has clear eyes, and no visible injuries.",
    },
    {
        icon: <FaWeight />,
        title: "Weight Estimates",
        desc: "Estimate meat yield accurately before purchasing.",
    },
    {
        icon: <FaLeaf />,
        title: "Ethical Feeding",
        desc: "Maintain proper organic diet before sacrifice.",
    },
    {
        icon: <FaUserCheck />,
        title: "Seller Verification",
        desc: "Buy only from verified farmers for safety and trust.",
    },
];

const Tips = () => {
    return (
        <section id='tip' className="Tips py-10 sm:py-20 bg-[#1c3433] text-white">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Tips for a Blessed Qurbani
                    </h2>
                    <p className="text-stone-300 max-w-4xl mx-auto text-sm sm:text-base">
                        Everything you need to know about performing your sacrifice with professionalism and piety.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    {tipsData.map((tip, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-success/60 text-(--secondary) text-xl mb-4">
                                {tip.icon}
                            </div>

                            <h4 className="text-lg font-semibold mb-2">
                                {tip.title}
                            </h4>

                            <p className="text-stone-300 text-sm leading-relaxed">
                                {tip.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Tips;