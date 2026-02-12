import {group_photo,
    history_photo} from "../../assets"

export default function Gallery() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 ">
            <div className="max-w-6xl mx-auto">

                <div className="flex items-center gap-2 mb-8">
                    <span className="text-yellow-600 -mt-2 mr-1 text-3xl font-medium">↳</span>
                    <h2 className="text-3xl font-bold text-white font-mont">
                        Gallery</h2>
                </div>

                <div className="relative max-w-2xl mx-auto">
                    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg relative mr-20 z-10">
                        <div className="aspect-4/3 flex items-center justify-center">
                            <img src={history_photo} className="object-contain" alt="history_photo"/>
                        </div>
                    </div>

                    <div className="bg-gray-300 rounded-lg overflow-hidden shadow-2xl relative -mt-20 ml-40 z-20">
                        <div className="aspect-4/3 flex items-right justify-right">
                            <img src={group_photo} className="object-contain" alt="group_photo"/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}