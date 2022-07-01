import React from 'react'
import Image from 'next/image'
import favorite from '../public/assets/favorite.png'
import fullstar from '../public/assets/fullstar.svg'
import Post from './Post'
import postimg from '../public/assets/postimg.png'

const posts = [
    {
        id: 1,
        title: 'Learn SCRUM: The Complete Beginner Course',
        username: 'Samay Jain, Ex-KPMG',
        rating: '4.5'
    },
    {
        id: 2,
        title: 'Learn SCRUM: The Complete Beginner Course',
        username: 'Samay Jain, Ex-KPMG',
        rating: '4.5'
    },
    {
        id: 3,
        title: 'Learn SCRUM: The Complete Beginner Course',
        username: 'Samay Jain, Ex-KPMG',
        rating: '4.5'
    },
    {
        id: 4,
        title: 'Learn SCRUM: The Complete Beginner Course',
        username: 'Samay Jain, Ex-KPMG',
        rating: '4.5'
    }
]

function Posts() {
    return (
        <div>

            <p className='absolute top-[799px] left-[64px] font-PSANS font-[700] text-[18px] leading-[22px] text-black '>A broad range of courses</p>

            <p className='absolute top-[833px] left-[64px] font-PSANS font-[400] text-[18px] leading-[22px] text-black '>Choose from 100+ online video courses with new additions published every month</p>

            {/* <div className='absolute top-[919px] left-[64px] flex '>
                {posts.map(post => {
                    return <Post key={post.id} id={post.id} img={postimg} title={post.title} username={post.username} rating={post.rating} />
                })}
            </div> */}

            {/* Post 1 */}
            <div className='absolute top-[919px] left-[64px] flex w-[282px] h-[312px] bg-[#ffffff] rounded-[12px] shadow-my-shadow mr-[32px] '>

                {/* Post image  */}
                <div className='w-[282px] h-[142px] rounded-tr-[12px] rounded-tl-[12px] '><Image src={postimg} alt='' /></div>

                {/* Title  */}
                <p className='absolute top-[154px] left-[27px] w-[228px] h-[38px] font-PSANS font-[800] text-[16px] leading-[19px] text-black  '>Learn SCRUM: The Complete Beginner Course</p>

                {/* fav icon  */}
                <div className='absolute top-[154px] left-[252px] cursor-pointer '><Image src={favorite} alt='' /></div>

                {/* Username  */}
                <p className='absolute top-[204px] left-[27px] font-PSANS font-[400] text-[14px] leading-[17px] text-black '>Samay Jain, Ex-KPMG</p>

                {/* Ratings  */}
                <p className='absolute top-[233px] left-[27px] font-PSANS font-[700] text-[14px] leading-[17px] text-black ' >4.5</p>

                {/* Stars  */}
                <div className='absolute top-[229px] left-[59.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[79.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[99.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[119.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[139.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute w-[16px] h-[16px] top-[234px] left-[147px] bg-white '></div>

                {/* Enroll now button  */}
                <button className='absolute top-[262px] left-[27px] pt-[8px] px-[18px] pb-[7px] font-PSANS font-[700] text-[14px] leading-[17px] text-[#5F72BE] box-border border-[1.8px] border-solid border-[#5F72BE] rounded-[100px] hover:text-white hover:bg-[#5F72BE] transition ease-in duration-300 '>ENROLL NOW</button>

            </div>

            {/* Post 2 */}
            <div className='absolute top-[919px] left-[378px] flex w-[282px] h-[312px] bg-[#ffffff] rounded-[12px] shadow-my-shadow mr-[32px] '>

                {/* Post image  */}
                <div className='w-[282px] h-[142px] rounded-tr-[12px] rounded-tl-[12px] '><Image src={postimg} alt='' /></div>

                {/* Title  */}
                <p className='absolute top-[154px] left-[27px] w-[228px] h-[38px] font-PSANS font-[800] text-[16px] leading-[19px] text-black  '>Learn SCRUM: The Complete Beginner Course</p>

                {/* fav icon  */}
                <div className='absolute top-[154px] left-[252px] cursor-pointer '><Image src={favorite} alt='' /></div>

                {/* Username  */}
                <p className='absolute top-[204px] left-[27px] font-PSANS font-[400] text-[14px] leading-[17px] text-black '>Samay Jain, Ex-KPMG</p>

                {/* Ratings  */}
                <p className='absolute top-[233px] left-[27px] font-PSANS font-[700] text-[14px] leading-[17px] text-black ' >4.5</p>

                {/* Stars  */}
                <div className='absolute top-[229px] left-[59.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[79.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[99.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[119.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[139.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute w-[16px] h-[16px] top-[234px] left-[147px] bg-white '></div>

                {/* Enroll now button  */}
                <button className='absolute top-[262px] left-[27px] pt-[8px] px-[18px] pb-[7px] font-PSANS font-[700] text-[14px] leading-[17px] text-[#5F72BE] box-border border-[1.8px] border-solid border-[#5F72BE] rounded-[100px] hover:text-white hover:bg-[#5F72BE] transition ease-in duration-300 '>ENROLL NOW</button>

            </div>

            {/* Post 3 */}
            <div className='absolute top-[919px] left-[692px] flex w-[282px] h-[312px] bg-[#ffffff] rounded-[12px] shadow-my-shadow mr-[32px] '>

                {/* Post image  */}
                <div className='w-[282px] h-[142px] rounded-tr-[12px] rounded-tl-[12px] '><Image src={postimg} alt='' /></div>

                {/* Title  */}
                <p className='absolute top-[154px] left-[27px] w-[228px] h-[38px] font-PSANS font-[800] text-[16px] leading-[19px] text-black  '>Learn SCRUM: The Complete Beginner Course</p>

                {/* fav icon  */}
                <div className='absolute top-[154px] left-[252px] cursor-pointer '><Image src={favorite} alt='' /></div>

                {/* Username  */}
                <p className='absolute top-[204px] left-[27px] font-PSANS font-[400] text-[14px] leading-[17px] text-black '>Samay Jain, Ex-KPMG</p>

                {/* Ratings  */}
                <p className='absolute top-[233px] left-[27px] font-PSANS font-[700] text-[14px] leading-[17px] text-black ' >4.5</p>

                {/* Stars  */}
                <div className='absolute top-[229px] left-[59.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[79.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[99.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[119.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[139.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute w-[16px] h-[16px] top-[234px] left-[147px] bg-white '></div>

                {/* Enroll now button  */}
                <button className='absolute top-[262px] left-[27px] pt-[8px] px-[18px] pb-[7px] font-PSANS font-[700] text-[14px] leading-[17px] text-[#5F72BE] box-border border-[1.8px] border-solid border-[#5F72BE] rounded-[100px] hover:text-white hover:bg-[#5F72BE] transition ease-in duration-300 '>ENROLL NOW</button>

            </div>

            {/* Post 4 */}
            <div className='absolute top-[919px] left-[1006px] flex w-[282px] h-[312px] bg-[#ffffff] rounded-[12px] shadow-my-shadow mr-[32px] '>

                {/* Post image  */}
                <div className='w-[282px] h-[142px] rounded-tr-[12px] rounded-tl-[12px] '><Image src={postimg} alt='' /></div>

                {/* Title  */}
                <p className='absolute top-[154px] left-[27px] w-[228px] h-[38px] font-PSANS font-[800] text-[16px] leading-[19px] text-black  '>Learn SCRUM: The Complete Beginner Course</p>

                {/* fav icon  */}
                <div className='absolute top-[154px] left-[252px] cursor-pointer '><Image src={favorite} alt='' /></div>

                {/* Username  */}
                <p className='absolute top-[204px] left-[27px] font-PSANS font-[400] text-[14px] leading-[17px] text-black '>Samay Jain, Ex-KPMG</p>

                {/* Ratings  */}
                <p className='absolute top-[233px] left-[27px] font-PSANS font-[700] text-[14px] leading-[17px] text-black ' >4.5</p>

                {/* Stars  */}
                <div className='absolute top-[229px] left-[59.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[79.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[99.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[119.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute top-[229px] left-[139.64px]  '><Image src={fullstar} alt='' /></div>
                <div className='absolute w-[16px] h-[16px] top-[234px] left-[147px] bg-white '></div>

                {/* Enroll now button  */}
                <button className='absolute top-[262px] left-[27px] pt-[8px] px-[18px] pb-[7px] font-PSANS font-[700] text-[14px] leading-[17px] text-[#5F72BE] box-border border-[1.8px] border-solid border-[#5F72BE] rounded-[100px] hover:text-white hover:bg-[#5F72BE] transition ease-in duration-300 '>ENROLL NOW</button>

            </div>


        </div>
    )
}

export default Posts