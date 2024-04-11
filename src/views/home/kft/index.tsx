import React from "react";
import Image from "next/image";

// @assets
import FactoryImg from "@/assets/factory.png";
import HandImg from "@/assets/hand.png";

const KFTView = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-primary text-center text-white text-[50px] font-700 w-full mac:text-[45px] tablet:text-[40px] mobile:text-[30px]">
        {"Proč okna KFT ?"}
      </div>

      <div className="flex items-start space-x-20 p-20 desktop:space-x-10 desktop:px-10 tablet:flex-col tablet:space-x-0 tablet:space-y-10">
        <div className="w-[290px] desktop:w-full flex flex-col items-center space-y-3">
          <div className="w-[125px] h-[125px] bg-primary rounded-full inline-flex items-center justify-center">
            <Image src={FactoryImg} width={65} height={65} alt="factory" />
          </div>
          <p className="text-black font-700 text-[30px]  mac:text-[25px] text-center">{"Jsme inovativní"}</p>
          <p className="text-black font-400 text-[20px]  mac:text-[15px] text-center">
            {
              "Jsme inovativní společnost zaměřená na kvalitu výrobků, moderní design a precizní služby směrem k zákazníkům."
            }
          </p>
        </div>

        <div className="w-[320px] desktop:w-full flex flex-col items-center space-y-3">
          <div className="w-[125px] h-[125px] bg-primary rounded-full inline-flex items-center justify-center">
            <p className="text-white font-700 text-[80px]">5</p>
          </div>
          <p className="text-black font-700 text-[30px]  mac:text-[25px] text-center">{"Záruka 5 let"}</p>
          <p className="text-black font-400 text-[20px]  mac:text-[15px] text-center">
            {"Naši zákazníci k montáži získavají záruku 5 let. Pro obchodní partnery máme záruku na 2 roky."}
          </p>
        </div>

        <div className="w-[317px]  desktop:w-full flex flex-col items-center space-y-3">
          <div className="w-[125px] h-[125px] bg-primary rounded-full inline-flex items-center justify-center">
            <Image src={HandImg} width={65} height={65} alt="factory" />
          </div>
          <p className="text-black font-700 text-[30px]  mac:text-[25px] text-center">{"Optimální volba"}</p>
          <p className="text-black font-400 text-[20px]  mac:text-[15px] text-center">
            {
              "Naše firma vám poskytuje vynikající kvalitu oken za rozumnou cenu, abyste si mohli užívat komfort a styl vašeho domova bez zbytečných výdajů."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default KFTView;
