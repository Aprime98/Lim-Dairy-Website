export default function ProductsHero() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl/14 md:text-6xl/20 font-bold font-fairDisplay">
                      <span className="text-black">
                        Discover naturally made<br />
                        dairy products,
                        <span className="rounded-full bg-blue-500 text-white px-4 py-1 mx-2">healthy</span>,
                        <br />
                        <span className="rounded-full bg-green-500 text-white px-4 py-1 mx-2">always</span>
                        delicious
                      </span>
                    <br />
                </h1>

                <p className="text-lg md:text-xxl text-bold mb-8 text-gray-800 max-w-3xl mx-auto mt-16 md:mt-20 font-mont">
                    Our dairy products are crafted with care using fresh<br />
                    natural ingredients sourced from local farms. Every sip<br />
                    and bite delivers wholesome nutrition and rich, delicious<br />
                    flavor you can trust.
                </p>
            </div>
        </section>
    );
}