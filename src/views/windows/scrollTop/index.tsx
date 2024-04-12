import React from "react";
import { UpArrowIcon } from "@/assets/Icons";
import { useKind } from "@/contexts/KindProvider";
import clsx from "clsx";
import Link from "next/link";

const ScrollTop = () => {
  const { kind, setKind } = useKind();

  return (
    <div className="flex flex-col items-center space-y-10 py-10">
      <Link href="#product-banner">
        <div className="transition duration-300 bg-primary hover:bg-red-100 w-[150px] h-[150px] rounded-full flex items-center justify-center flex-col cursor-pointer desktop:w-[100px] desktop:h-[100px]">
          <UpArrowIcon className="desktop:w-10 desktop:h-8" />
          <p className="font-600 text-[25px] text-white text-center desktop:text-[15px]">
            {"Zpět"}
            <br />
            {"nahoru"}
          </p>
        </div>
      </Link>

      <div className="flex items-center justify-center small:flex-col">
        <div
          onClick={() => setKind(!kind)}
          className={clsx(
            "cursor-pointer transition duration-300 text-white text-[20px] font-700 p-2 w-[308px] desktop:w-[230px] desktop:text-[15px]",
            !kind ? "bg-primary hover:bg-red-100" : "bg-main-900 hover:bg-main-900/65"
          )}
        >
          {"Okna a dveře SYNEGO"}
        </div>
        <div className="bg-white w-1 h-[46px] small:w-full small:h-1" />
        <div
          onClick={() => setKind(!kind)}
          className={clsx(
            "cursor-pointer text-white transition duration-300 text-[20px] font-700 p-2 w-[308px] text-right desktop:w-[230px] desktop:text-[15px]",
            kind ? "bg-primary hover:bg-red-100" : "bg-main-900 hover:bg-main-900/65"
          )}
        >
          {"Okna a dveře Briliant-Design"}
        </div>
      </div>
    </div>
  );
};

export default ScrollTop;
