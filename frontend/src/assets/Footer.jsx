import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="w-screen h-[636px] bg-top flex  items-center  justify-center" style={{ backgroundImage: "url('/fb download.jpg')" }}>
                <div className='w-[1500px] h-[500px]  backdrop-blur-sm ml-4 flex rounded-2xl shadow-2xl'>
                    <div className='w-1/2 h-[475px]  p-5'>

                        <div className='w-full w-72 flex mt-1'>
                            <div className=' ml-3 h-14 w-14 text-white'>
                                <img src="https://himachaltourism.gov.in/wp-content/uploads/2018/03/himachallogosticky-1.png" />
                            </div>
                            <div className="text-black text-[50px] font-normal font-gideon ml-5" >Himachal Pradesh </div>
                        </div>


                        <div className=" ml-3 w-full text-black text-lg font-medium font-gideon">Himachal Pradesh is a state in northern India, known for its stunning landscapes, including the Himalayas, lush valleys, and scenic hill stations. It is a state located in the northern part of India,
                            nestled in the Western Himalayas. It is one of the 13 mountain states and is characterized by an extreme landscape.</div>

                        <div className='w-full h-[250px]  flex ' >

                            <div className='w-full h-full '>
                                <div className='text-[34px] mt-4 ml-3 font-normal font-inter'>Socials</div>

                                <div className='mt-5'>
                                    <a href='https://www.facebook.com/himachaltourismofficial/'> <div className="w-40 h-[37px] relative mt-2">
                                        <img className=" ml-5 w-[30px] h-[30px] left-0 top-[5px] absolute rounded-full hover:scale-110 ease-in duration-300 hover:bg-blue-800 " src="src/assets/logo/facebook.png" />
                                        <div className=" ml-4 w-[116.08px] h-[34px] left-[43.92px] top-1 absolute  hover:text-blue-800 text-[#252525] text-2xl font-normal font-['M PLUS 1']">Follow us</div>
                                    </div></a>
                                    <a href='https://www.instagram.com/himachaltourismofficial/'><div className="w-40 h-[37px] relative mt-2">
                                        <img className=" ml-5 w-[30px] h-[30px] left-0 top-[5px] rounded-full hover:scale-110 ease-in duration-300 hover:bg-violet-800 absolute" src="src/assets/logo/instagram.png" />
                                        <div className=" ml-4 w-[116.08px] h-[34px] left-[43.92px] top-1 absolute  hover:text-violet-800 text-[#252525] text-2xl font-normal font-['M PLUS 1']">Follow us</div>
                                    </div></a>
                                    <a href='https://x.com/hp_tourism'><div className="w-40 h-[37px] relative mt-2">
                                        <img className=" ml-5 w-[30px] h-[30px] left-0 top-[5px] rounded-full hover:scale-110 ease-in duration-300 hover:bg-white absolute" src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=740&t=st=1721506531~exp=1721507131~hmac=179ae881ca5dcfdc1b04426f3d9bcf6dda342658ed6dcafb8503c531596732d7" />
                                        <div className=" ml-4 w-[116.08px] h-[34px] left-[43.92px] top-1 absolute text-[#252525]  hover:text-slate-500 text-2xl font-normal font-['M PLUS 1']">Follow us</div>
                                    </div></a>


                                </div>
                            </div>
                            <div className='w-full h-full '>
                                <div className='text-[34px] mt-4 ml-3 font-normal font-inter'>About Developer 👋</div>
                                <div className="text-black text-2xl mt-5 font-normal ml-3 font-['Raleway']">Ansh Verma<br />
                                    <div className=' flex justify-items-start'>
                                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXPzVTFFjwjhHgGQFhrZfpwZxDhBQTGRzBWHmrmTZFsflckHHQmZClMFnMzVhhprgtsHL'>
                                            <div className="w-30 h-[30px] mr-5  mt-2">
                                                <img className="  w-[33px] h-[33px]    hover:scale-125 ease-in duration-300" src="src/assets/logo/gmail.png" />
                                            </div>
                                        </a>
                                        <a href='https://www.instagram.com/ansh_wrma/'>
                                            <div className="w-30 h-[30px] mr-5 mt-2">
                                                <img className=" w-[30px] h-[30px]  hover:scale-125 ease-in duration-300 " src="src/assets/logo/insta.png" />
                                            </div>
                                        </a>
                                        <a href='https://www.linkedin.com/in/anshverma621'>
                                            <div className="w-30 h-[30px] mt-2">
                                                <img className="w-[30px] h-[30px] hover:scale-125 ease-in duration-300 " src="src/assets/logo/linkedin.png" />
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <br />
                                       <NavLink to={"/TermsAndConditions"}> Terms and conditions</NavLink><br />
                                        <NavLink to={"/Policy"}>Privacy Policies</NavLink><br /></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 h-[475px] flex '>
                        <div className='w-1/2 h-full'>

                            <div className='text-[34px] mt-4 ml-7 font-normal font-inter'>Navigation</div>
                            <div className="text-black text-2xl mt-5 font-normal ml-10 font-['Raleway'] ">
                                <NavLink to={"/Home"}>Home</NavLink><br />
                                <NavLink to={"/Accomodation"}>Accomodation</NavLink><br />
                                <NavLink to={"/AI"}>AI trip advisor</NavLink><br />
                                <NavLink to={"/Destination"}>Destination</NavLink><br />
                                <NavLink to={"/Cuisine"}>Cuisine</NavLink><br />
                                <NavLink to={"/Himalyas"}>Himalayas</NavLink><br />
                                <NavLink to={"/Home"}>Culture</NavLink><br />
                                <NavLink to={"/HowToReach"}>How to Reach</NavLink><br />
                                <NavLink to={"/WannaList"}>Want to List Your Hotel</NavLink><br />



                            </div>

                        </div>
                        <div className='w-1/2 h-full'>
                            <div className='text-[34px] mt-4 ml-7 font-normal font-inter'>Contact Us</div>
                            <div className="w-[305px] h-[422px] text-black text-2xl ml-7 mt-5 font-normal font-['Raleway'] tracking-wide">Tourism & Civil Aviation Department
                                <br />Block No. 28, SDA Complex,
                                <br />Kasumpti, Shimla-171009
                                <br />
                                <br />Phone: 0177 -2625924, 2625511
                                <br />Fax: 0177 - 2625456
                                <br />
                                <br />E-mail: tourism.hp@nic.in, tourismmin-hp@nic.in
                                <br /></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer;