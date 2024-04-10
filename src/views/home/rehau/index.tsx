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
          <p className="text-[65px] text-black font-700 mac:text-[50px] mobile:text-[30px]">{"O výrobci Rehau"}</p>
          <p className="text-[30px] text-black font-400 mac:text-[20px]">
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
