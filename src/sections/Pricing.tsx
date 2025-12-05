'use client';
import { features } from "process";
import CheckIcon from "@/assets/check.svg"
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="px-6 py-24 bg-white">
      <div className='max-w-[540px] mx-auto text-center'>
          <div className="tag">Pricing</div>
          <h2 className='section-title'>We have the perfect plan for you</h2>
          <p className='section-subtitle'>
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mt-10 gap-[25px] mx-auto  max-lg:max-w-[351px] lg:items-end justify-center">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={twMerge(
                "border rounded-3xl border-[#EFF0F6] p-10 pb-11 flex flex-col gap-[34px] shadow-md",
                 tier.inverse && "bg-black text-white" )}>
                <div className="flex justify-between items-center">
                  <h3 className={twMerge(
                    " tracking-tight font-bold text-lg",
                    tier.inverse ? "text-[#999999]": "text-[#6F6C90]")}
                    >{tier.title}</h3>
                  {tier.popular && 
                  <div className="px-3 border border-[#FFFFFF]/20 rounded-[10px]">
                    <motion.span 
                    animate={{backgroundPositionX: "100%"}}
                    transition={{repeat: Infinity, duration: 4, ease: "linear", repeatType: "loop"}}
                    className="text-[13px] leading-[28px] font-medium tracking-tight bg-[linear-gradient(to_right,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DFF)] [background-size:200%] text-transparent bg-clip-text  px-[1px]">
                      Most Popular
                    </motion.span>
                    </div>
                  }
                </div>
                <div className="flex gap-1 items-end">
                  <span className="tracking-tighter text-[54px] leading-[60px] font-bold">${tier.monthlyPrice} </span>
                  <span className={twMerge(" tracking-tight font-bold text-lg mb-1",
                  tier.inverse ? "text-[#999999]": "text-[#6F6C90]"
                  )}>/monthy</span>
                </div>
                <button className={twMerge("rounded-[10px] py-2 px-4 tracking-tight font-medium",
                tier.inverse ? "bg-white text-black": "bg-black text-white"
                )}>{tier.buttonText}</button>
                <ul className="flex flex-col gap-5">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex gap-4">
                      <CheckIcon className="min-w-6 min-h-6 w-6 h-6"/>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
              </div>
            ))}
          </div>
    </section>
  );
};
