import React from 'react';

const HinduismInHimachal = () => {
    return (
        <div>
            <div
                className="w-screen h-screen"
                style={{
                    backgroundImage: "url('/cult.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex justify-center">
                    <div className="mt-10 w-[1000px] shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-[#FFE53B] to-[#FF2525] text-[70px] font-medium dancing-script">
                        Hinduism in Himachal Pradesh
                    </div>
                </div>

                <div className="relative flex justify-center w-screen h-4/5 mt-5">
                    <div className="relative w-11/12 h-full bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] rounded-[44px] overflow-y-scroll">
                        {[
                            {
                                name: "Bajreshwari Temple (Kangra)",
                                description: "Bajreshwari Temple in Kangra is one of the most revered Hindu shrines dedicated to Goddess Bajreshwari. It is known for its stunning architecture and its historical significance, as it was one of the 51 Shakti Peethas. The temple was rebuilt after being destroyed in the 1905 earthquake. The temple is a place of spiritual solace and hosts several festivals, including Navaratri, which sees large numbers of devotees paying homage."
                            },
                            {
                                name: "Hidimba Devi Temple (Manali)",
                                description: "Located in the picturesque town of Manali, Hidimba Devi Temple is dedicated to Hidimba, the wife of Bhima from the Mahabharata. Surrounded by lush cedar forests, the temple stands as an architectural marvel. Built in 1553, the temple has intricate carvings and is a symbol of the rich culture and traditions of the region. It is especially visited during the Hidimba Devi festival, which celebrates the goddess's mythology."
                            },
                            {
                                name: "Jwalamukhi Temple (Kangra)",
                                description: "The Jwalamukhi Temple in Kangra is a famous shrine dedicated to Goddess Jwalamukhi, known for her fiery manifestation. The temple is built at the spot where natural flames emerge from the ground, symbolizing the goddess's power. Pilgrims visit the temple seeking blessings for prosperity and protection. The temple complex also houses several smaller shrines and is famous for its spectacular atmosphere during the Navaratri festival."
                            },
                            {
                                name: "Chamunda Devi Temple (Dharamshala)",
                                description: "Chamunda Devi Temple in Dharamshala is one of the holiest sites dedicated to Goddess Chamunda, a form of Durga. The temple sits on a hilltop, offering breathtaking views of the surrounding landscapes. Devotees flock here to seek blessings for strength and victory. The temple holds great religious significance and attracts visitors during major Hindu festivals, including the annual Chamunda Devi fair."
                            },
                            {
                                name: "Kangra Devi Temple (Kangra)",
                                description: "Kangra Devi Temple is a historical Hindu shrine dedicated to the goddess of the same name. Situated in the scenic Kangra Valley, this temple holds immense religious significance. Devotees come here to seek blessings for health, wealth, and peace. The temple's architectural beauty and serene surroundings make it a must-visit spot in Himachal Pradesh, particularly during festivals like Navaratri."
                            },
                            {
                                name: "Baijnath Temple (Baijnath)",
                                description: "Baijnath Temple, located in the town of Baijnath, is dedicated to Lord Shiva and is known for its exquisite stone architecture. The temple, built in the 13th century, is an important pilgrimage site for Hindus. The serene atmosphere and stunning views of the surrounding mountains make it a peaceful retreat for devotees. It is especially popular during Maha Shivaratri, when thousands of devotees visit the temple."
                            },
                            {
                                name: "Shri Sankat Mochan Temple (Shimla)",
                                description: "Shri Sankat Mochan Temple in Shimla is a significant religious site dedicated to Lord Hanuman. Located on the Shimla-Kullu highway, the temple offers panoramic views of the surrounding hills. Devotees visit the temple seeking relief from their troubles, as Lord Hanuman is believed to remove obstacles. The temple is a popular destination for both locals and tourists, especially during Hanuman Jayanti and other Hindu festivals."
                            },
                            {
                                name: "Raghunath Temple (Kullu)",
                                description: "Raghunath Temple in Kullu is dedicated to Lord Rama and is a significant religious and historical site in the region. The temple, which dates back to the 17th century, showcases beautiful stone architecture. Devotees come here to pay homage during festivals like Ram Navami and to seek blessings for peace and prosperity. The temple offers a serene and peaceful atmosphere for reflection and spiritual growth."
                            },
                            {
                                name: "Vashisht Temple (Manali)",
                                description: "Vashisht Temple, situated in the Vashisht village of Manali, is dedicated to Sage Vashisht. The temple is renowned for its hot springs, which are believed to have healing properties. It is an important site for spiritual seekers and those looking for a rejuvenating experience. The temple offers a unique blend of spiritual solace and natural beauty, making it a popular spot for both pilgrims and tourists."
                            },
                            {
                                name: "Sankat Mochan Temple (Solan)",
                                description: "Sankat Mochan Temple in Solan is another prominent temple dedicated to Lord Hanuman. Located amidst lush greenery, the temple attracts many devotees, especially during Hanuman Jayanti and other important Hindu festivals. The temple offers a tranquil atmosphere for prayer and meditation, making it a popular stop for tourists looking to experience the spiritual heritage of the region."
                            },
                            {
                                name: "Baba Balak Nath Temple (Bilaspur)",
                                description: "Baba Balak Nath Temple in Bilaspur is dedicated to Baba Balak Nath, a revered saint and spiritual figure. The temple, located in the hills of Himachal Pradesh, offers a peaceful atmosphere for spiritual seekers. The temple is famous for its religious rituals, including the annual fair, and it attracts devotees from various parts of India."
                            },
                            {
                                name: "Naggar Castle Temple (Naggar)",
                                description: "Naggar Castle Temple, located in the village of Naggar, is a historical temple dedicated to Lord Vishnu. The temple offers stunning views of the surrounding mountains and valleys. Its historical significance and peaceful ambiance make it a must-visit place for both devotees and tourists looking to experience the spiritual essence of Himachal Pradesh."
                            },
                            {
                                name: "Baba Bhuri Singh Temple (Chamba)",
                                description: "Baba Bhuri Singh Temple, located in Chamba, is dedicated to Baba Bhuri Singh, a local deity worshipped for his protective powers. The temple is a popular pilgrimage site and a symbol of the region’s spiritual heritage. Devotees visit the temple for blessings of protection and peace, particularly during the annual fair held in his honor."
                            },
                            {
                                name: "Naina Devi Temple (Bilaspur)",
                                description: "Naina Devi Temple, located on the banks of the Govind Sagar Lake in Bilaspur, is dedicated to Goddess Naina Devi. The temple is one of the 51 Shakti Peethas and attracts thousands of devotees every year. The temple is known for its religious significance and the scenic views of the surrounding landscape, especially during the Naina Devi fair."
                            },
                            {
                                name: "Durga Temple (Kangra)",
                                description: "Durga Temple in Kangra is dedicated to Goddess Durga and is a significant site for Hindus in the region. The temple’s architecture reflects the rich cultural heritage of Himachal Pradesh. Visitors come to the temple during the Navaratri festival, which is celebrated with much fervor. The temple offers spiritual solace and a chance to connect with the divine."
                            },
                            {
                                name: "Chintpurni Temple (Una)",
                                description: "Chintpurni Temple, located in Una, is one of the most popular temples in Himachal Pradesh. It is dedicated to Goddess Chintpurni, who is believed to fulfill the wishes of her devotees. The temple attracts thousands of pilgrims every year, especially during the Chintpurni fair. The peaceful atmosphere and spiritual aura of the temple make it a sought-after destination for both devotees and tourists."
                            },
                            {
                                name: "Mahakali Temple (Kullu)",
                                description: "Mahakali Temple in Kullu is dedicated to Goddess Kali, known for her fierce and protective nature. The temple is located on a hilltop and offers a stunning panoramic view of the Kullu Valley. Devotees visit this temple to seek blessings for strength and protection. The temple is especially visited during the annual Mahakali fair."
                            },
                            {
                                name: "Manikaran Sahib Temple (Manikaran)",
                                description: "Manikaran Sahib Temple, located in the Kullu Valley, is a significant site for both Hindus and Sikhs. The temple is famous for its hot springs, believed to have healing properties. It is dedicated to Lord Shiva and Goddess Parvati. Devotees come here to take a dip in the sacred waters and seek blessings. The spiritual ambiance and the natural beauty of the surroundings make it a popular destination."
                            },
                            {
                                name: "Shri Renuka Ji Temple (Sirmaur)",
                                description: "Shri Renuka Ji Temple, located in Sirmaur, is dedicated to Goddess Renuka, the mother of Parashurama. The temple, surrounded by picturesque lakes and hills, attracts numerous pilgrims who come to pay homage. The temple is an important site during the Renuka Fair, which is held annually. The serene location adds to the spiritual significance of the temple."
                            },
                            {
                                name: "Shiva Temple (Chail)",
                                description: "Shiva Temple in Chail is dedicated to Lord Shiva and is known for its peaceful environment. The temple, built by the Maharaja of Patiala, is located at an altitude of 2,250 meters, offering beautiful views of the surrounding landscapes. The temple is a serene retreat for devotees and a peaceful destination for those seeking solace."
                            },
                            {
                                name: "Jageshwar Temple (Jageshwar)",
                                description: "Jageshwar Temple, located in the Almora district, is a group of temples dedicated to Lord Shiva. It is an ancient pilgrimage site with over 100 temples, known for its historical and architectural significance. The temples are set amidst deodar forests, offering a tranquil environment. The Jageshwar temples are popular for their spiritual aura and natural beauty, especially during the Maha Shivaratri festival."
                            }
                        ].map((place, index) => (
                            <div key={index} className="mt-5 font-[Raleway] p-5 mx-5 bg-white border rounded-[44px] shadow">
                                <span className="font-semibold text-lg">{place.name}:</span>
                                <br />
                                {place.description}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HinduismInHimachal;
