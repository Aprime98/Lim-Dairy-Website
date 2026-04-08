import {
    R_Strawberry,
    packet_milk,
    R_Vanilla,
} from '../../assets'

export default function ProductCard() {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/*Packet-Milk product*/}
            <div className={`flex flex-col items-center gap-8 md:gap-12 mb-16 md:mb-20`}>
                <div className="md:w-1/2">
                    <div className="rounded-3xl p-4 sm:p-8 flex items-center justify-center h-64 sm:h-80 md:h-96">
                        <img src={packet_milk} alt="packet milk" className="h-3/4" />
                    </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Limuru Fresh Milk
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg mb-6">
                        Wholesome, smooth milk packed fresh for dairy family nourishment
                    </p>
                </div>
            </div>

            {/*Relish Yoghurt Strawberry*/}
            <div className={`flex flex-col items-center gap-8 md:gap-12 mb-16 md:mb-20`}>
                <div className="md:w-1/2">
                    <div className="rounded-3xl p-4 sm:p-8 flex items-center justify-center h-64 sm:h-80 md:h-96">
                        <img src={R_Strawberry} alt="packet milk" className="h-3/4" />
                    </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Relish Yoghurt Strawberry
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg mb-6">
                        Creamy, smooth yoghurt blended
                        with sweet, juicy strawberry flavor __
                        pure delight in every spoonful
                    </p>
                </div>
            </div>

            {/*Relish Yoghurt Vanilla*/}
            <div className={`flex flex-col items-center gap-8 md:gap-12 mb-16 md:mb-20`}>
                <div className="md:w-1/2">
                    <div className="rounded-3xl p-4 sm:p-8 flex items-center justify-center h-64 sm:h-80 md:h-96">
                        <img src={R_Vanilla} alt="packet milk" className="h-3/4" />
                    </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Relish Yoghurt Vanilla
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg mb-6">
                        Creamy, smooth yoghurt blended
                        with sweet, juicy vanilla flavor __
                        pure delight in every spoonful
                    </p>
                </div>
            </div>
        </div>
    );
}

