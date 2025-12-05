'use client';

import acmeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-apex.png';
import celestialLogo from '@/assets/logo-celestial.png';
import echoLogo from '@/assets/logo-echo.png';
import pulseLogo from '@/assets/logo-pulse.png';
import quantumLogo from '@/assets/logo-quantum.png';
import Image from 'next/image';

import {motion} from 'framer-motion';

const images = [
  {src: acmeLogo, alt: 'Acme Logo'},
  {src: apexLogo, alt: 'Apex Logo'},
  {src: celestialLogo, alt: 'Celestial Logo'},
  {src: echoLogo, alt: 'Echo Logo'},
  {src: pulseLogo, alt: 'Pulse Logo'},
  {src: quantumLogo, alt: 'Quantum Logo'},
];

export const LogoTicker = () => {
  return (
  <div className='py-8 md:py-12 bg-white'>
    <div className='container'>
      <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
      <motion.div className='flex flex-none'
        animate={{
          translateX: '-25%',
        }}
        transition={{
          duration: 8,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {images.map((image, index) => (
          <Image draggable="false" key={index} src={image.src} alt={image.alt} className='h-8 w-auto mr-14'/>
        ))}
        {images.map((image, index) => (
          <Image draggable="false" key={index} src={image.src} alt={image.alt} className='h-8 w-auto mr-14'/>
        ))}
        {images.map((image, index) => (
          <Image draggable="false" key={index} src={image.src} alt={image.alt} className='h-8 w-auto mr-14'/>
        ))}
        {images.map((image, index) => (
          <Image draggable="false" key={index} src={image.src} alt={image.alt} className='h-8 w-auto mr-14'/>
        ))}
      </motion.div>
      </div>
    </div>
  </div>
  );
};
