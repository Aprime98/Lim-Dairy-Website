import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Location() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
            <div className="max-w-4xl mx-auto text-center">

                <div className="flex items-center justify-center mb-8">
                    <a href="/" className="">
                        <img src="/logo.png"
                             alt="Limuru Fresh Dairy"
                             className="h-16 w-auto" />
                    </a>
                </div>
                <h2 className="text-3xl font-bold mb-8">OUR LOCATION</h2>

                <p className="text-gray-200 font-inter">MAZIWA HOUSE, 4TH FLOOR</p>
                <p className="text-gray-200 font-inter">P.O. Box 8 - 00217, LIMURU</p>
                <p className="text-gray-200 mt-4 font-inter">Cell: 0713-833814</p>
                <p className="text-gray-200 font-inter"> Email: limurudairy.gmail.com</p>

                <div className="flex justify-center gap-6 mt-8 ">
                    <a href="https://www.facebook.com/limurufresh" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                        <Facebook size={23} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                        <Twitter size={23} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                        <Instagram size={23} />
                    </a>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="border-t pt-8 mt-8 text-center border-gray-600">
                <p>&copy; 2026 Limuru Dairy Farmers Co-Operative Society. All rights reserved.</p>
            </div>
        </section>
    );
}