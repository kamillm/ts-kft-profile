import React from "react";
import Image from "next/image";

import BannerImge from "@/assets/banner-image.png";

const BannerView = () => {
  return (
    <div>
      <div className="relative h-[808px] desktop:h-[700px] tablet:h-[600px]">
        <Image src={BannerImge} fill alt="home-banner" className="w-full h-full object-cover" />

        <div className="bg-black/50 absolute w-full h-full">
          <div className="flex flex-col space-y-3 pt-[350px] px-[100px] desktop:pt-[250px] desktop:px-[50px] mobile:px-5 mobile:pt-[200px]">
            <div className="flex items-center space-x-5">
              <div className="w-2 h-[153px] bg-white desktop:h-[100px]" />
              <p className="w-[1306px] text-white text-[72px] font-700 mac:text-[54px] desktop:text-[40px] small:text-[30px]">
                {"Kvalitní okna od výrobce Rehau v nejlepším poměru cena:výkon"}
              </p>
            </div>
            <button className="bg-primary hover:bg-red-100 text-white px-10 py-1 text-[30px] font-600 rounded-[50px] w-[383px] mac:text-[20px] mac:w-[300px] small:text-[15px] small:w-[250px]">
              {"Druhy oken a dveří"}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-primary h-2" />
    </div>
  );
};

export default BannerView;
