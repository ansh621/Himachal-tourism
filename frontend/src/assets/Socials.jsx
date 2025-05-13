import React from 'react'

const Socials = () => {
  return (
    <div
      className='w-full h-20 bg-no-repeat bg-top bg-cover flex items-center justify-evenly'
      style={{ backgroundImage: "url('https://i.pinimg.com/564x/87/02/2c/87022c2cb1974aca1e413093828f3460.jpg')" }}
    >
      <a href='https://www.facebook.com/himachaltourismofficial/'>
        <button className='h-12 w-[250px] ml-36 border-2 hover:border-blue-500 gilroy text-[25px] rounded-full flex items-center justify-center bg-zinc-100'>
          <span className="rounded-full h-8 w-8 flex items-center justify-center mr-2">
            <img src="src/assets/logo/facebook.png" alt="Facebook Logo" className="h-8 w-8 rounded-full" />
          </span>
          Like us
        </button>
      </a>
      <a href="https://www.instagram.com/himachaltourismofficial/">
        <button className='h-12 w-[250px] gilroy tracking-tighter mx-40 border-2 hover:border-purple-500 text-[25px] rounded-full flex items-center justify-center'>
          <span className="rounded-full h-8 w-8 flex items-center justify-center mr-2">
            <img src="src/assets/logo/instagram.png" alt="Instagram Logo" className="h-8 w-8 rounded-full" />
          </span>
          Follow us
        </button>
      </a>
      <a href="https://x.com/hp_tourism">
        <button className='h-12 w-[250px] mx-40 border-2 hover:border-black gilroy text-[25px] rounded-full flex items-center justify-center'>
          <span className="bg-white my-1 rounded-full h-8 w-8 flex items-center justify-center mr-2">
            <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=740&t=st=1721506531~exp=1721507131~hmac=179ae881ca5dcfdc1b04426f3d9bcf6dda342658ed6dcafb8503c531596732d7" alt="Twitter Logo" className="h-8 w-8 rounded-full" />
          </span>
          Follow us
        </button>
      </a>
    </div>
  )
}

export default Socials