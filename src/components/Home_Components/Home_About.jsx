import {Link} from "react-router-dom";

export default  function Home_About (){
    return(
        <section className="bg-gray-900 text-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <p className="text-sm md:text-lg mb-4 flex items-center">
                        <span className="text-yellow-600 mr-2">↳</span> About Us
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold font-roboto mb-12">
                        <span className="text-white">From </span>
                        <span className="bg-yellow-600 text-black px-4 py-1 rounded-full inline-block">Farm</span>
                        <br />
                        <span className="text-white">to Your Table</span>
                    </h2>
                </div>

                <div className="space-y-0 mb-12">
                    <div className="border-t border-gray-400 py-6 grid md:grid-cols-2 gap-4">
                        <p className="text-[12px] md:text-lg font-inter">Only fresh, additive-free ingredients used.</p>
                        <h3 className="text-2xl md:text-3xl font-semibold font-roboto">Pure, Natural Ingredients</h3>
                    </div>

                    <div className="border-t border-gray-400 py-6 grid md:grid-cols-2 gap-4">
                        <p className="text-[12px] md:text-lg font-inter">Traditional methods, modern quality standards.</p>
                        <h3 className="text-2xl md:text-3xl font-semibold font-roboto">Crafted with Care</h3>
                    </div>

                    <div className="border-t border-gray-400 py-6 grid md:grid-cols-2 gap-4">
                        <p className="text-[12px] md:text-lg font-inter">We support farmers and environment.</p>
                        <h3 className="text-2xl md:text-3xl font-semibold font-roboto">Community and Sustainability</h3>
                    </div>
                    <div className="border-t border-gray-400"></div>
                </div>


                <div className="flex flex-col ">

                  {/*<span*/}
                  {/*    className="*/}
                  {/*    text-7xl*/}
                  {/*    mb-4*/}
                  {/*    animate-[megaGlowDown_1.6s_ease-in-out_infinite]*/}
                  {/*  "*/}
                  {/*    style={{ animationName: "megaGlowDown" }}*/}
                  {/*>*/}
                  {/*  👇*/}
                  {/*</span>*/}

                    {/* READ MORE BUTTON CENTERED */}
                    <Link to="/about">
                        <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-2 md:px-4 py-1 md:py-2 transition inline-flex items-center md:tracking-wide font-spaceGrotesk">
                            Read more <span className="ml-2 text-2xl font-extrasbold">→</span>
                        </button>
                    </Link>

                    {/* KEYFRAMES */}
                    <style>{`
                    @keyframes megaGlowDown {
                      0% {
                        opacity: 0.4;
                        transform: translateY(0);
                        filter:
                          drop-shadow(0 0 6px #fff)
                          drop-shadow(0 0 14px #ffe066)
                          drop-shadow(0 0 26px #ffd43b)
                          drop-shadow(0 0 40px #facc15);
                      }
                      50% {
                        opacity: 1;
                        transform: translateY(18px); /* Bigger downward bounce */
                        filter:
                          drop-shadow(0 0 12px #fff)
                          drop-shadow(0 0 26px #ffe066)
                          drop-shadow(0 0 50px #ffd43b)
                          drop-shadow(0 0 90px #facc15)
                          drop-shadow(0 0 140px #facc15);
                      }
                      100% {
                        opacity: 0.4;
                        transform: translateY(0);
                        filter:
                          drop-shadow(0 0 6px #fff)
                          drop-shadow(0 0 14px #ffe066)
                          drop-shadow(0 0 26px #ffd43b)
                          drop-shadow(0 0 40px #facc15);
                      }
                    }
                  `}</style>
                </div>


            </div>
        </section>
    )
}