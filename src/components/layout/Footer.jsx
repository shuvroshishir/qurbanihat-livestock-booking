import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-(--primary) text-white/80">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">

                    {/* Logo & About */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold text-white">
                            QurbaniHat
                        </Link>

                        <p className="text-sm leading-relaxed text-white/70">
                            Premium livestock booking platform for your Qurbani needs.
                            We ensure healthy animals and hassle-free delivery.
                        </p>

                        <div className="flex space-x-4 text-lg">
                            <a href="#" className="hover:text-tertiary hover:scale-110 transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="hover:text-tertiary hover:scale-110 transition">
                                <FaTwitter />
                            </a>
                            <a href="#" className="hover:text-tertiary hover:scale-110 transition">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-tertiary">Home</Link></li>
                            <li><Link href="/animals" className="hover:text-tertiary">All Animals</Link></li>
                            <li><Link href="#lip" className="hover:text-tertiary">Qurbani Tips</Link></li>
                            <li><Link href="/about" className="hover:text-tertiary">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <MdLocationOn className="text-tertiary text-lg" />
                                <span>Sector 10, Uttara, Dhaka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MdPhone className="text-tertiary text-lg" />
                                <span>+880 1234 567 890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MdEmail className="text-tertiary text-lg" />
                                <span>info@qurbanihat.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
                        <p className="text-sm mb-4 text-white/70">
                            Subscribe for latest stock updates.
                        </p>

                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full rounded-l-lg bg-white/10 px-4 py-2 text-sm focus:ring-1 focus:ring-tertiary"
                            />
                            <button className="rounded-r-lg bg-(--secondary) px-4 py-2 text-sm font-medium text-white hover:opacity-90">
                                Join
                            </button>
                        </div>
                    </div>

                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/70">
                    <p>&copy; QurbaniHat. All rights reserved by Shishir.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;