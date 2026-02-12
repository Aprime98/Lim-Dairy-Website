import {CheckCircle, Mail, MapPin, Milk, Phone, SmilePlus} from "lucide-react";

export default  function  Home_Hero(){
    return(

        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-8"
                    style={{
                        background: 'linear-gradient(90deg, #1E88E5 0%, #42A5F5 20%, #64B5F6 40%, #66BB6A 60%, #43A047 80%, #81C784 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    Limuru Dairy Farmers<br />Co-Operative Society
                </h1>
                <p className="text-medium md:text-xl mb-8 text-gray-800 max-w-3xl mx-auto">
                    Indulge in the creamy richness and natural
                    <br></br>smoothness of our dairy products, crafted
                    <br></br>with care for unmatched freshness.
                </p>
                <div className="flex flex-col items-left space-y-1 mb-12 font-poppins">
                    <div className="flex items-center space-x-3">
                        <Phone className="text-blue-500 h-[15px] w-auto" />
                        <span className="text-medium md:text-lg text-gray-800">0713-833814</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Mail className="text-red-500 h-[15px] w-auto" />
                        <span className="text-medium md:text-lg text-gray-800">limurudairy@gmail.com</span>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-gray-900 rounded-3xl px-6 py-6 md:px-12 md:py-12 inline-block w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-left">
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <CheckCircle className="text-green-500" size={24} />
                                <p className="text-2xl font-bold text-white">10,000+</p>
                            </div>
                            <p className="text-sm text-gray-300">Local Farmers Supported</p>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <Milk className="text-white" size={24} />
                                <p className="text-2xl font-bold text-white">50,000+</p>
                            </div>
                            <p className="text-sm text-gray-300">Litres Processed Daily</p>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <MapPin className="text-red-500" size={24} />
                                <p className="text-2xl font-bold text-white">30+</p>
                            </div>
                            <p className="text-sm text-gray-300">Distribution Points</p>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <SmilePlus className="text-yellow-500" size={24} />
                                <p className="text-2xl font-bold text-white">100,000+</p>
                            </div>
                            <p className="text-sm text-gray-300">Happy Consumers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
