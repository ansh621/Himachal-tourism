import React from 'react';

const ChristianityInHimachal = () => {
    return (
        <div>
            <div
                className=" relative w-screen h-screen"
                style={{
                    backgroundImage: "url('/christ-church-shimla2.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex justify-center">
                    <div className="mt-10 w-[900px] shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-[#FFE53B] to-[#FF2525] text-[70px] font-medium dancing-script">
                        Christianity in Himachal Pradesh
                    </div>
                </div>

                <div className="relative flex justify-center w-screen h-4/5 mt-5">
                    <div className="relative w-11/12 h-full bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] rounded-[44px] overflow-y-scroll">
                        {[
                            {
                                name: "St. John's Church (Shimla)",
                                description: "St. John's Church in Shimla, built in 1857, is one of the oldest churches in Himachal Pradesh. It is known for its beautiful neo-gothic architecture and serene ambiance. The church is located on the Ridge, offering a scenic view of Shimla's landscape. Inside, visitors can see stunning stained glass windows and a peaceful environment for prayer and reflection. St. John's Church is an important symbol of Christianity in Shimla and attracts both devotees and tourists alike."
                            },
                            {
                                name: "Christ Church (Shimla)",
                                description: "Christ Church in Shimla is one of the oldest churches in North India. Built in 1857, this church is an example of neo-gothic architecture and is situated on the Ridge. The church has a beautiful set of stained-glass windows that depict scenes from the life of Christ. It is a major landmark in Shimla and is known for its peaceful atmosphere and historical significance. Christ Church attracts tourists who come to admire its architecture and attend the regular Sunday services."
                            },
                            {
                                name: "St. Andrew's Church (Shimla)",
                                description: "St. Andrew's Church, built in 1844, is another prominent Christian site in Shimla. The church is known for its impressive architecture and tranquil surroundings. Situated near the Shimla Mall Road, it is a significant place for Christian worship and is known for its peaceful ambiance. The church’s large stained-glass windows and tall spires make it a striking landmark. It hosts regular services and is open to visitors looking to explore Shimla’s colonial past and Christian heritage."
                            },
                            {
                                name: "Sacred Heart Cathedral (Chandigarh)",
                                description: "The Sacred Heart Cathedral in Chandigarh is a beautiful example of modern church architecture. Built in 1955, it features stunning stained-glass windows and a spacious interior. The cathedral is a place of worship and reflection for Christians in Chandigarh and visitors. Its tranquil atmosphere, surrounded by greenery, makes it a peaceful place for prayer. Sacred Heart Cathedral also hosts events, including Christmas and Easter services, drawing in worshippers and tourists who are looking for a place to connect spiritually."
                            },
                            {
                                name: "St. Mary's Church (Kullu)",
                                description: "St. Mary's Church in Kullu is a lovely church nestled in the heart of the valley. Built during the British era, this church has a charming colonial architecture. It stands as a testament to the Christian influence in the region. The church’s serene surroundings, with tall pine trees and a peaceful environment, provide a perfect setting for prayer and reflection. St. Mary's Church is a symbol of peace and spirituality and is a popular site for both tourists and locals."
                            },
                            {
                                name: "St. Joseph's Church (Manali)",
                                description: "St. Joseph’s Church in Manali is a peaceful and historical place of worship. Built in 1850, this church is an example of colonial architecture. It is situated in a picturesque location, surrounded by the scenic beauty of the Manali hills. The church is known for its serene ambiance and spiritual significance. It is a popular stop for tourists and is especially visited during Christmas and Easter services. St. Joseph’s Church offers a calm environment for reflection and prayer."
                            },
                            {
                                name: "Church of St. Luke (Dalhousie)",
                                description: "The Church of St. Luke in Dalhousie is a beautiful 19th-century church known for its historic significance and scenic location. Situated amidst the hills, this church offers a peaceful environment for prayer and meditation. The church is built in a Victorian style with wooden interiors and stained-glass windows. It is a popular tourist spot and a significant place of worship for Christians visiting Dalhousie. The church offers a tranquil setting with panoramic views of the surrounding mountains."
                            },
                            {
                                name: "St. Paul's Church (Chamba)",
                                description: "St. Paul’s Church, built in the 19th century, is located in the picturesque town of Chamba. The church is an architectural gem with stained-glass windows and a serene atmosphere. It is a significant site for Christian worship and holds historical value. The church is situated near the famous Chamba Chowgan, making it an easy landmark for tourists to visit. St. Paul's Church offers a peaceful place for prayer and is often visited by both locals and tourists looking for a spiritual experience."
                            },
                            {
                                name: "Church of Christ (Kullu)",
                                description: "The Church of Christ in Kullu is a peaceful and serene church that is known for its beautiful surroundings and tranquil environment. Built in a simple yet beautiful architectural style, the church serves as a place of worship for locals and tourists alike. The church’s interior features elegant wooden beams and simple yet elegant decor. Surrounded by tall pine trees and the lush green valley, the Church of Christ is a perfect place for reflection and prayer in Kullu."
                            },
                            {
                                name: "St. Xavier's Church (Dharamshala)",
                                description: "St. Xavier's Church in Dharamshala is a beautiful example of modern church architecture. It has a peaceful and serene environment that attracts both locals and tourists. The church is an important part of the Christian community in Dharamshala and hosts regular services, including special services for Christmas and Easter. Its quiet ambiance makes it an ideal place for spiritual reflection and prayer. The church is also known for its community outreach programs and religious activities."
                            },
                            // Add 10 more entries here with similar structure
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

export default ChristianityInHimachal;
