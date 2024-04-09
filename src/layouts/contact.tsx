import React from "react";
import Image from "next/image";

// @assets
import LogoImg from "@/assets/logo2.png";

const Contact = () => {
  return (
    <div className="flex items-center border-t-[8px] border-b-[8px] border-primary" id="contact">
      <div className="w-1/2 flex justify-end">
        <div className="w-[680px]">
          <p className="text-black font-700 text-[60px]">{"Máte zájem o výrobky značky Rehau?"}</p>
          <p className="text-black font-300 text-[60px]">{"Vyplňte nezávazně formulář a my se vám ozveme."}</p>
        </div>
      </div>
      <div className="w-1/2 bg-primary flex items-center p-20 space-x-10">
        <div className="flex flex-col space-y-10">
          <div className="flex items-start space-x-10">
            <div className="flex flex-col">
              <p className="text-[20px] text-white font-400">{"Jméno*"}</p>
              <input
                className="text-[20px] text-black font-400 placeholder:text-main-400 outline-none rounded-sm p-2"
                placeholder="Vaše celé jmené*"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[20px] text-white font-400">{"Telefonní číslo*"}</p>
              <input
                className="text-[20px] text-black font-400 placeholder:text-main-400 outline-none rounded-sm p-2"
                placeholder="Telefonní číslo*"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[20px] text-white font-400">{"Telefonní číslo*"}</p>
            <input
              className="text-[20px] text-black font-400 placeholder:text-main-400 outline-none rounded-sm p-2"
              placeholder="Telefonní číslo*"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-[20px] text-white font-400">{"Telefonní číslo*"}</p>
            <textarea
              className="h-[175px] text-[20px] text-black font-400 placeholder:text-main-400 outline-none rounded-sm p-2"
              placeholder="Telefonní číslo*"
            />
          </div>

          <button className="text-white text-[20px] font-800 rounded-[50px] bg-red-100 w-[230px] p-2">
            {"Odeslat poptávku"}
          </button>
        </div>
        <div className="w-[234px] h-[388px]">
          <Image src={LogoImg} alt="logo" width={234} height={388} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
