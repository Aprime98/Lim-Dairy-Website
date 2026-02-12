import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <footer id="stores" className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="flex flex-col space-y-2 ">
                            <li>
                                <a href="/public" className="hover:text-green-500 transition">Home</a>
                                </li>
                            <Link to="/products">
                                <a className="hover:text-green-500 transition">Products</a>
                            </Link>
                            <Link to="/aboutus">
                                <a className="hover:text-green-500 transition">About Us</a>
                            </Link>
                        </ul>
                    </div>
                    {/* About */}
                    <div>
                        {/* Social Links */}
                        <div className="flex space-x-4 mt-2 justify-center md:justify-normal">
                            <a href="https://www.facebook.com/limurufresh" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                                <Facebook size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                                <Twitter size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-600 pt-8 text-center ">
                    <p>&copy; 2026 Limuru Dairy Farmers Co-Operative Society. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}