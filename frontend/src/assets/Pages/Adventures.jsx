import React from 'react';

const Adventures = () => {
    return (
        <div>
            <div
                className="w-screen min-h-screen flex flex-col bg-gradient-to-br from-blue-500 via-teal-500 to-orange-400"
                style={{
                    backgroundImage: "url('/paragliing.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                }}
            >
                <div className="flex justify-center">
                    <h1 className="mt-12 w-[700px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-600 text-6xl font-gideon font-extrabold animate-slowFadeIn">
                        Adventures and Sports
                    </h1>
                </div>

                <div className="relative flex justify-center w-full flex-grow mt-8 px-6">
                    <div className="relative w-full max-w-10xl h-full bg-white bg-opacity-90 rounded-3xl p-10 shadow-2xl animate-slowFadeIn2 overflow-hidden mb-5">
                        <h2 className="text-5xl font-gideon font-semibold text-teal-700 mb-10 animate-slowFadeIn3">
                            Thrilling Experiences Await
                        </h2>

                        <div className="w-full h-[70vh] overflow-y-scroll rounded-2xl px-8 py-6 scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-teal-100 space-y-10">
                            {/* Trekking in Himachal */}
                            <section className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-blue-700 mb-4">
                                    Trekking in Himachal:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    Himachal Pradesh is a paradise for trekkers, with its wide variety of trails, ranging from gentle walks to challenging mountain expeditions. The state offers treks with diverse landscapes: lush green meadows, dense forests, alpine lakes, and towering snow-capped peaks.
                                </p>
                                <ul className="list-disc list-inside text-blue-700 space-y-2">
                                    <li><strong>Triund Trek (McLeod Ganj):</strong> Suitable for beginners, offering spectacular views of the Dhauladhar Range and Kangra Valley.</li>
                                    <li><strong>Hampta Pass Trek (Manali):</strong> A challenging trek connecting Kullu and Spiti Valleys with diverse landscapes.</li>
                                    <li><strong>Pin Parvati Pass Trek:</strong> One of the most challenging treks, crossing from Parvati Valley to Pin Valley.</li>
                                </ul>
                            </section>

                            {/* Paragliding in Bir Billing */}
                            <section className="bg-gradient-to-r from-teal-50 to-cyan-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-teal-700 mb-4">
                                    Paragliding in Bir Billing:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    Bir Billing is the paragliding capital of India, surrounded by picturesque valleys and snow-capped peaks. It hosts the Paragliding World Cup and attracts enthusiasts worldwide.
                                </p>
                                <ul className="list-disc list-inside text-teal-700 space-y-2">
                                    <li><strong>Takeoff from Billing:</strong> Located at 2,400 meters, offering breathtaking views and 20-30 minutes soaring experience.</li>
                                    <li><strong>Landing at Bir:</strong> A peaceful spot with Tibetan monasteries, adding cultural charm to the adventure.</li>
                                </ul>
                            </section>

                            {/* Skiing in Manali */}
                            <section className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-indigo-700 mb-4">
                                    Skiing in Manali:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    Manali and Solang Valley offer popular skiing destinations with slopes for all levels, from beginners to experts.
                                </p>
                                <ul className="list-disc list-inside text-indigo-700 space-y-2">
                                    <li><strong>Solang Valley:</strong> Famous skiing spot with activities like snowboarding and tobogganing.</li>
                                    <li><strong>Gulaba:</strong> Less crowded slopes ideal for beginners.</li>
                                    <li><strong>Rohtang Pass:</strong> Challenging slopes with stunning Himalayan views.</li>
                                </ul>
                            </section>

                            {/* River Rafting in Kullu */}
                            <section className="bg-gradient-to-r from-cyan-50 to-teal-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-cyan-700 mb-4">
                                    River Rafting in Kullu:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    The Beas River in Kullu offers thrilling rafting experiences with rapids suitable for beginners and experts.
                                </p>
                                <ul className="list-disc list-inside text-cyan-700 space-y-2">
                                    <li><strong>Beas River Rafting:</strong> 14 km stretch with Grade II to IV rapids, lasting 1.5 to 2 hours.</li>
                                    <li><strong>For Beginners and Experts:</strong> Easy stretches for families and challenging sections for thrill-seekers.</li>
                                </ul>
                            </section>

                            {/* Mountain Biking in Dharamshala */}
                            <section className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-blue-700 mb-4">
                                    Mountain Biking in Dharamshala:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    Rugged terrain and scenic beauty make Dharamshala ideal for mountain biking enthusiasts.
                                </p>
                                <ul className="list-disc list-inside text-blue-700 space-y-2">
                                    <li><strong>Dhauladhar Range Trails:</strong> Forest trails with steep climbs and thrilling descents.</li>
                                    <li><strong>Tea Garden Circuit:</strong> Biking through lush tea gardens offering natural beauty and adventure.</li>
                                </ul>
                            </section>

                            {/* Rock Climbing in Kullu */}
                            <section className="bg-gradient-to-r from-teal-50 to-cyan-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-teal-700 mb-4">
                                    Rock Climbing in Kullu:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    Kullu Valley offers varied rock climbing routes for all skill levels amidst stunning natural beauty.
                                </p>
                                <ul className="list-disc list-inside text-teal-700 space-y-2">
                                    <li><strong>Tirthan Valley:</strong> Popular for rock formations and climbing routes of varying difficulty.</li>
                                    <li><strong>Sainj Valley:</strong> Rocky cliffs providing challenging climbs for experienced climbers.</li>
                                </ul>
                            </section>

                            {/* Ice Skating in Kufri */}
                            <section className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-gideon font-bold text-cyan-700 mb-4">
                                    Ice Skating in Kufri:
                                </h3>
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    Kufri is known for its outdoor ice skating rink and other snow sports during winter months.
                                </p>
                                <ul className="list-disc list-inside text-cyan-700 space-y-2">
                                    <li><strong>Kufri Ice Skating Rink:</strong> Open December to February, offering a unique winter experience.</li>
                                    <li><strong>Snowboarding and Tobogganing:</strong> Popular snow sports alongside ice skating.</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adventures;
