'use client';
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import {motion} from 'framer-motion';
import React from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialCard = ({ text, imageSrc, name, username } : {text: string, imageSrc: string, name: string, username: string}) => {
  return (
    <div className="rounded-[20px] w-[325px] flex flex-col gap-5 p-10 border border-[#EFF0F6] shadow-md tracking-tighter text-[16px] leading-[23px] mb-5">
            <p>{text}</p>
            <div className="flex gap-2">
              <Image src={imageSrc} alt={name}  width={42} height={42}/>
              <div className="flex flex-col">
                <h3 className="tracking-tight font-medium">{name}</h3>
                <p className="tracking-tight leading-[23px]">{username}</p>
              </div>
            </div>
          </div>
  );
}


export const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className='max-w-[540px] mx-auto text-center'>
          <div className="tag">Testimonials</div>
          <h2 className='section-title'>What our users say</h2>
          <p className='section-subtitle'>
            From intuitive design to powerful features, our app has become an essential tool for users around the world.
          </p>
        </div>
      <div className="md:flex hidden gap-5 py-12 my-24 justify-center flex-col md:flex-row mx-auto [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)] max-h-[738px] overflow-hidden">
        <motion.div className="flex flex-col max-md:mx-auto h-min"
          animate={{
            translateY: "-50%",
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 17,
            ease: 'linear',
          }}
        >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {firstColumn.map((testimonial, index) => (
          <TestimonialCard key={index} text={testimonial.text} imageSrc={testimonial.imageSrc} name={testimonial.name} username={testimonial.username}/>
        ))}
          </React.Fragment>
        ))}
        </motion.div>
        <motion.div className="flex flex-col max-md:mx-auto h-min"
          animate={{
            translateY: "-50%",
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          }}
        >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {secondColumn.map((testimonial, index) => (
          <TestimonialCard key={index} text={testimonial.text} imageSrc={testimonial.imageSrc} name={testimonial.name} username={testimonial.username}/>
        ))}
          </React.Fragment>
        ))}
        </motion.div>
        <motion.div className="flex flex-col max-md:mx-auto h-min"
          animate={{
            translateY: "-50%",
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 16,
            ease: 'linear',
          }}
        >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {thirdColumn.map((testimonial, index) => (
          <TestimonialCard key={index} text={testimonial.text} imageSrc={testimonial.imageSrc} name={testimonial.name} username={testimonial.username}/>
        ))}
          </React.Fragment>
        ))}
        </motion.div>
      
      </div>
        <div className="my-20 [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)] max-h-[738px] overflow-hidden">
        <motion.div
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      className="flex md:hidden items-center flex-col mx-auto ">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} text={testimonial.text} imageSrc={testimonial.imageSrc} name={testimonial.name} username={testimonial.username}/>
        ))}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} text={testimonial.text} imageSrc={testimonial.imageSrc} name={testimonial.name} username={testimonial.username}/>
        ))}
      </motion.div>
        </div>
      
    </section>
  );
};
