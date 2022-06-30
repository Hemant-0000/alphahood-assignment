import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import line from '../public/assets/line.svg'
import image1 from '../public/assets/image1.png'
import image2 from '../public/assets/image2.png'
import image3 from '../public/assets/image3.png'
import image4 from '../public/assets/image4.png'

function Header() {
    return (
        <>
            <div className='w-full h-[704px] bg-gradient-to-r from-[#9527e5] to-[#6668c3] ' >
                <Navbar />

                {/* minor description  */}
                <h3 className='w-[400px] h-[30px] absolute top-[193px] left-[64px] bg-[#ffffff] rounded-[100px] pt-[7px] pl-[20px] pr-[19px] pb-[6px] font-PSANS font-[600] leading-[17px] text-[14px] tracking-[0.018em] text-[#9921E8]  '>#MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY</h3>

                {/* Title  */}
                <h2 className='w-[495px] h-[78px] absolute top-[255px] left-[64px] font-PSANS font-[700] text-[32px] text-white leading-[40px] tracking-[0.0188em] box-border ' >Unleash Your SCRUM Skills,  Grab More Attention To Résumé</h2>

                {/* Enroll now button  */}
                <button className='absolute top-[365px] left-[64px] box-border border-[1.8px] border-solid border-white rounded-[100px] font-PSANS font-[700] text-[14px] leading-[17px] text-white pt-[8px] px-[18px] pb-[7px] ' >ENROLL NOW</button>

                {/* offers  */}
                <p className='absolute top-[469px] left-[136px] font-PSANS text-[12px] text-center leading-[15px] text-white '>
                    <span className='font-[700]'>10% OFF on all courses* | </span>
                    <span className='font-[400]'> Offer Valid For</span>
                </p>

                {/* Line  */}
                <div className='absolute top-[476px] left-[227px]'><Image src={line} alt=''/></div>

                {/* Hours  */}
                <div className='absolute w-[88px] h-[88px] top-[505px] left-[80px] rounded-[12px] font-PSANS text-white shadow-md bg-[#a03be9] '>
                    <p className='absolute top-[8px] left-[12px] font-[700] text-[54px] leading-[66px] '>02</p>
                    <span className='absolute top-[66px] left-[35px]  text-[14px] leading-[17px] font-[400] '>Hrs.</span>
                </div>

                {/* Minutes  */}
                <div className='absolute w-[88px] h-[88px] top-[505px] left-[200px] rounded-[12px] font-PSANS text-white shadow-md bg-[#a03be9] '>
                    <p className='absolute top-[8px] left-[12px] font-[700] text-[54px] leading-[66px] '>58</p>
                    <span className='absolute top-[66px] left-[35px]  text-[14px] leading-[17px] font-[400] '>Mins.</span>
                </div>

                {/* Seconds  */}
                <div className='absolute w-[88px] h-[88px] top-[505px] left-[320px] rounded-[12px] font-PSANS text-white shadow-md bg-[#a03be9] '>
                    <p className='absolute top-[8px] left-[12px] font-[700] text-[54px] leading-[66px] '>42</p>
                    <span className='absolute top-[66px] left-[35px]  text-[14px] leading-[17px] font-[400] '>Secs.</span>
                </div>

                {/* Images 1  */}
                <div className='absolute top-[140px] right-[345px] '><Image src={image1} alt=''/></div>

                {/* Images 2  */}
                <div className='absolute top-[245px] right-[462px] '><Image src={image2} alt=''/></div>
                
                {/* Images 3  */}
                <div className='absolute top-[448px] right-[492px] '><Image src={image3} alt=''/></div>

                {/* Images 4  */}
                <div className='absolute top-[193px] right-0 '><Image src={image4} alt=''/></div>

            </div>
        </>
    )
}

export default Header