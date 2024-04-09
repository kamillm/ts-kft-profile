import React from "react";
import Image from "next/image";
// @components
import CopyRight from "./copyright";
// @assets
import LogoImg from "@/assets/logo.png";
import RehauImg from "@/assets/rehau.png";
import { KONAKT, NAVIGACE } from "@/constants";

const Footer = () => {
  return (
    <div>
      <div className="px-20 py-14 flex">
        <div className="w-1/2 flex flex-col items-center space-y-5">
          <div className="w-[298px] h-[106px]">
            <Image src={LogoImg} width={298} height={106} alt="logo" />
          </div>
          <div className="w-[116px] h-[119px]">
            <Image src={RehauImg} width={116} height={119} alt="redau" />
          </div>
        </div>
        <div className="w-1/2 flex items-start space-x-20 px-20">
          <div className="flex flex-col space-y-3">
            <p className="text-[25px] font-700 text-black">Navigace</p>
            {NAVIGACE.map((item) => (
              <p key={`navigate-${item.id}`} className="text-[20px] text-black font-300">
                {item.label}
              </p>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-[25px] font-700 text-black">Konakt</p>
            {KONAKT.map((item) => (
              <p key={`konakt-${item.id}`} className="text-[20px] text-black font-300">
                {item.label}
              </p>
            ))}
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
};

export default Footer;
