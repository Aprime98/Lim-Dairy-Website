import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {packet_milk, R_Strawberry} from "../../assets/index.js"

export default function ProductCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const products = [
        {
            id: 1,
            name: "Fresh Milk",
            image: packet_milk,
            description: "Premium quality fresh milk"
        },
        {
            id: 2,
            name: "Yogurt",
            image: R_Strawberry,
            description: "Creamy and delicious yogurt"
        },
        {
            id: 3,
            name: "Cheese",
            image: packet_milk,
            description: "Artisan cheese selection"
        },
        {
            id: 4,
            name: "Butter",
            image: R_Strawberry,
            description: "Rich farm-fresh butter"
        },
        {
            id: 5,
            name: "Cream",
            image: R_Strawberry,
            description: "Pure dairy cream"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="bg-linear-to-b from-white to-gray-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Carousel Container */}
                <div className="relative">
                    {/* Main Carousel */}
                    <div className="overflow-hidden rounded-3xl">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {products.map((product) => (
                                <div key={product.id} className="min-w-full px-2">
                                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                        <div className="grid md:grid-cols-2 gap-8 items-center">
                                            {/* Image Side */}
                                            <div className="h-64 md:h-125 bg-linear-to-br from-blue-100 to-dairyBlue/75">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            {/* Content Side */}
                                            <div className="p-8 md:p-12">
                                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                                    {product.name}
                                                </h3>
                                                <p className="text-gray-600 text-lg mb-8">
                                                    {product.description}
                                                </p>
                                                <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-900" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-900" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                    currentIndex === index
                                        ? 'w-8 bg-amber-400'
                                        : 'w-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Optional: Product Grid Preview */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
                    {products.map((product, index) => (
                        <button
                            key={product.id}
                            onClick={() => goToSlide(index)}
                            className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                                currentIndex === index
                                    ? 'ring-4 ring-amber-400 scale-105'
                                    : 'opacity-60 hover:opacity-100'
                            }`}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-3">
                                <span className="text-white text-sm font-semibold">
                                    {product.name}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}