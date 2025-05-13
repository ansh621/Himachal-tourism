import React from 'react';
import Footer from '../Footer';

const Florandfauna = () => {
    return (
        <div>
            <div
                className="w-screen h-screen"
                style={{
                    backgroundImage: "url('/IMG20210627170207.jpg')", // Use a suitable image for flora and fauna
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="flex justify-center">
                    <div className="mt-10 w-[553px] h-[83px] shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-[#ECE9E6] to-[#fff] text-[70px] font-medium dancing-script">
                        Flora and Fauna 
                    </div>
                </div>

                <div className="relative flex justify-center w-screen h-4/5 mt-5">
                    <div className="relative w-11/12 h-full bg-gradient-to-r from-[#DAE2F8] to-[#D6A4A4] rounded-[44px]">
                        <div className="shadow-sm text-white text-[65px] ml-10 font-light dancing-script">
                            A Biodiversity Paradise
                        </div>

                        <div className="w-full h-5/6 bg-slate-100 rounded-[44px] overflow-y-scroll space-x-5 overflow-x-hidden">

                            {/* Flora in Himachal Pradesh */}
                            <div className="mt-5 font-[Raleway] p-5 border rounded-[44px] mr-5">
                                <span className="font-semibold">Flora of Himachal Pradesh:</span>
                                <br />
                                Himachal Pradesh's flora is incredibly diverse due to its varied altitudes, climatic zones, and topography. The state hosts a broad range of plant species, many of which are found only in this region, making it one of the most biodiverse places in India.

                                <br /><br />
                                - **Tropical and Subtropical Flora (Below 1,500m):**
                                  The foothills and lower valleys of Himachal Pradesh, with their warm climate and rich soil, feature dense forests of tropical and subtropical species.
                                  - **Sal (Shorea robusta):** A deciduous tree that is found in large numbers in the foothills, known for its timber used in construction and furniture.
                                  - **Teak (Tectona grandis):** A species of hardwood tree, highly valued for its timber, found in lower altitudes. 
                                  - **Shisham (Dalbergia Sissoo):** Known for its durable wood, used in furniture making and carpentry.
                                  - **Chilgoza Pine (Pinus gerardiana):** A rare species of pine found at altitudes around 1,500 meters, known for its edible seeds (Chilgoza nuts), which are highly nutritious and prized in local cuisines.
                                  <br />
                                  The tropical flora also supports a range of medicinal plants such as **Hibiscus**, **Bamboo**, and **Jujube** (*Ziziphus mauritiana*).
                                  <br /><br />
                                - **Temperate Flora (1,500m to 3,000m):**
                                  As you ascend, the vegetation shifts towards temperate forests that are home to a variety of trees and shrubs.
                                  - **Oak (Quercus leucotrichophora and Quercus floribunda):** Dominating temperate forests, these oak species provide habitat for a range of wildlife.
                                  - **Pine Trees (Pinus wallichiana and Pinus roxburghii):** These pines are significant to the region’s forest composition, often found interspersed with oak.
                                  - **Rhododendrons (Rhododendron arboreum):** Known for their spectacular red flowers, these are found in the temperate and sub-alpine zones.
                                  <br />
                                  Medicinal plants in the temperate zone include **Aconitum** (used in traditional medicine for its analgesic properties) and **Valerian** (*Valeriana wallichii*).
                                  <br /><br />
                                - **Sub-alpine and Alpine Flora (Above 3,000m):**
                                  At higher elevations, the flora of Himachal Pradesh transitions into alpine meadows and coniferous forests. 
                                  - **Himalayan Blue Poppy (Meconopsis grandis):** One of the rarest and most iconic flowers, the blue poppy blooms at altitudes above 3,500 meters, standing out for its vibrant blue color.
                                  - **Primula species:** These wildflowers grow in alpine meadows, contributing to the stunning scenery of the high Himalayas.
                                  - **Gentiana species:** Known for their deep blue or purple flowers, these plants are typically found in alpine environments and are highly valued for their medicinal properties.
                                  - **Alpine grasses:** Species such as **Stipa** and **Kochia** are adapted to the cold and windy conditions of alpine meadows and are critical in preventing soil erosion.
                                  <br />
                                  Rare and endemic species such as **Snow Lotus** and **Juniper** thrive in the harsh conditions at the highest elevations.
                                </div>

                            {/* Fauna in Himachal Pradesh */}
                            <div className="mt-5 font-[Raleway] p-5 border rounded-[44px] mr-5">
                                <span className="font-semibold">Fauna of Himachal Pradesh:</span>
                                <br />
                                The fauna of Himachal Pradesh is as diverse as its flora. The region is home to a wide variety of mammals, birds, reptiles, amphibians, and insects. Due to its geographic diversity and habitat range, the state supports a range of species, some of which are rare or endangered.

                                <br /><br />
                                - **Large Mammals:**
                                  - **Snow Leopard (Panthera uncia):** The elusive snow leopard is found in the high-altitude regions of Himachal Pradesh, particularly in the Great Himalayan National Park and Spiti Valley. It is an apex predator that preys on species like the **Himalayan Tahr** and **Ibex**.
                                  - **Himalayan Brown Bear (Ursus arctos isabellinus):** A subspecies of brown bear found in alpine meadows and forests of the high Himalayas. The Himalayan Brown Bear is highly endangered due to poaching and habitat loss.
                                  - **Tibetan Antelope (Pantholops hodgsonii):** Found in the high-altitude deserts of Spiti and Lahaul, these animals are primarily threatened by poaching for their fine wool.
                                  - **Musk Deer (Moschus spp.):** Known for its valuable musk gland, the Musk Deer is found in the alpine forests and is critically endangered.
                                  <br />
                                  - **Wildlife Sanctuaries:** Other large mammals include **Leopard**, **Himalayan Black Bear**, **Goral**, **Serow**, and **Muntjac**. These species rely on Himachal Pradesh's diverse habitats for shelter and food.
                                  <br /><br />
                                - **Birdlife of Himachal Pradesh:**
                                  Himachal Pradesh is a birdwatcher's paradise, with a rich array of species spread across its varied ecosystems.
                                  - **Himalayan Monal (Lophophorus impejanus):** The state bird of Himachal Pradesh, the Himalayan Monal is one of the most striking birds in the region. Its colorful feathers are a testament to its beauty, and it thrives in temperate and sub-alpine forests.
                                  - **Bearded Vulture (Gypaetus barbatus):** Found in the high-altitude regions, this large bird feeds on bone marrow and is known for its unique method of breaking bones by dropping them from great heights.
                                  - **Western Tragopan (Tragopan melanocephalus):** An endangered species, the Western Tragopan is found in the temperate forests of Himachal and is known for its brightly colored plumage.
                                  <br />
                                  - **Other Birds:** The state is home to other notable birds like **Eurasian Sparrowhawks**, **Kestrels**, **Red-billed Blue Magpie**, and **Black Bulbuls**. Migratory waterfowl such as **Bar-headed Goose** can be found in the wetlands.
                                </div>

                            {/* Unique Ecosystems */}
                            <div className="mt-5 font-[Raleway] p-5 border rounded-[44px] mr-5">
                                <span className="font-semibold">Unique Ecosystems of Himachal Pradesh:</span>
                                <br />
                                Himachal Pradesh is home to a diverse range of ecosystems, each providing unique habitats for a wide variety of flora and fauna. These ecosystems include lush temperate forests, alpine meadows, and high-altitude desert ecosystems.

                                <br /><br />
                                - **Great Himalayan National Park (GHNP):**
                                  A UNESCO World Heritage Site, GHNP is located in the Kullu Valley and features a range of ecosystems, including temperate forests, sub-alpine meadows, and alpine zones. It is home to species like the **Snow Leopard**, **Himalayan Tahr**, and **Western Tragopan**. The park is a biodiversity hotspot and attracts nature lovers and researchers alike.
                                  <br />
                                  The **Tirthan River** flows through the park, providing aquatic habitats for species like the **Brown Trout** and **Himalayan Trout**.
                                <br />
                                - **Spiti Valley:**
                                  Spiti, known as “Little Tibet,” is a high-altitude desert valley in Himachal Pradesh that is starkly beautiful with its barren, rocky terrain and sparse vegetation. This region supports unique flora and fauna adapted to the cold and dry environment.
                                  - **Snow Leopard** and **Tibetan Antelope** are the most iconic residents of this region. The **Pallas’s Cat** is also found in the area, a species known for its solitary nature and long, thick fur.
                                  <br />
                                  The valley's isolated monasteries and rugged terrain offer a glimpse into Tibetan culture, making Spiti a distinctive ecosystem with both ecological and cultural significance.
                                <br />
                                - **Kangra Valley:**
                                  The Kangra Valley is one of the most fertile regions in Himachal Pradesh, with a subtropical and temperate climate. The valley is known for its green terraced fields and dense forests of oak, pine, and rhododendron.
                                  - The region supports species like the **Himalayan Monal**, **Sambar Deer**, and **Indian Peafowl**. The valley's mix of lush forests, rolling hills, and clear rivers offers a serene environment for both wildlife and humans.
                                  <br />
                                  The **Dhauladhar Range** forms the backdrop to the valley, and its high slopes are home to the **Himalayan Tahr** and **Mountain Goat**.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Florandfauna;
