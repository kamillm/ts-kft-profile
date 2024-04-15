import React from "react";
import Image from "next/image";

import BannerImge from "@/assets/banner-image.png";

const BannerView = () => {
  return (
    <div className="relative">
      <div className="relative h-[808px] desktop:h-[700px] tablet:h-[600px]">
        <Image src={BannerImge} fill alt="home-banner" className="w-full h-full object-cover" />

        <div className="bg-black/50 absolute w-full h-full">
          <div className="flex flex-col space-y-3 pt-[400px] px-[100px] desktop:px-[50px] desktop:pt-[300px] mobile:px-5 mobile:pt-[300px]">
            <p className="w-full border-l-8 px-6 mobile:border-l-4  border-white max-w-[1306px] text-white text-[72px] font-700 mac:text-[54px] desktop:text-[40px] small:text-[30px]">
              {"Vysoce kvalitní okna z německých profilů REHAU"}
            </p>
            <button className="ml-7 bg-primary hover:bg-red-100 transition duration-300 text-white w-[330px] px-5 py-1 text-[30px] font-600 rounded-[50px] mac:text-[20px] mac:w-[300px] small:text-[15px] small:w-[250px]">
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
