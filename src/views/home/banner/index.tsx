import React from "react";
import Image from "next/image";

import BannerImge from "@/assets/banner-image.png";

const BannerView = () => {
  return (
    <div>
      <div className="relative h-[894px]">
        <Image src={BannerImge} fill alt="home-banner" />

        <div className="bg-black/50 absolute w-full h-full">
          <div className="flex flex-col space-y-3 pt-[400px] pl-[250px]">
            <div className="flex items-center space-x-5">
              <div className="w-2 h-[153px] bg-white" />
              <p className="w-[1306px] text-white text-[72px] font-700">
                {"Kvalitní okna od výrobce Rehau v nejlepším poměru cena:výkon"}
              </p>
            </div>
            <button className="bg-primary text-white px-10 py-1 text-[30px] font-600 rounded-[50px] w-[383px]">
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
