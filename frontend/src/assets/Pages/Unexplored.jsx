import React from 'react';

const Unexplored = () => {
    return (
        <div>
            <div
                className="w-screen h-screen"
                style={{
                    backgroundImage: "url('/kunzum_pass_3.jpg')", // Use a suitable background image for unexplored landscapes
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex justify-center">
                    <div className="mt-10 w-[553px] h-[83px] shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-[#ECE9E6] to-[#fff] text-[70px] font-medium dancing-script">
                        Unexplored Himachal Pradesh
                    </div>
                </div>

                <div className="relative flex justify-center w-screen h-4/5 mt-5">
                    <div className="relative w-11/12 h-full bg-gradient-to-r from-[#DAE2F8] to-[#D6A4A4] rounded-[44px]">
                        <div className="shadow-sm text-white text-[65px] ml-10 font-light dancing-script">
                            Hidden Gems of the Himalayas
                        </div>

                        <div className="w-full h-5/6 bg-slate-100 rounded-[44px] overflow-y-scroll space-x-5 overflow-x-hidden">

                            {/* Hidden Villages */}
                            <div className="mt-5 font-[Raleway] p-5 border rounded-[44px] mr-5">
                                <span className="font-semibold">1. Hidden Villages:</span>
                                <br />
                                Himachal Pradesh is dotted with remote villages that remain untouched by mainstream tourism, preserving their traditional charm and offering a glimpse into the state's rich cultural heritage.
                                <br /><br />
                                - **Malana Village (Kullu District):** Known for its distinct culture and ancient democracy, Malana is a secluded village with breathtaking views of the Parvati Valley. Its unique customs and traditional architecture make it a fascinating destination.
                                <br />
                                - **Chitkul (Kinnaur District):** The last village on the Indo-Tibetan border, Chitkul is famous for its wooden houses, apple orchards, and serene Baspa River. Its isolation ensures a tranquil retreat for travelers.
                                <br />
                                - **Kalap (Sirmaur District):** Hidden in the dense forests of the Sirmaur district, Kalap is known for its ancient temples, terraced fields, and traditional wool weaving.
                            </div>

                            {/* Untouched Landscapes */}
                            <div className="mt-5 font-[Raleway] p-5 border rounded-[44px] mr-5">
                                <span className="font-semibold">2. Untouched Landscapes:</span>
                                <br />
                                Beyond the popular hill stations, Himachal Pradesh is home to several untouched landscapes that offer unspoiled natural beauty.
                                <br /><br />
                                - **Barot Valley (Mandi District):** A hidden paradise surrounded by dense forests and the Uhl River, Barot is perfect for trout fishing, trekking, and camping. The valley remains largely unexplored, offering peace and serenity.
                                <br />
                                - **Jibhi (Tirthan Valley):** Jibhi is a quiet hamlet with crystal-clear streams, dense cedar forests, and ancient temples. Its unspoiled environment is ideal for nature lovers seeking solitude.
                                <br />
                                - **Pangi Valley (Chamba District):** Known for its rugged terrain, Pangi Valley is a remote and less-traveled destination, offering adventurous trails, traditional villages, and untouched landscapes.
                            </div>

                            {/* Untrodden Trekking Trails */}
                            <div className="mt-5 font-[Raleway] p-5 border rounded-[44px] mr-5">
                                <span className="font-semibold">3. Untrodden Trekking Trails:</span>
                                <br />
                                Himachal Pradesh offers a variety of lesser-known trekking trails that lead to remote valleys, high-altitude passes, and pristine lakes.
                                <br /><br />
                                - **Bara Bhangal Trek:** One of the most challenging treks in Himachal, it connects Kullu with the remote village of Bara Bhangal. Trekkers cross high-altitude passes like Thamsar Pass and experience untouched landscapes.
                                <br />
                                - **Spiti to Pin Valley Trek:** This trek takes you through the isolated villages of Spiti, crossing the high-altitude Pin Pass (5,319m). It offers panoramic views and a deep cultural immersion.
                                <br />
                                - **Sainj Valley Trek:** A relatively easy yet unexplored trail in the Great Himalayan National Park, this trek offers dense forests, hidden waterfalls, and the chance to encounter wildlife in its natural habitat.
                            </div>

                            {/* Mystical Monasteries */}
                            <div className="mt-5 font-[Raleway] p-5 border rounded-[44px] mr-5">
                                <span className="font-semibold">4. Mystical Monasteries:</span>
                                <br />
                                Himachal Pradesh is known for its Buddhist monasteries, many of which are tucked away in remote areas, offering spiritual solace and architectural marvels.
                                <br /><br />
                                - **Key Monastery (Spiti Valley):** Perched atop a hill at 4,166 meters, Key Monastery is the largest monastery in Spiti and offers breathtaking views of the Spiti River.
                                <br />
                                - **Dhankar Monastery (Spiti Valley):** Located at the confluence of the Spiti and Pin Rivers, Dhankar Monastery is known for its unique architecture and ancient murals.
                                <br />
                                - **Tashigang Monastery (Lahaul and Spiti):** One of the most remote monasteries, it offers an awe-inspiring view of the rugged mountains and the vast landscape of the Lahaul region.
                            </div>

                            {/* Enchanted Lakes */}
                            <div className="mt-5 font-[Raleway] p-5 border rounded-[44px] mr-5">
                                <span className="font-semibold">5. Enchanted Lakes:</span>
                                <br />
                                Himachal Pradesh is home to many high-altitude lakes that remain relatively unexplored, offering pristine beauty and tranquility.
                                <br /><br />
                                - **Prashar Lake (Mandi District):** Surrounded by the Dhauladhar range, Prashar Lake is known for its floating island and ancient temple dedicated to Sage Prashar.
                                <br />
                                - **Chandratal Lake (Spiti Valley):** Also known as the "Moon Lake," this crescent-shaped water body is nestled at 4,300 meters and is known for its crystal-clear blue water.
                                <br />
                                - **Nako Lake (Kinnaur District):** A serene lake surrounded by willow and poplar trees, Nako Lake is perfect for meditation and reflection.
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unexplored;
