'use client';
import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import Image from "next/image";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
    
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip">
      <div className="px-5 md:px-11">
        <div className="md:flex items-center">
        <div className="md:w-[478px] lg:w-[600px] xl:w-[900px] xxl:[1200px]">
           <div className="tag">
          Version 2.0 is here
           </div>
           <h1 className="font-bold text-5xl md:text-7xl  lg:text-8xl tracking-tighter  title-gradient mt-6 z-20">Pathway to productivity</h1>
           <p className="tracking-tight text-xl text-[#010D3E] mt-6">
           Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
           </p>
           <div className="mt-6 flex">
           <button className="blackbtn blackbtn-primary">Get for free</button>
           <button className="blackbtn blackbtn-text">
              <div className="flex gap-1 items-center">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5"/>
              </div>
            </button>
           </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
           <motion.img 
            draggable="false" 
            src={cogImage.src} 
            alt="Cog" 
            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6  lg:left-0 "
            animate={{ 
              translateY: [-30, 30],
             }}
             transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 4,
              ease: 'easeInOut',
             }}
          />
           <motion.img 
           draggable="false" 
           src={cylinderImage.src} 
           alt="Cylinder" 
           width={220} 
           height={220} 
           className="hidden md:block md:absolute -top-8 -left-32"
           style={{ translateY }}

          />
           <motion.img
           draggable="false" 
           src={noodleImage.src} 
           alt="Noodle" 
           width={220} 
           height={220} 
           className="hidden lg:block lg:absolute top-[524px] left-[448px] rotate-[30deg] xl:left-[600px]"
           style={{ translateY , rotate: 30 }}
           />
           </div>
        </div>
        
        
      </div>
    </section>
  );
};
