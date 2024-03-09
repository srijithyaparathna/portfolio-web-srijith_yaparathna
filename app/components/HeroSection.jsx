"use client"
import React from 'react';
import srijithimg from './images/srijith.png';
import Image from 'next/image';
import srijithbackground from "./images/srijith2.jpg";
import { TypeAnimation } from 'react-type-animation';





const HeroSection = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-12'>
      <div className='col-span-7 place-self-center text-center sm:text-left '>
        <h1 className='text-white mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' > Hello, I&apos;m  </span> </h1>
          <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold' >
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Srijith Yaparathna',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Mobile Deverloper',
        1000,
        'Software Engineer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ' >
          I am Srijith Yaparathna, a third-year undergraduate of the Faculty of
          Engineering, University of Ruhuna. I am reading for a BSc. (Hons.)
          Degree in Computer Engineering. I am very interested in computer
          programming, web development, and software development. I have done
          several projects related to software development and web development. I
          do my best to honor their commitment. In addition, I want to develop a
          positive outlook on life and strive to be a respected member of the
          society. I believe everything is an Art when you put your consciousness
          in it.
        </p>
        <div>
          <button className='px-10  py-3 sm:w-fit rounded-full  text-white   mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-20' > Hire ME </button>
          <button className= 'px-1 py-1 sm:w-fit rounded-full bg-gradient-to-b from-blue-500 to-pink-500    mr-4  hover:bg-slate-800'  style={{ margin: '10px' }} > 
          <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-10 py-3 ' >
          Download CV  </span>
          </button>
        </div>
      </div>
      <div className='col-span-5 place-self-center mt-4 lg:mt-0 '>
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative border-4 border-white'>
          <Image
            src={srijithbackground}
            alt='Srijith Yaparathna'
            className='absolute inset-0 w-full h-full object-cover  rounded-full' 
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
