import { Link } from "react-router-dom";
import {packet_milk, R_Strawberry} from "../../assets/index.js"

export default function Home_Products (){
    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 font-roboto">

                    {/*left text*/}
                    <div className="flex items-end">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                            Take a Look<br/>at What
                        </h2>
                        <div className="block w-16 md:w-32 h-0.5 md:h-1 bg-gray-500 -ml-8 sm:-mt-10 mb-4"></div>
                    </div>

                    {/*center circle*/}
                    <div className="relative">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-amber-400 flex items-center justify-center md:mt-24 my-6">
                                <span className="text-[16px] font-spaceGrotesk md:text-base font-semibold text-gray-900 tracking-wider">
                                  PRODUCTS
                                </span>
                        </div>
                    </div>

                    {/*Right text*/}
                    <div className="flex items-start gap-6 md:mt-48">
                        <div className="block w-16 md:w-32 h-0.5 md:h-1 bg-gray-500 mt-4"></div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-right md:text-left">
                            We Proudly<br/>Offer
                        </h2>
                    </div>
                </div>

                {/* Product 1 - Milk */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 my-16 md:my-24">
                    <div className="md:w-1/2 md:flex justify-center items-center">
                        <div className="rounded-3xl flex items-center justify-center h-50 w-50 md:h-80 md:w-80 bg-[#2FA3E5]/75 border border-gray-600">
                            <img src={packet_milk} alt="Shelf-Stable Milk" className="h-3/4"/>
                        </div>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <div className="w-60 md:w-96">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-inter">Shelf-Stable,
                                Farm-Fresh Taste</h3>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                Naturally fresh, longer-lasting enjoy rich, farm-fresh milk that stays delicious for days.
                            </p>
                            <Link to="/products">
                                <button className="border-2 border-gray-600 px-2 sm:px-4 py-1 sm:py-3 hover:bg-black hover:text-white transition font-spaceGrotesk">
                                    View more
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Product 2 - Yogurt */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                    <div className="md:w-1/2 md:flex justify-center items-center">
                        <div className="rounded-3xl flex items-center justify-center h-50 w-50 md:h-80 md:w-80 bg-[#76CC00]/75 border border-gray-600">
                            <img src={R_Strawberry} alt="Yogurt" className="max-h-full w-auto object-contain md:-mt-12 -mt-6" />
                        </div>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left md:flex justify-end">
                        <div className="w-60 md:w-96">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-inter">Wholesome Yoghurt You'll Love</h3>
                            <p className="text-gray-600 text-base sm:text-lg mb-6">
                                Smooth, creamy yoghurt made from fresh local milk naturally delicious every time.
                            </p>
                            <Link to="/products">
                                <button className="border-2 border-gray-600 px-2 sm:px-4 py-1 sm:py-3 hover:bg-black hover:text-white transition font-spaceGrotesk">
                                    View more
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}