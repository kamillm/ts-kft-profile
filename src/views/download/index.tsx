import React from "react";
import Image from "next/image";

import PDFImg from "@/assets/pdf.png";

const DownloadView = () => {
  return (
    <div className="flex flex-col space-y-20 items-center py-[100px]">
      <p className="font-700 text-[45px] text-black text-center">{"Soubory ke stažení"}</p>
      <div className="flex space-x-10">
        {[1, 2, 3, 4].map((item) => (
          <div className="w-[215px]" key={`download-${item}`}>
            <div className="bg-main-900 w-full py-10 inline-flex justify-center items-center">
              <Image src={PDFImg} className="w-[40px] h-[46px]" alt="pdf" />
            </div>
            <div className="bg-main-400">
              <p className="text-black font-500 text-[23px] text-center">{`Document ${item}`}</p>
              <p className="cursor-pointer text-primary underline text-[20px] font-500 text-center">{"Stáhnout"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadView;
