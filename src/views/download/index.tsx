import React from "react";
import Image from "next/image";

import PDFImg from "@/assets/pdf.png";

const DownloadView = () => {
  return (
    <div className="flex flex-col space-y-20 items-center py-[100px] px-5 desktop:space-y-10">
      <p className="font-700 text-[45px] text-black text-center desktop:text-[30px] mobile:text-[25px]">
        {"Soubory ke stažení"}
      </p>
      <div className="grid grid-cols-4 gap-5 small:grid-cols-2 final:grid-cols-1">
        {[1, 2, 3, 4].map((item) => (
          <div className="w-[215px] desktop:w-[150px]" key={`download-${item}`}>
            <div className="bg-main-900 w-full py-10 inline-flex justify-center items-center">
              <Image src={PDFImg} className="w-[40px] h-[46px]" alt="pdf" />
            </div>
            <div className="bg-main-400 py-2">
              <p className="text-black font-500 text-[23px] text-center desktop:text-[15px]">{`Document ${item}`}</p>
              <p className="cursor-pointer text-primary underline text-[20px] font-500 text-center desktop:text-[14px]">
                {"Stáhnout"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadView;
