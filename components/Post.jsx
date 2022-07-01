import React from 'react'
import Image from 'next/image'
import favorite from '../public/assets/favorite.png'
import fullstar from '../public/assets/fullstar.svg'

function Post({ img, title, username, rating }) {
  return (
    <div className='w-[282px] h-[312px] bg-[#ffffff] rounded-[12px] shadow-my-shadow mr-[32px] '>

        {/* Post image  */}
        <div className='w-[282px] h-[142px] rounded-tr-[12px] rounded-tl-[12px] '><Image src={img}  alt='' /></div>

        {/* Title  */}
        <p className='absolute top-[154px] left-[27px] w-[228px] h-[38px] font-PSANS font-[800] text-[16px] leading-[19px] text-black  '>{title}</p>

        {/* fav icon  */}
        <div className='absolute top-[154px] left-[252px] cursor-pointer '><Image src={favorite} alt=''/></div>

        {/* Username  */}
        <p className='absolute top-[204px] left-[27px] font-PSANS font-[400] text-[14px] leading-[17px] text-black '>{username}</p>

        {/* Ratings  */}
        <p className='absolute top-[233px] left-[27px] font-PSANS font-[700] text-[14px] leading-[17px] text-black ' >{rating}</p>

        {/* Stars  */}
        <div className='absolute top-[229px] left-[59.64px]  '><Image src={fullstar} alt=''/></div>
        <div className='absolute top-[229px] left-[79.64px]  '><Image src={fullstar} alt=''/></div>
        <div className='absolute top-[229px] left-[99.64px]  '><Image src={fullstar} alt=''/></div>
        <div className='absolute top-[229px] left-[119.64px]  '><Image src={fullstar} alt=''/></div>
        <div className='absolute top-[229px] left-[139.64px]  '><Image src={fullstar} alt=''/></div>
        <div className='absolute w-[16px] h-[16px] top-[234px] left-[147px] bg-white '></div>

        {/* Enroll now button  */}
        <button className='absolute top-[262px] left-[27px] pt-[8px] px-[18px] pb-[7px] font-PSANS font-[700] text-[14px] leading-[17px] text-[#5F72BE] box-border border-[1.8px] border-solid border-[#5F72BE] rounded-[100px] hover:text-white hover:bg-[#5F72BE] transition ease-in duration-300 '>ENROLL NOW</button>

    </div>
  )
}

export default Post