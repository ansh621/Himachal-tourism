import React from 'react';
import Footer from '../Footer';

const Florandfauna = () => {
    return (
        <div>
            <div
                className="w-screen min-h-screen flex flex-col bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"
                style={{
                    backgroundImage: "url('/IMG20210627170207.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                }}
            >
                <div className="flex justify-center">
                    <h1 className="mt-12 w-[600px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-400 to-pink-500 text-7xl font-gideon font-extrabold animate-slowFadeIn">
                        Flora and Fauna
                    </h1>
                </div>

                <div className="relative flex justify-center w-screen flex-grow mt-8 px-4">
                    <div className="relative w-full max-w-10xl h-full bg-white bg-opacity-90 rounded-3xl p-10 shadow-2xl animate-slowFadeIn2 overflow-hidden  mb-5">
                        <h2 className="text-5xl font-gideon font-semibold text-pink-600 mb-10 animate-slowFadeIn3">
                            A Biodiversity Paradise
                        </h2>

                        <div className="w-full h-[70vh] overflow-y-scroll rounded-2xl px-8 py-6 scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-pink-100 space-y-10">
                            {/* Flora Section */}
                            <section className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-pink-700 mb-4">
                                    Flora of Himachal Pradesh:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    Himachal Pradesh's flora is incredibly diverse due to its varied altitudes, climatic zones, and topography. The state hosts a broad range of plant species, many of which are found only in this region, making it one of the most biodiverse places in India.
                                </p>
                                <ul className="list-disc list-inside text-pink-700 space-y-2">
                                    <li><strong>Sal (Shorea robusta):</strong> A deciduous tree found in the foothills, known for its timber used in construction and furniture.</li>
                                    <li><strong>Teak (Tectona grandis):</strong> A hardwood tree highly valued for its timber, found in lower altitudes.</li>
                                    <li><strong>Shisham (Dalbergia Sissoo):</strong> Known for durable wood used in furniture making and carpentry.</li>
                                    <li><strong>Chilgoza Pine (Pinus gerardiana):</strong> A rare pine species at around 1,500 meters altitude, prized for its edible seeds.</li>
                                </ul>
                            </section>

                            {/* Fauna Section */}
                            <section className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-purple-700 mb-4">
                                    Fauna of Himachal Pradesh:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    The fauna of Himachal Pradesh is as diverse as its flora. The region is home to a wide variety of mammals, birds, reptiles, amphibians, and insects. Due to its geographic diversity and habitat range, the state supports a range of species, some of which are rare or endangered.
                                </p>
                                <ul className="list-disc list-inside text-purple-700 space-y-2">
                                    <li><strong>Snow Leopard (Panthera uncia):</strong> Found in high-altitude regions, an apex predator preying on Himalayan Tahr and Ibex.</li>
                                    <li><strong>Himalayan Brown Bear (Ursus arctos isabellinus):</strong> Endangered subspecies found in alpine meadows and forests.</li>
                                    <li><strong>Tibetan Antelope (Pantholops hodgsonii):</strong> Threatened by poaching, found in high-altitude deserts.</li>
                                    <li><strong>Musk Deer (Moschus spp.):</strong> Critically endangered, known for its valuable musk gland.</li>
                                </ul>
                            </section>

                            {/* Unique Ecosystems Section */}
                            <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-yellow-700 mb-4">
                                    Unique Ecosystems of Himachal Pradesh:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    Himachal Pradesh is home to diverse ecosystems, including temperate forests, alpine meadows, and high-altitude deserts, each providing unique habitats for flora and fauna.
                                </p>
                                <ul className="list-disc list-inside text-yellow-700 space-y-2">
                                    <li><strong>Great Himalayan National Park (GHNP):</strong> A UNESCO World Heritage Site with temperate forests and alpine zones, home to Snow Leopard and Himalayan Tahr.</li>
                                    <li><strong>Spiti Valley:</strong> High-altitude desert valley supporting unique flora and fauna like Snow Leopard and Tibetan Antelope.</li>
                                    <li><strong>Kangra Valley:</strong> Fertile region with subtropical and temperate climate, supporting Himalayan Monal and Indian Peafowl.</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Florandfauna;
