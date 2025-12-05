import Image from "next/image";
import logo from "@/assets/logosaas.png";

import InstaIcon from '../assets/social-insta.svg'
import XSocial from '../assets/social-x.svg'
import LinkedInIcon from '../assets/social-linkedin.svg'
import YoutubeIcon from '../assets/social-youtube.svg'
import TikTokIcon from '../assets/social-tiktok.svg'
import PinIcon from '../assets/social-pin.svg'

const footerInfo = () => [
  {
    name: 'Product',
    links: [
      "Features",
      "Integrations",
      "Updates",
      "FAQ",
      "Pricing",
    ]
  },
  {
    name: 'Company',
    links: [
      "About",
      "Blog",
      "Careers",
      "Manifesto",
      "Press",
      "Contact",
    ]
  },
  {
    name: 'Resources',
    links: [
      "Examples",
      "Community",
      "Guides",
      "Docs",
    ]
  },
  {
    name: 'Legal',
    links: [
      "Privacy",
      "Terms",
      "Security",
    ]
  },
]

export const Footer = () => {
  return (
    <footer className="px-16 py-10 bg-black flex max-md:flex-col justify-between gap-[72px]">
      <div className=" flex flex-col md:max-w-[240px] justify-between">
        <div className="">
          <div className="relative">
            <div className="absolute z-10 w-[42px] top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF_24%,#FFDD9B_48%,#C2F0B1_73%,#2FD8FE)] blur-[8px]"></div>
            <Image draggable="false" src={logo} alt="Saas Image" className="h-[42px] w-auto relative z-20" />
          </div>
          <p className="text-[#BCBCBC] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.
          </p>
          <p className="text-[#BCBCBC] mt-5 text-sm">
            © 2024. All rights reserved.
          </p>
        </div>
        <ul className='flex gap-2.5 text-[#808080] mt-5'>
          <li className='cursor-pointer'><XSocial /></li>
          <li className='cursor-pointer'><InstaIcon /></li>
          <li className='cursor-pointer'><PinIcon /></li>
          <li className='cursor-pointer'><LinkedInIcon /></li>
          <li className='cursor-pointer'><TikTokIcon /></li>
          <li className='cursor-pointer'><YoutubeIcon /></li>

        </ul>
      </div>
      <div className="flex gap-12 text-[#7b7b7b] max-md:flex-col">
        {footerInfo().map((info, index) => (
          <div key={index}>
            <h3 className="text-white font-bold text-sm">{info.name}</h3>
            <ul className='mt-5 flex flex-col gap-5 text-sm'>
              {info.links.map((link, index) => (
                <li key={index} className='cursor-pointer'>{link}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </footer>
  );
};
