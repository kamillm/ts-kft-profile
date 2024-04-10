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
          <p className="text-black font-700 text-[30px]  mac:text-[25px] text-center">
            {"Jeden z nejlepších výrobců na trhu"}
          </p>
          <p className="text-black font-400 text-[20px]  mac:text-[15px] text-center">
            {
              "Stamilionový nemovitý majetek, kapitálové zázemí a prokazatelná dlouholetá ekonomická stabilita KFT Jičín jsou pro zákazníky zárukou, že firma vždy dostojí svým závazkům."
            }
          </p>
        </div>

        <div className="w-[320px] desktop:w-full flex flex-col items-center space-y-3">
          <div className="w-[125px] h-[125px] bg-primary rounded-full inline-flex items-center justify-center">
            <p className="text-white font-700 text-[80px]">3</p>
          </div>
          <p className="text-black font-700 text-[30px]  mac:text-[25px] text-center">{"Záruka 3 roky"}</p>
          <p className="text-black font-400 text-[20px]  mac:text-[15px] text-center">
            {
              "Na všechny výrobky dodávané KFT Okna standardně poskytujeme tří letou záruku. Zakazníkům nabízíme i prodloužení záruky až na deset let."
            }
          </p>
        </div>

        <div className="w-[317px]  desktop:w-full flex flex-col items-center space-y-3">
          <div className="w-[125px] h-[125px] bg-primary rounded-full inline-flex items-center justify-center">
            <Image src={HandImg} width={65} height={65} alt="factory" />
          </div>
          <p className="text-black font-700 text-[30px]  mac:text-[25px] text-center">
            {"Nejlepší okna v poměru cena:výkon"}
          </p>
          <p className="text-black font-400 text-[20px]  mac:text-[15px] text-center">
            {
              "Víc jak polovinu své produkce KFT Jičín vyváží do západní Evropy, zejména do Německa. Svým domácím zákazníkům nabízí evropskou kvalitu za české ceny."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default KFTView;
