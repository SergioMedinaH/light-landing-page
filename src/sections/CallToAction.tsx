'use client'
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
    
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="py-24  px-[76px] bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-hidden">
      <div className='max-w-[540px] mx-auto text-center relative mb-10'>
          <h2 className='section-title'>Sign up for free today</h2>
          <p className='mt-5 text-[#010D3E] text-[16px] leading-[23px] tracking-tighter'>
          Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
          <div className="flex mt-10 justify-center">
           <button className="blackbtn blackbtn-primary">Get for free</button>
           <button className="blackbtn blackbtn-text">
              <div className="flex gap-1 items-center">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5"/>
              </div>
            </button>
           </div>
           <motion.img 
           style={{ translateY }}
           src={starImage.src} alt="Star" className="hidden w-[362px] h-auto md:block absolute  -top-32 -left-96"/>
           <motion.img 
           style={{ translateY }}
           src={springImage.src} alt="Spring" className="hidden w-[362px] h-auto md:block absolute -bottom-24 -right-96"/>
        </div>
    </section>
  );
};
