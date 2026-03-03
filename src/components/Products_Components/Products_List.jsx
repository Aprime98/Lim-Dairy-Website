import ProductCard from './Products_Card';
import {
    R_Strawberry,
    packet_milk,
    R_Vanilla,
} from '../../assets'

export default function ProductsList() {
    const products = [
        {
            title: "Limuru Fresh Milk",
            description: "Wholesome, smooth milk packed\nfresh for dairy family nourishment",
            imageSrc: packet_milk,
            imageAlt: "Shelf-Stable Milk",
            reverse: true
        },
        {
            title: "Relish Yoghurt Strawberry",
            description: "Creamy, smooth yoghurt blended\nwith sweet, juicy strawberry flavor __\npure delight in every spoonful",
            imageSrc: R_Strawberry,
            imageAlt: "Yogurt",
            reverse: false
        },
        {
            title: "Relish Yoghurt Vanilla",
            description: "Creamy, smooth yoghurt blended\nwith sweet, juicy vanilla flavor __\npure delight in every spoonful",
            imageSrc: R_Vanilla,
            imageAlt: "Cheese",
            reverse: true
        }
    ];

    return (
        <section id="products" className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        description={product.description}
                        imageSrc={product.imageSrc}
                        imageAlt={product.imageAlt}
                        reverse={product.reverse}
                    />
                ))}
            </div>
        </section>
    );
}