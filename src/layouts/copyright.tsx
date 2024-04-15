import Link from "next/link";
import React from "react";

const CopyRight = () => {
  return (
    <div className="flex items-center justify-between text-main-900 text-[15px] font-400 py-4 px-[200px] desktop:flex-col desktop:space-y-1 desktop:text-[12px] desktop:px-0">
      <div className="flex items-center space-x-3 small:flex-col small:space-y-1">
        <p>{"© 2024 KFT OKNA"}</p>
        <div className="h-4 w-[2px] bg-main-900 small:hidden" />
        <p>
          design & conent by{" "}
          <Link href={"https://stayon.cz/"} target="_blank" className="uppercase font-700 text-blue-100 cursor-pointer">
            STAYON MEDIA
          </Link>{" "}
          agency 2023
        </p>
      </div>
      <div className="flex items-center space-x-3 small:flex-col small:space-y-1">
        <Link href={"/cookie"}>
          <p>{"Zásady ochrany osobních údajů"}</p>
        </Link>
        <div className="h-4 w-[2px] bg-main-900 small:hidden" />
        <Link href={"/cookie"}>
          <p>Nastavení Cookies</p>
        </Link>
      </div>
    </div>
  );
};

export default CopyRight;
