'use client';
import ProductImage from '@/assets/product-image.png';
import Image from 'next/image';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import {motion, useScroll, useTransform} from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ['start end', 'end start'],
    
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={productRef} className=' bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-clip'>
      <div className="px-6 text-center">
        <div className='max-w-[540px] mx-auto'>
          <div className="tag">Boost your productivity</div>
          <h2 className='section-title'>A more effective way to track progress</h2>
          <p className='section-subtitle'>
            Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
          </p>
        </div>
        <div className='relative mt-10 max-w-[1100px] mx-auto'>
          <Image draggable="false" src={ProductImage} alt="Product Image"  className=''/>
          <motion.img draggable="false" src={pyramidImage.src} alt="Pyramid Image" className='hidden md:block absolute -top-28 -right-24 h-[262px] w-auto' 
          style={{translateY}}
          />
          <motion.img draggable="false" src={tubeImage.src} alt="Tube Image" className='hidden md:block absolute top-44 -left-20 h-[248px] w-auto' 
          style={{translateY}}
          />
        </div>
       </div>
    </section>
    
    
  );
};
