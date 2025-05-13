import React from 'react';
import Footer from '../Footer';


const Himalyas = () => {
    return (
        <>
            <div className='bg-[#f3f3f3] '>
                <div className="w-full h-[537px]">
                    <video
                        id="fullscreen-video"
                        autoPlay
                        muted
                        loop
                        className="inset-0 object-cover w-full h-full -z-10 "
                    >
                        <source
                            src="public\15456970-uhd_3840_2160_25fps.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <p className="dancing-script absolute bottom-1/2 left-1/2 
        transform -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-2xl text-[75px] mix-blend-luminosity tracking-[7.68px] font-bold  text-center z-10">
                        Great himalyas
                    </p>
                </div>
                <div className="w-full h-[600px] relative mt-5">
                    <div className="w-full h-[650px] left-0 top-0 absolute">
                        <div className="w-full h-[350px] left-0 top-[226px] absolute bg-[#c3c3c3]/20" />
                        <img className="w-[744px] h-[515px] left-[43px] top-0 absolute" src="public\pexels-sameer-bajracharya-1300295262-24781586.jpg" />
                    </div>
                    <div className="w-[650px] h-[213px] left-[860px] top-[270px] absolute text-black text-xl font-normal font-['Sans Serif Collection'] tracking-wider">Rising from the Shivalik ranges and moving higher into the mid-Himalayas, Greater Himalayas and beyond, into the trans-Himalayan vast expanse of western Tibet, Himachal Pradesh is a land of grand diversity.</div>
                    <div className="left-[853px] top-[130px] absolute text-black text-[46px] font-normal font-['Raleway']  tracking-[5.12px]">Langtang Lirung </div>
                </div>


                <div className="w-full h-[600px] relative mt-5">
                    <div className="w-full h-[650px] right-0 top-0 absolute">
                        <div className="w-full h-[400px] right-0 top-[226px] absolute bg-[#c3c3c3]/20" />
                        <img className="w-[744px] h-[515px] right-[43px] top-0 absolute" src="public\DSC_1768.JPG" />
                    </div>
                    <div className="w-[650px] h-[213px] right-[860px] top-[270px] absolute text-black text-xl font-normal font-['Sans Serif Collection'] tracking-wider">Rivers born of vast glacial fields are the life soul of the people living on the Indo-Gangetic and Brahmaputra plains. Rivers Beas, Ravi and Chenab, three tributaries rivers of River Indus, originates from Himachal.River Satluj, like the Indus and Brahmaputra, is one of the few rivers that cuts through the Himalayas. It enters Himachal at Shipki La and passes through a deep gorge in Kinnaur and leaves the state at Bhakra in a westward flow.Ridges of the mountains on the eastern flank of Satluj divide north India into the Indus and Ganga basins. Shimla, the state’s capital city, is located along this ridge line that stretches into Kinnaur. From the east side of Shimla, rainwater and snow melt flows into the Bay of Bengal and from the western side it end up in the Arabian Sea.
                            </div>
                    <div className="right-[1140px] top-[130px] absolute text-black text-[46px]  font-['Raleway']  tracking-[5.12px]">Chitkul(Sangla) </div>
                </div>


                <div className="w-full h-[600px] relative mt-16">
                    <div className="w-full h-[650px] left-0 top-0 absolute">
                        <div className="w-full h-[350px] left-0 top-[226px] absolute bg-[#c3c3c3]/20" />
                        <img className="w-[744px] h-[515px] left-[43px] top-0 absolute" src="public\kunzum_pass_3.jpg" />
                    </div>
                    <div className="w-[650px] h-[213px] left-[860px] top-[270px] absolute text-black text-xl font-normal font-['Sans Serif Collection'] tracking-wider">This highest mountain chain in the world has been revered and worshipped down the ages as the abode of the Gods. Many peaks and mountain lakes in Himachal are considered sacred where believers, braving storm and snow, trek for an annual pilgrimage.</div>
                    <div className="left-[853px] top-[130px] absolute text-black text-[46px] font-normal font-['Raleway']  tracking-[5.12px]">Kunzum Pass </div>
                </div>


                <div className="w-full h-[600px] relative mt-5">
                    <div className="w-full h-[650px] right-0 top-0 absolute">
                        <div className="w-full h-[350px] right-0 top-[226px] absolute bg-[#c3c3c3]/20" />
                        <img className="w-[744px] h-[515px] right-[43px] top-0 absolute" src="public\IMG20210627170200.jpg" />
                    </div>
                    <div className="w-[650px] h-[213px] right-[860px] top-[270px] absolute text-black text-xl font-normal font-['Sans Serif Collection'] tracking-wider">Sheltered by the ranges, rivers and their feeding tributary streams have carved out some of the most serene, scenic and fertile valleys. The high mountain desert valley of Spiti, the scenic Sangla valley of Kinnaur, the charming Beas valley of Kullu-Manali and Mandi, the indulgent land of Kangra valley, the aesthetically cut out Chamba valley and Lahaul valley, crowded with some of the biggest glaciers in the entire Himalayas, is the backdrop of Himachal Pradesh, a geography as exciting as it can get.From sweet and therapeutic spring waters to healing hot springs, Himalayas has blessed Himachal with great natural riches.</div>
                    <div className="right-[1275px] top-[130px] absolute text-black text-[46px] font-normal font-['Raleway']  tracking-[5.12px]">Rakchham </div>
                </div>



                <Footer/>


            </div>
        </>
    )
}

export default Himalyas