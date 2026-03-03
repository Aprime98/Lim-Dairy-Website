import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import {Link} from 'react-router-dom';


export default function Footer() {
    return (
        <footer id="stores" className="bg-dairyBlue/75 text-white py-12">
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
                            <Link to="/about">
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

                {/*<div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">*/}
                {/*    <iframe*/}
                {/*        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d510553.43887069233!2d36.162529!3d-1.3573712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f27b094159237%3A0xc295ecb04788dccf!2sLimuru%20Dairy%20Farmers%20Co-Operative%20Society!5e0!3m2!1sen!2ske!4v1772011214372!5m2!1sen!2ske"*/}
                {/*        width="100%"*/}
                {/*        height="100%"*/}
                {/*        style={{border:0}}*/}
                {/*        allowFullScreen=""*/}
                {/*        loading="lazy"*/}
                {/*        referrerPolicy="no-referrer-when-downgrade">*/}
                {/*    </iframe>*/}
                {/*</div>*/}

                <div className="border-t border-gray-600 pt-8 text-center ">
                    <p>&copy; 2026 Limuru Dairy Farmers Co-Operative Society. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}