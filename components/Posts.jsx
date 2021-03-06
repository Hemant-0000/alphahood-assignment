import React from 'react'
import Post from './Post'
import postimg from '../public/assets/postimg.png'

const postss = [
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
    },
    {
        id: 5,
        title: 'Learn SCRUM: The Complete Beginner Course',
        username: 'Samay Jain, Ex-KPMG',
        rating: '4.5'
    },
    {
        id: 6,
        title: 'Learn SCRUM: The Complete Beginner Course',
        username: 'Samay Jain, Ex-KPMG',
        rating: '4.5'
    },
    {
        id: 7,
        title: 'Learn SCRUM: The Complete Beginner Course',
        username: 'Samay Jain, Ex-KPMG',
        rating: '4.5'
    },
    {
        id: 8,
        title: 'Learn SCRUM: The Complete Beginner Course',
        username: 'Samay Jain, Ex-KPMG',
        rating: '4.5'
    },
]


function Posts() {
    return (
        <div>

            <p className='absolute top-[799px] left-[64px] font-PSANS font-[700] text-[18px] leading-[22px] text-black '>A broad range of courses</p>

            <p className='absolute top-[833px] left-[64px] font-PSANS font-[400] text-[18px] leading-[22px] text-black '>Choose from 100+ online video courses with new additions published every month</p>

            <div id='scrollableDiv' className='absolute top-[919px] pl-[64px] flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-hide w-[1518px] '>
                    {postss.map(post => {
                        return <Post key={post.id} id={post.id} img={postimg} title={post.title} username={post.username} rating={post.rating} />
                    })}
            </div>

        </div>
    )
}

export default Posts