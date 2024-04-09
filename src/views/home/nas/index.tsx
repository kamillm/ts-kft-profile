import React from "react";
import Image from "next/image";

import LogoImg from "@/assets/logo.png";

const NasView = () => {
  return (
    <div className="flex items-center py-20 px-[200px]">
      <div className="w-1/2">
        <div className="flex flex-col space-y-5 items-start">
          <div className="bg-primary h-2 w-[176px]" />
          <p className="text-[65px] text-black font-700">{"O nás"}</p>
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
      <div className="w-1/2 inline-flex items-center justify-center">
        <div className="w-[475] h-[169]">
          <Image src={LogoImg} width={475} height={169} alt="rehau-logo" />
        </div>
      </div>
    </div>
  );
};

export default NasView;
