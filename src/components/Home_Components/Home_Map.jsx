export default  function Home_Map () {
    return (
        <section className="bg-gray-600 text-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Visit Us
                    </h2>
                    <p className="text-white/90 text-lg">
                        Find directions to Limuru Dairy Farmers
                        Co-Operative Society
                    </p>
                </div>

                <div className="relative w-full h-100 md:h-125 lg:h-150 rounded-2xl overflow-hidden shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d510553.43887069233!2d36.162529!3d-1.3573712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f27b094159237%3A0xc295ecb04788dccf!2sLimuru%20Dairy%20Farmers%20Co-Operative%20Society!5e0!3m2!1sen!2ske!4v1772539316859!5m2!1sen!2ske"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-0 hover:grayscale-0 transition-all duration-300">
                        </iframe>
                </div>
            </div>
        </section>
    )
}
