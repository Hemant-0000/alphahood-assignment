import React from 'react'
import Image from 'next/image'
import logo from '../public/assets/logo.svg'

function Navbar() {
  return (
    <div>
      <div className='flex'>
        {/* logo */}
        <div className='mt-[39px] ml-[70px] cursor-pointer ' ><Image src={logo} alt='' /></div>
        <p className='mt-[51px] ml-[18px] cursor-pointer font-bold text-[14px]  text-left align-top  text-white font-PSANS '>SCRUMVERSE</p>

        {/* Navigations button  */}
        <div className='ml-[297px] mt-[49px] '>
          <ul className='flex space-x-[50px] font-PSANS text-[14px] font-[700] text-white leading-[17px] '>
            <li className='cursor-pointer'>HOME</li>
            <li className='cursor-pointer'>ABOUT</li>
            <li className='cursor-pointer'>COURSES</li>
            <li className='cursor-pointer'>BLOGS</li>
          </ul>
        </div>

        {/* Login And Signup button  */}
        <div className='mt-[40px] ml-[364px] text-white font-PSANS font-[700] text-[14px]  '>
          <button className='leading-[17px]' >LOGIN</button>
          <button className='ml-[18px] pt-[7px] pb-[6px] px-[16px] border-[1.8px] border-solid border-white rounded-[100px]  '>SIGNUP</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar