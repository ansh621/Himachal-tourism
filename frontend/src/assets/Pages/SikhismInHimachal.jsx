import React from 'react';

const SikhismInHimachal = () => {
    return (
        <div>
            <div
                className="w-screen h-screen"
                style={{
                    backgroundImage: "url('/mountainnew.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex justify-center">
                    <div className="mt-10 w-[900px] shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-[#FFE53B] to-[#FF2525] text-[70px] font-medium dancing-script">
                        Sikhism in Himachal Pradesh
                    </div>
                </div>

                <div className="relative flex justify-center w-screen h-4/5 mt-5">
                    <div className="relative w-11/12 h-full bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] rounded-[44px] overflow-y-scroll">
                        {[
                            {
                                name: "Sri Anandpur Sahib (Anandpur)",
                                description: "Sri Anandpur Sahib, located in Anandpur, is one of the holiest sites for Sikhs. It was founded by Guru Tegh Bahadur and is famous for the Takht Sri Keshgarh Sahib, a prominent Gurudwara. The site is known for its historical significance, especially the formation of Khalsa. Pilgrims from around the world visit the gurudwara during the Hola Mohalla festival to partake in religious rituals, processions, and community celebrations."
                            },
                            {
                                name: "Guru Nanak Dev Ji Gurudwara (Dharamshala)",
                                description: "Guru Nanak Dev Ji Gurudwara in Dharamshala is an important Sikh place of worship. It is dedicated to Guru Nanak, the founder of Sikhism, and serves as a place for devotees to gather, pray, and participate in the community’s spiritual practices. The gurudwara is also a hub for social work, providing food and shelter to the needy."
                            },
                            {
                                name: "Gurudwara Jagsi (Bilaspur)",
                                description: "Gurudwara Jagsi in Bilaspur is an important Sikh shrine that holds great significance for local Sikhs. The gurudwara is located in a serene environment and offers spiritual solace to visitors. It is known for its peaceful surroundings and is a popular destination for pilgrims who come to pay their respects and participate in the prayers."
                            },
                            {
                                name: "Gurudwara Sri Paonta Sahib (Paonta Sahib)",
                                description: "Gurudwara Sri Paonta Sahib, situated on the banks of the Yamuna River, is an important Sikh pilgrimage site. This gurudwara is associated with Guru Gobind Singh Ji, the tenth Sikh Guru. The site is revered for its historical significance, as Guru Gobind Singh Ji spent several years here. The gurudwara attracts devotees from around the world, especially during the festival of Baisakhi."
                            },
                            {
                                name: "Gurudwara Chintpurni Sahib (Chintpurni)",
                                description: "Gurudwara Chintpurni Sahib in Chintpurni is dedicated to the worship of Guru Nanak Dev Ji. The gurudwara is a peaceful place of meditation and prayer, attracting Sikh pilgrims to seek blessings. It is an ideal place for spiritual reflection, and its beautiful setting makes it a serene spot for visitors."
                            },
                            {
                                name: "Gurudwara Sri Gurdwara Sangrana Sahib (Kullu)",
                                description: "Sri Gurdwara Sangrana Sahib is located in the Kullu Valley and is dedicated to Guru Nanak. It is an important spiritual destination for Sikhs in the region. The gurudwara is known for its peaceful environment and beautiful surroundings, offering a space for devotees to connect with their faith. The location also offers a serene experience for travelers seeking spiritual solace."
                            },
                            {
                                name: "Gurudwara Sri Guru Singh Sabha (Solan)",
                                description: "Gurudwara Sri Guru Singh Sabha in Solan is an important place of worship for Sikhs in the region. The gurudwara is known for its community service and regular religious events. It is a central hub for spiritual teachings, meditation, and prayer. Devotees come to this gurudwara to experience peace and partake in the langar (community kitchen) services."
                            },
                            {
                                name: "Gurudwara Sri Gurudwara Sahib (Hamirpur)",
                                description: "Gurudwara Sahib in Hamirpur is a place of spiritual reflection and prayer. Located in the heart of the town, it serves as a place of worship for local Sikhs and visitors. The gurudwara is peaceful and hosts regular religious ceremonies and celebrations, particularly during Guru Nanak Dev Ji’s birthday."
                            },
                            {
                                name: "Gurudwara Sri Guru Tegh Bahadur Sahib (Mandi)",
                                description: "Gurudwara Sri Guru Tegh Bahadur Sahib, located in Mandi, is dedicated to Guru Tegh Bahadur, the ninth Sikh Guru. It is an important site for Sikh pilgrims, offering a place of worship, meditation, and reflection. The gurudwara is known for its calm atmosphere and spiritual ambiance, making it a popular destination."
                            },
                            {
                                name: "Gurudwara Dera Baba Nanak (Nurpur)",
                                description: "Gurudwara Dera Baba Nanak is located in Nurpur and is an important site for Sikhs in the region. The gurudwara is revered for its historical significance and serves as a place for spiritual gathering, prayer, and community service. The peaceful setting of the gurudwara attracts many devotees, especially during religious festivals."
                            },
                            {
                                name: "Gurudwara Rewalsar Sahib (Mandi)",
                                description: "Gurudwara Rewalsar Sahib in Mandi is dedicated to Guru Gobind Singh Ji. Located on the banks of the Rewalsar Lake, this gurudwara is not only a spiritual site but also a scenic location. It is a place for meditation, prayer, and connection with the divine. The site also attracts pilgrims during various festivals, particularly the birthday of Guru Gobind Singh Ji."
                            },
                            {
                                name: "Gurudwara Nanak Ji (Chamba)",
                                description: "Gurudwara Nanak Ji in Chamba is dedicated to Guru Nanak, the founder of Sikhism. The gurudwara serves as an important spiritual center for locals and visitors alike. It is a place of prayer, meditation, and social service. The beautiful surrounding hills and tranquil environment make it a peaceful place for contemplation."
                            },
                            {
                                name: "Gurudwara Sri Guru Nanak Dev Ji (Palampur)",
                                description: "Located in the town of Palampur, Gurudwara Sri Guru Nanak Dev Ji is a major Sikh pilgrimage site. The gurudwara is known for its role in promoting Sikh teachings, meditation, and prayer. The serene surroundings and the warmth of the local community make it an ideal spot for spiritual reflection."
                            },
                            {
                                name: "Gurudwara Guru Ka Mahal (Bhangrotu)",
                                description: "Gurudwara Guru Ka Mahal, situated in Bhangrotu, is a beautiful gurudwara surrounded by lush green fields and hills. The gurudwara is dedicated to Guru Nanak and offers a peaceful environment for prayer and meditation. It is a perfect place for visitors to experience Sikh spiritual practices in a tranquil setting."
                            },
                            {
                                name: "Gurudwara Sri Guru Singh Sabha (Kullu)",
                                description: "Gurudwara Sri Guru Singh Sabha in Kullu serves as a major center for Sikh worship and community service. The gurudwara hosts a variety of religious and cultural events, including prayers, processions, and langar services. It is a place where Sikhs come to find peace and devotion while also engaging in social activities."
                            },
                            {
                                name: "Gurudwara Guru Hargobind Sahib (Kangra)",
                                description: "Gurudwara Guru Hargobind Sahib, located in the Kangra district, is dedicated to Guru Hargobind Singh, the sixth Guru of Sikhism. The gurudwara is an important site for Sikhs in the region and provides a peaceful space for prayer, reflection, and meditation. It is also a place of cultural significance, where visitors can learn about Sikh traditions."
                            },
                            {
                                name: "Gurudwara Sri Guru Nanak Ji (Bilaspur)",
                                description: "Located in Bilaspur, Gurudwara Sri Guru Nanak Ji is an important pilgrimage destination for Sikhs. The gurudwara is revered for its community service and regular religious programs. Visitors to this gurudwara often find peace and spiritual guidance through prayer and participation in the langar service."
                            },
                            {
                                name: "Gurudwara Sri Guru Harkrishan Sahib (Una)",
                                description: "Gurudwara Sri Guru Harkrishan Sahib in Una is a revered Sikh shrine that holds great importance for the local Sikh community. It is dedicated to Guru Harkrishan Sahib, who is revered for his teachings of humility, service, and love. The gurudwara is a peaceful place for prayer and reflection, with regular ceremonies and community events."
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

export default SikhismInHimachal;
