import React from 'react';

const Heritage = () => {
    return (
        <div>
            <div
                className="w-screen min-h-screen flex flex-col bg-gradient-to-br from-[#283048] via-[#859398] to-[#A9B0B3]"
                style={{
                    backgroundImage: "url('/churdhar.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                }}
            >
                <div className="flex justify-center">
                    <h1 className="mt-12 w-[600px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600 text-5xl font-gideon font-extrabold animate-slowFadeIn">
                        Heritage of Himachal
                    </h1>
                </div>

                <div className="relative flex justify-center w-full flex-grow mt-8 px-6">
                    <div className="relative w-full max-w-8xl h-full bg-white bg-opacity-90 rounded-3xl p-10 shadow-2xl animate-slowFadeIn2 overflow-hidden">
                        <h2 className="text-5xl font-gideon font-semibold text-red-700 mb-10 animate-slowFadeIn3">
                            Rich Heritage
                        </h2>

                        <div className="w-full h-[70vh] overflow-y-scroll rounded-2xl px-8 py-6 scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-red-100 space-y-10">
                            {/* Historical Temples */}
                            <section className="bg-gradient-to-r from-yellow-50 to-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-yellow-700 mb-4">
                                    Historical Temples:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    Himachal Pradesh is home to some of India’s oldest and most revered temples, blending ancient Hindu and Buddhist architectural styles. These temples not only serve as places of worship but also as repositories of local art, culture, and history. The Raghunath Temple in Kullu is one of the most significant religious sites in the region.
                                </p>
                            </section>

                            {/* Forts and Palaces */}
                            <section className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-red-700 mb-4">
                                    Forts and Palaces:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    Himachal Pradesh is home to many forts and palaces that speak volumes about the history of its rulers and their military prowess. The Kangra Fort, located in the Kangra valley, is one of the oldest forts in India.
                                </p>
                            </section>

                            {/* Traditional Handicrafts */}
                            <section className="bg-gradient-to-r from-orange-50 to-yellow-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-orange-700 mb-4">
                                    Traditional Handicrafts:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    Himachal Pradesh is renowned for its traditional handicrafts, which are vital expressions of the cultural and artistic heritage of the region. One of the most famous handicrafts is the Chamba Rumal, a hand-embroidered cloth that tells mythological stories or depicts scenes from local folklore.
                                </p>
                            </section>

                            {/* Monasteries */}
                            <section className="bg-gradient-to-r from-yellow-50 to-red-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-yellow-800 mb-4">
                                    Monasteries:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    Himachal Pradesh, especially in its northern regions, is home to several ancient Tibetan Buddhist monasteries that have played a crucial role in preserving Buddhist culture and traditions. The Key Monastery, situated at an altitude of 4,166 meters in the Spiti Valley, is one of the most significant monasteries in the region.
                                </p>
                            </section>

                            {/* Folk Art and Dance */}
                            <section className="bg-gradient-to-r from-red-50 to-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-red-700 mb-4">
                                    Folk Art and Dance:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    The folk art and dances of Himachal Pradesh are an important part of the region’s cultural identity and heritage. Every community in the state has its own unique folk dances and songs that are performed during festivals, marriages, and other important occasions.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heritage;
