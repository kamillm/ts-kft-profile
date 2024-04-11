import React from "react";
import Image from "next/image";

import LogoImg from "@/assets/logo.png";

const NasView = () => {
  return (
    <div className="flex items-center py-20 px-[200px] mac:px-[100px] desktop:px-[50px] tablet:flex-col tablet:space-y-28 mobile:px-10">
      <div className="w-1/2 tablet:w-full">
        <div className="flex flex-col space-y-5 items-start">
          <p className="text-[65px] text-black font-700 mac:text-[55px]  mobile:text-[30px]  border-t-8 border-primary">
            {"O nás"}
          </p>
          <p className="text-[30px] text-black font-400 mac:text-[20px]">
            {
              "Naše okna REHAU Synego jsou vyráběna s největší technologickou přesností na nejdokonalejších strojích a zaručují tím maximální bezpečnost, komfort, těsnost a především životnost."
            }
            <br />
            <br />
            {
              "Tím přináší našim zákazníkům minimální starosti o jejich péči a zároveň eliminují vysoké náklady za energie, čímž nadmíru podporují celosvětovou ekologii. Plníme veškerá přání a očekávání našich klientů, samozřejmě v nejvyšší kvalitě a nízké cenové hladině."
            }
          </p>
        </div>
      </div>
      <div className="w-1/2 tablet:w-full inline-flex items-center justify-center">
        <div className="w-[475] h-[169] inline-flex justify-center items-center mac:w-[350px]">
          <Image src={LogoImg} width={475} height={169} alt="rehau-logo" />
        </div>
      </div>
    </div>
  );
};

export default NasView;
