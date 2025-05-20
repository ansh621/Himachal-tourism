import React from 'react';

const HinduismInHimachal = () => {
    return (
        <div className="min-h-screen w-screen p-8 pt-32 bg-cover" style={{ backgroundImage: "url('/cult.jpg')" }}>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFE53B] to-[#FF2525] font-medium dancing-script text-center">
                    Hinduism in Himachal Pradesh
                </h1>
                <p className="mt-6 max-w-4xl text-center text-lg text-gray-800">
                    Himachal Pradesh, the land of gods, is home to numerous sacred Hindu temples nestled in the serene valleys and majestic mountains. These ancient temples not only showcase the architectural brilliance of the past but also serve as vibrant centers of spirituality, attracting devotees from all over the world.
                </p>
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-2 md:grid-cols-1">
                {[{
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
                }].map((place, index) => (
                    <div key={index} className="bg-white shadow-xl rounded-[40px] opacity-85 p-6 border hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                        <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-2">{place.name}</h2>
                        <p className="text-gray-700 text-base leading-relaxed">{place.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HinduismInHimachal;
