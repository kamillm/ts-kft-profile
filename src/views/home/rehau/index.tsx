import React from "react";
import Image from "next/image";

import RehauImg from "@/assets/rehau.png";

const RehauView = () => {
  return (
    <div className="flex items-center py-20 px-[200px] mac:px-[100px] desktop:px-[50px] tablet:flex-col tablet:space-y-28 mobile:px-10">
      <div className="w-1/2 tablet:w-full inline-flex items-center justify-center">
        <div className="w-[297px] h-[304px] mac:w-[250px] tablet:w-full inline-flex items-center justify-center">
          <Image src={RehauImg} width={297} height={304} alt="rehau-logo" />
        </div>
      </div>
      <div className="w-1/2 tablet:w-full">
        <div className="flex flex-col space-y-5 items-start">
          <div className="bg-primary h-2 w-[80%]" />
          <p className="text-[65px] text-black font-700 mac:text-[50px] mobile:text-[30px]">{"Výrobky Rehau"}</p>
          <p className="text-[30px] text-black font-400 mac:text-[20px]">
            {
              "Okna a dveře od společnosti REHAU jsou vyráběny v prvotřídní kvalitě. PVC profily splňují přísné nízkoenergetické a pasivní normy."
            }
            <br />
            <br />
            {
              "Za zmínku stojí vysoká škála barev, velmi široké portfolio produktů a vysoce kvalitní použitý materiál, to vše samozřejmě s ohledem na ekologickou stránku."
            }
            <br />
            <br />
            {
              "Pro novostavby, nízkoenergetické a pasivní domy je ideální volbou profil Rehau Synego 80mm, v případě rekonstrukce se nabízí profil Rehau Brillant se stavební hloubkou 70 mm."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default RehauView;
