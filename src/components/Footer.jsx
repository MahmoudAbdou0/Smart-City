import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const footerLinks = [
    { name: "Citizen Dashboard", path: "/dashboard" },
    { name: "Complaints & Suggestions", path: "/dashboard/complaints" },
    { name: "Smart Utilities", path: "/dashboard/utilities" },
    { name: "Notifications", path: "/dashboard/notifications" },
    { name: "User Profile", path: "/dashboard/profile" },
];

const socialLinks = [
    { icon: <Facebook size={23} strokeWidth={1.5} />, href: "#" },
    { icon: <Twitter size={23} strokeWidth={1.5} />, href: "#" },
    { icon: <Instagram size={23} strokeWidth={1.5} />, href: "#" },
    { icon: <Linkedin size={23} strokeWidth={1.5} />, href: "#" },
];

const Footer = () => {
    return (
        <footer className="border-t border-accent-light/20 bg-[#f3f3f3]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8 py-8 lg:py-12 ">

                    {/* Logo & Description */}
                    <div className="lg:col-span-1">
                        <img
                            src={logo}
                            alt="Smart City Logo"
                            className="w-32 h-32 object-contain mb-4"
                        />
                        <h3 className="text-[rgb(19,17,18)] mb-2">Smart City</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            System for Intellectual Smart City - Blending Pharaonic heritage with modern technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-8 lg:mt-10 text-start lg:text-center">
                        <h4 className="text-[rgb(19,17,18)] mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-600 hover:text-[rgb(209,169,99)] transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="mt-8 lg:mt-10 text-start lg:text-center">
                        <h4 className="text-[rgb(19,17,18)] mb-4">Services</h4>
                        <ul className="space-y-2">

                            {["Bill Payment", "Complaint Tracking", "Usage Analytics", "Profile Management"].map((el, i) => (
                                <li key={i} className="text-gray-600  text-sm">
                                    {el}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-8 lg:mt-10">
                        <h4 className="text-[rgb(19,17,18)] mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-4 text-gray-600 text-sm">
                                <MapPin className="h-4 w-4 text-[rgb(209,169,99)] mt-0.5 flex-shrink-0" />
                                <span>Cairo, Egypt</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-600 text-sm">
                                <Phone className="h-4 w-4 text-[rgb(209,169,99)] flex-shrink-0" />
                                <span>+20 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-600 text-sm">
                                <Mail className="h-4 w-4 text-[rgb(209,169,99)] flex-shrink-0" />
                                <span>info@smartcity.eg</span>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="flex gap-3 mt-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    className="w-10 h-10 rounded-lg bg-[rgb(209,169,99)]/10 flex items-center justify-center text-[rgb(209,169,99)] hover:bg-[rgb(209,169,99)]/40 smooth-transition "
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="p-4 border-t border-[rgb(209,169,99)]/50">
                    <div className="flex flex-col justify-between items-center text-xs sm:text-sm">
                        <p className="text-gray-600 text-center ">
                            © 2025 Smart City - System for Intellectual Smart City. All rights reserved.
                        </p>
                        <p className="text-gray-600  text-center  mt-2 md:mt-0">
                            Designed by{" "}
                            <a
                                href="#"
                                className="text-accent font-semibold hover:underline transition-colors"
                            >
                                Querydux
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer