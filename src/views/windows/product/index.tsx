import React, { useState } from "react";
import Image from "next/image";

import Container from "@/components/Container";
import { DownArrowIcon } from "@/assets/Icons";
import clsx from "clsx";

const Product = ({ item }: { item: any }) => {
  const [drop, setDrop] = useState<boolean>(false);
  return (
    <Container className="px-32 desktop:px-12 tablet:px-8 mobile:px-6 final:px-4">
      <div className="py-20">
        <div className="flex space-x-10 items-center desktop:flex-col desktop:space-x-0 desktop:space-y-10">
          <div className="border-2 border-primary w-[553px] h-[553px] shrink-0 mac:w-[400px] mac:h-[400px] mobile:w-[300px] mobile:h-[300px]">
            <Image src={item.src} width={553} height={553} alt="item" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col space-y-5 justify-end w-full">
            <p className="font-600 text-[40px] text-black mac:text-[35px]">{item.title}</p>
            <p className="font-600 text-[25px] text-black mac:text-[20px]">{item.subtitle}</p>
            <p className="font-400 text-[20px] text-black mac:text-[15px]">{item.describe}</p>

            <div className="bg-primary text-white p-5">
              <p className="text-[30px] mac:text-[25px] font-700">{"Vaše výhody:"}</p>
              <ul className="list-disc pl-10">
                {item.list.map((listItem: any, index: number) => (
                  <li key={`list-item-${index}`} className="p-1">
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p
          onClick={() => setDrop(true)}
          className="relative font-600 text-black text-[30px]  mac:text-[25px] text-center py-10 underline decoration-primary cursor-pointer"
        >
          {"Technická data"}
          <span className={clsx("absolute left-1/2 -translate-x-1/2", !drop ? "block" : "hidden")}>
            <DownArrowIcon />
          </span>
        </p>

        <div className={clsx(drop ? "block" : "hidden")}>
          <div
            className={clsx(
              "flex transition-all duration-300 space-x-10 desktop:flex-col desktop:space-x-0 desktop:space-y-10",
              drop ? "visible opacity-100 backdrop-blur-2xl" : "invisible opacity-0"
            )}
          >
            <table className="w-1/2 desktop:w-full">
              <thead>
                <tr>
                  <td colSpan={2} className="text-danger text-[25px] font-600 text-primary">
                    {"Všeobecné informace"}
                  </td>
                </tr>
              </thead>
              <tbody>
                {item.table.viseo.map((viseoItem: any, index: number) => (
                  <tr key={`video-table-${index}`}>
                    <td>{viseoItem[0]}</td>
                    <td>{viseoItem[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="w-1/2 desktop:w-full">
              <thead>
                <tr>
                  <td colSpan={2} className="text-danger text-[25px] font-600 text-primary">
                    {"Vlastnosti"}
                  </td>
                </tr>
              </thead>
              <tbody>
                {item.table.vlast.map((vlastItem: any, index: number) => (
                  <tr key={`video-table-${index}`}>
                    <td>{vlastItem[0]}</td>
                    <td>{vlastItem[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div onClick={() => setDrop(false)} className="cursor-pointer rotate-180 flex justify-center mt-10">
            <DownArrowIcon />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
