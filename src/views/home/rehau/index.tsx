import React from "react";
import Image from "next/image";

import RehauImg from "@/assets/rehau.png";

const RehauView = () => {
  return (
    <div className="flex items-center py-20">
      <div className="w-1/2 inline-flex items-center justify-center">
        <div className="w-[297px] h-[304px]">
          <Image src={RehauImg} width={297} height={304} alt="rehau-logo" />
        </div>
      </div>
      <div className="w-1/2 pr-36 pl-5">
        <div className="flex flex-col space-y-5 items-start">
          <div className="bg-primary h-2 w-[503px]" />
          <p className="text-[65px] text-black font-700">{"O výrobci Rehau"}</p>
          <p className="text-[30px] text-black font-400">
            {
              "Jsme inovativní marketingová a digitální agentura, zaměřená na poskytování kreativních řešení a strategií, které pomáhají našim klientům dosáhnout svých obchodních cílů."
            }
            <br />
            <br />
            {
              "S vášní a zkušenostmi v oboru se snažíme vytvářet silné propojení mezi značkami a jejich cílovým publikem, abychom podpořili jejich růst a úspěch. Jsme tu pro vás, abychom společně vytvořili příběh, který osloví a zanechá trvalý dojem."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default RehauView;
