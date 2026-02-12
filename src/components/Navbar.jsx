import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'About Us', href: '/about' },
    ];

    return (
        <nav className="bg-white sticky top-0 z-50 ">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl border-b border-gray-300">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="">
                            <img src="/logo.png"
                                 alt="Limuru Fresh Dairy"
                                 className="h-12 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-12">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-gray-800 hover:text-cyan-500 transition font-spaceGrotesk font-medium text-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-cyan-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-green-900 hover:text-cyan-500 transition"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <ul className="flex flex-col space-y-4 px-4 py-6">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-gray-900 hover:text-green-600 font-medium"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}