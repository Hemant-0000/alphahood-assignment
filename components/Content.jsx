import React from 'react'
import Image from 'next/image'
import live_exams from '../public/assets/live_exams.png'
import lessons1 from '../public/assets/1000lessons.png'
import lessons2 from '../public/assets/1000lesson2.png'
import liveclass1 from '../public/assets/liveclass1.png'
import liveclass2 from '../public/assets/liveclass2.png'
import eye1 from '../public/assets/eye1.png'
import eye2 from '../public/assets/eye2.png'
import testimonial1 from '../public/assets/testimonial1.png'
import testimonial2 from '../public/assets/testimonial2.png'
import testimonial3 from '../public/assets/testimonial3.png'
import rightarrow from '../public/assets/rightarrow.png'
import leftarrow from '../public/assets/leftarrow.png'

function Content() {
    return (
        <div>

            {/* Heading  */}
            <h1 className='absolute top-[1598px] left-[118px] w-[302px] h-[78px] font-PSANS font-[700] text-[32px] leading-[39px] tracking-[0.0188em] text-[#9921E8] '>Start learning with us right now!</h1>

            {/* details  */}
            <p className='absolute top-[1688px] left-[118px] w-[290px] h-[44px] font-PSANS font-[400] text-[18px] leading-[22px] text-black '>Choose from 100+ online video courses with new updates.</p>

            {/* Enroll now button  */}
            <button className='absolute top-[1756px] left-[118px] pt-[8px] px-[18px] pb-[7px] font-PSANS font-[700] text-[14px] leading-[17px] text-[#5F72BE] box-border border-[1.8px] border-solid border-[#5F72BE] rounded-[100px] '>ENROLL NOW</button>

            {/* Live exams  */}
            <p className='w-[48px] h-[38px] absolute top-[1429px] left-[698px] font-PSANS font-[700] text-[16px] leading-[19px] text-[#FFAD3B] '>Live Exams</p>
            <div className='absolute w-[200px] h-[200px] top-[1348px] left-[778px] rounded-full bg-[#fff7eb] ' >
                <div className='p-[76px]'><Image src={live_exams} alt='' /></div>
            </div>


            {/* 1000+ lessons  */}
            <p className='w-[59px] h-[38px] absolute top-[1541px] left-[1042px] font-PSANS font-[700] text-[16px] leading-[19px] text-[#EB5757] '>1000+ Lessons</p>
            <div className='absolute w-[200px] h-[200px] top-[1460px] left-[1122px] rounded-full bg-[#fdeeee] ' >
                <div className='p-[76px]'><Image src={lessons1} alt='' /></div>
            </div>


            {/* Live classes  */}
            <p className='w-[57px] h-[38px] absolute top-[1693px] left-[698px] font-PSANS font-[700] text-[16px] leading-[19px] text-[#2D81F7] '>Live Exams</p>
            <div className='absolute w-[200px] h-[200px] top-[1612px] left-[778px] rounded-full bg-[#eaf2fe] ' >
                <div className='absolute top-[76px] left-[76px]'><Image src={liveclass1} alt='' /></div>
                <div className='absolute right-[76px] bottom-[71px] '><Image src={liveclass2} alt='' /></div>
            </div>


            {/* 1000+ lessons  */}
            <p className='w-[59px] h-[38px] absolute top-[1805px] left-[1042px] font-PSANS font-[700] text-[16px] leading-[19px] text-[#08BD80] '>1000+ Lessons</p>
            <div className='absolute w-[200px] h-[200px] top-[1724px] left-[1122px] rounded-full bg-[#e6f8f2] ' >
                <div className='p-[76px]'><Image src={lessons2} alt='' /></div>
            </div>


            {/* 100k+ views  */}
            <p className='w-[52px] h-[38px] absolute top-[1957px] left-[701px] font-PSANS font-[700] text-[16px] leading-[19px] text-[#FE5702] '>100 K+
                Views</p>
            <div className='absolute w-[200px] h-[200px] top-[1876px] left-[781px] rounded-full bg-[#ffeee6] ' >
                <div className='absolute top-[76px] left-[73px] '><Image src={eye1} alt='' /></div>
                <div className='absolute top-[87px] left-[95px] '><Image src={eye2} alt='' /></div>
            </div>


            {/* Testimonials  */}
            <h3 className='absolute top-[2241px] left-[129px] font-PSANS font-[700] text-[16px] leading-[19px] text-[#5F72BE]  '>OUR TESTIMONIALS</h3>

            {/* Line  */}
            <div className='absolute w-[435px] top-[2252px] left-[344px] border-[2px] border-solid border-[#5F72BE] bg-[#5F72BE] rounded-full '></div>

            {/* Testimonial 1 */}
            <div className='absolute top-[2338px] left-[657px] ' ><Image src={testimonial1} alt=''/></div>

            {/* Testimonial 2 */}
            <div className='absolute top-[2400px] left-[620px] ' ><Image src={testimonial2} alt=''/></div>

            {/* Testimonial 3 */}
            <div className='absolute top-[2400px] left-[900px] ' ><Image src={testimonial3} alt=''/></div>

            <div className='absolute top-[2514.75px] right-[114.57px] '><Image src={rightarrow} alt=''/></div>
            <div className='absolute top-[2514.75px] left-[129.07px] '><Image src={leftarrow} alt=''/></div>

            {/* some lorem ipsum text  */}
            <p className='absolute top-[2590px] left-[435px] w-[702px] h-[66px] font-PSANS font-[400] text-[18px] leading-[22px] text-center text-black '>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>

            {/* Clients name  */}
            <p className='absolute top-[2700px] left-[740px] font-PSANS font-[700] text-[16px] leading-[19px] text-center text-[#9921E8]  ' >Md. Danish Ansari</p>
            {/* profession  */}
            <p className='absolute top-[2722px] left-[700px] font-PSANS font-[400] text-[14px] leading-[17px] text-[#9921E8] '>Learner, Govt. Employee @UPPCL</p>

            {/* Email us  */}
            <div className='absolute top-[2900px] left-[112px] w-[1312px] h-[120px] bg-[#5F72BE] rounded-[12px]'>
                <h3 className='absolute top-[32px] left-[56px] font-PSANS font-[700] text-[18px] leading-[22px] text-white '>Email Us</h3>
                <p className='absolute top-[66px] left-[56px] font-PSANS font-[400] text-[16px] leading-[19px] text-white '>Connect with us in case of any queries, complaints or feedbacks...</p>
                <button className='w-[328px] h-[52px] absolute top-[34px] left-[934px] bg-[#2D81F7] pt-[16px] pb-[17px] pl-[105px] pr-[119px] font-PSANS font-[700] text-[16px] leading-[19px] tracking-[0.028em] text-white rounded-[12px]   '>CONTACT US</button>
            </div>

        </div>
    )
}

export default Content