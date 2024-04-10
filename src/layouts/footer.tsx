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
      <div className="px-20 py-14 flex tablet:flex-col tablet:space-y-5">
        <div className="w-1/2 flex flex-col items-center space-y-5 tablet:w-full tablet:space-y-0">
          <div className="w-[298px] h-[106px] laptop:w-[198px]">
            <Image src={LogoImg} width={298} height={106} alt="logo" />
          </div>
          <div className="w-[116px] h-[119px] laptop:w-[90px]">
            <Image src={RehauImg} width={116} height={119} alt="redau" />
          </div>
        </div>
        <div className="w-1/2 flex items-start space-x-20 px-20 desktop:space-x-10 desktop:px-5 tablet:w-full tablet:justify-center tablet:px-0 mobile:flex-col mobile:space-x-0 mobile:space-y-5 mobile:items-center">
          <div className="flex flex-col space-y-3">
            <p className="text-[25px] font-700 text-black tablet:text-[20px] mobile:text-center">Navigace</p>
            {NAVIGACE.map((item) => (
              <p
                key={`navigate-${item.id}`}
                className="text-[20px] text-black font-300 tablet:text-[15px]  mobile:text-center"
              >
                {item.label}
              </p>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-[25px] font-700 text-black tablet:text-[20px]  mobile:text-center">Konakt</p>
            {KONAKT.map((item) => (
              <p
                key={`konakt-${item.id}`}
                className="text-[20px] text-black font-300 tablet:text-[15px]  mobile:text-center"
              >
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
