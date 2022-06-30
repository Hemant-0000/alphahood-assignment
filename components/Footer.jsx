import Image from 'next/image'
import React from 'react'
import call_icon from '../public/assets/call_icon.png'
import call_ring1 from '../public/assets/call_ring1.png'
import call_ring2 from '../public/assets/call_ring2.png'
import email_icon from '../public/assets/email_icon.png'
import email_icon2 from '../public/assets/email_icon2.png'

function Footer() {
    return (
        <div className='w-full top-[3140px] absolute h-[437px] bg-[#27282B] font-PJakarta '>

            <div className='h-[295px] absolute  flex '>
                <div className=' '>
                    <h3 className='absolute top-[48px] left-[150px] font-[700] text-[24px] text-white leading-[31px] '>Logo</h3>
                    <p className='absolute w-[458px] h-[48px] top-[91px] left-[150px] font-[400] text-[14px] leading-[24px] text-[#8C8C8C] self-stretch '>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>

                    <div className='w-[48px] h-[48px] absolute top-[163px] left-[150px] bg-[#343538] rounded-[30px] pt-[16.67px] pl-[14.67px] '><Image src={call_icon} alt='' />
                    </div>
                    <p className='absolute top-[167.5px] left-[210px] text-[12px] font-[400] leading-[16px] text-[#8C8C8C] w-[100px] h-[16px] '>Have a question?</p>
                    <p className='absolute top-[185.5px] left-[210px] text-[16px] font-[500] leading-[21px] text-white w-[113px] h-[16px] '>310-437-2766</p
                    >

                    <div className='w-[48px] h-[48px] absolute top-[163px] left-[376px] bg-[#343538] rounded-[30px] pt-[16.67px] pl-[14.67px] '><Image src={email_icon} alt='' />
                    </div>
                    <p className='absolute top-[167.5px] left-[436px] text-[12px] font-[400] leading-[16px] text-[#8C8C8C] w-[100px] h-[16px] '>Contact us at</p>
                    <p className='absolute top-[185.5px] left-[436px] text-[16px] font-[500] leading-[21px] text-white w-[113px] h-[16px] '>unreal@outlook.com</p>
                </div>

                <div>
                    <h3 className='absolute top-[48px] left-[720px] font-[700] text-[24px] text-white leading-[31px] '>Newsletter</h3>
                    <p className='absolute w-[569px] h-[48px] top-[83px] left-[720px] font-[400] text-[14px] leading-[24px] text-[#8C8C8C] self-stretch '>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>

                    <div className='w-[569px] h-[48px] absolute top-[163px] left-[720px] bg-[#343538] rounded-[30px] '>

                        <div className='absolute top-[14px] left-[28.67px] '><Image src={email_icon} alt=''/></div>

                        <input className='bg-[#343538] w-[400px] outline-none absolute top-[16px] left-[59px] text-[12px] text-[#8C8C8C] leading-[16px] font-[400] ' placeholder='Enter your email' type="text" />
                        </div>

                        <button className='w-[94px] h-[36px] absolute top-[169px] left-[1189px] py-[11.5px] px-[29.5px] bg-[#537CE6] rounded-[30px] text-white text-[10px] leading-[13px] text-center '>Submit</button>
                        

                </div>
            </div>

            <div>

                <div className='absolute top-[299px] left-[150px] font-[400] text-[14px] leading-[18px] text-[#8C8C8C] '>
                    <ul className='flex space-x-[69.78px]'>
                        <li className='cursor-pointer'>About us</li>
                        <li className='cursor-pointer'>Jobs</li>
                        <li className='cursor-pointer'>Blog</li>
                        <li className='cursor-pointer'>Press</li>
                        <li className='cursor-pointer'>FAQ</li>
                        <li className='cursor-pointer'>Careers</li>
                        <li className='cursor-pointer'>Contact</li>
                        <li className='cursor-pointer'>Privacy policy</li>
                        <li className='cursor-pointer'>Sitemap</li>
                        <li className='cursor-pointer'>Terms of Use</li>
                    </ul>
                </div>

                <div className='absolute top-[349px] left-[150px] flex space-x-[8px] '>
                    <div className='w-[48px] h-[48px] bg-[#343538] rounded-[30px] p-[15.67px] '><Image src={call_icon} alt=''/></div>
                    <div className='w-[48px] h-[48px] bg-[#343538] rounded-[30px] p-[15.67px] '><Image src={call_icon} alt=''/></div>
                    <div className='w-[48px] h-[48px] bg-[#343538] rounded-[30px] p-[15.67px] '><Image src={call_icon} alt=''/></div>
                    <div className='w-[48px] h-[48px] bg-[#343538] rounded-[30px] p-[15.67px] '><Image src={call_icon} alt=''/></div>
                    <div className='w-[48px] h-[48px] bg-[#343538] rounded-[30px] p-[15.67px] '><Image src={call_icon} alt=''/></div>
                </div>

                <p className='text-[#8C8C8C] w-[868px] h-[18px] text-right absolute top-[364px] left-[422px] text-[14px] font-[400] leading-[18px]  '>© 2000-2021, All Rights Reserved</p>

            </div>

        </div>
    )
}

export default Footer