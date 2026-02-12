import { Phone, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl/16 md:text-6xl/18 font-bold text-gray-900 mb-8 font-fairDisplay">
                    LIMURU DAIRY <br></br><span className="text-green-500">STORY</span>
                </h1>

                <p className="text-lg text-gray-800 mb-12 font-mont">
                    From humble beginnings to <br />
                    trusted dairy, rooted in community <br />
                    values.
                </p>

                <div className="flex flex-col items-left space-y-1 font-poppins">
                    <div className="flex items-center space-x-3">
                        <Phone className="text-blue-500 h-[15px] w-auto" />
                        <span className="text-medium md:text-lg text-gray-800">0713-833814</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Mail className="text-red-500 h-[15px] w-auto" />
                        <span className="text-medium md:text-lg text-gray-800">limurudairy@gmail.com</span>
                    </div>
                </div>
            </div>
        </section>
    );
}