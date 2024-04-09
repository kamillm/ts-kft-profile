import Link from "next/link";
import React from "react";

const CopyRight = () => {
  return (
    <div className="flex items-center justify-between text-main-900 text-[15px] font-400 px-[400px] py-4">
      <div className="flex items-center space-x-3">
        <p>{"© 2024 KFT OKNA"}</p>
        <div className="h-4 w-[2px] bg-main-900" />
        <p>
          design & conent by{" "}
          <Link href={"https://stayon.cz/"} target="_blank" className="uppercase font-700 text-blue-100 cursor-pointer">
            STAYON MEDIA
          </Link>{" "}
          agency 2023
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <p>{"Zásady ochrany osobních údajů"}</p>
        <div className="h-4 w-[2px] bg-main-900" />
        <p>Nastavení Cookies</p>
      </div>
    </div>
  );
};

export default CopyRight;