import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { headers } from 'next/headers'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500'>

      <div className="hero-map"/>

      {/* {LEFT} */}
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
          <Image
            src="/camp.svg"
            alt='camp'
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />

          <h1 className='bold-52 lg:bold-88'>Whispering Willow Woods</h1>
          <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
          Welcome to Whispering Willow Woods, where tranquility and adventure intertwine amidst the lush embrace of nature. Nestled deep within a verdant forest, our sanctuary beckons travelers seeking solace and serenity away from the hustle and bustle of city life
          </p>

          <div className='my-11 flex flex-werap gap-5'>
            <div className='flex items-center gap-2'>
              {Array(5).fill(1).map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
                
              ))}
            </div>
            <p className='bold-16 lg:bold-20 text-blue-70'>
              
              198K


              
              
              
              
            <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span>
            </p>
          </div>

          <div className='flex flex-col w-full gap-3 sm:flex-row'>
           <Button 
            type="button" 
            title="Download App" 
            variant="btn_green"
            />

          <Button 
            type="button" 
            title="How we Work" 
            icon='/play.svg'
            variant="btn_white-text"
            />
          </div>

        </div>

        <div className='relative flex flex-1 items-start '>
            <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
              
                <div className='flex flex-col'>
                  <div className='flexBetween'>
                    <p className='regular-16 text-gray-20'>Location</p>
                    <Image src="/close.svg" alt='close' width={24} height={24}/> 

                  </div>
                  <p className='bold-20 text-white'>Jim Corbett National</p>
                </div>
                  <div className='flexBetween'>
                    <div className='flex flex-col'>
                      <p className='regular-16 block text-gray-20'>Distance</p>
                      <p className='bold-20 text-white'>173.28 mi</p>
                    </div>

                    <div className='flex flex-col'>
                      <p className='regular-16 block text-gray-20'>Elevation</p>
                      <p className='bold-20 text-white'>2.040 Km</p>
                    </div>

                 
                </div>
              </div> 

          </div>
        
   

    </section>
  )
}

export default Hero