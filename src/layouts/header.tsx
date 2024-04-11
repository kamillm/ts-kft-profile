import React, { useState } from "react";
import Image from "next/image";

// @assets
import { ImMenu } from "react-icons/im";
import { MdCancel } from "react-icons/md";

import LogoImg from "@/assets/logo.png";
import { MENU_ITEMS } from "@/constants";
import Container from "@/components/Container";
import Link from "next/link";
import clsx from "clsx";

const Header = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <Container className="px-32 desktop:px-12 tablet:px-8 mobile:px-6 final:px-4">
      <div className="flex items-center justify-between py-2" id="product-banner">
        <Link href={"/"}>
          <div className="w-[298px] h-[106px] laptop:w-[198px] laptop:h-[70px] mobile:w-[150px] mobile:h-[53px]">
            <Image src={LogoImg} width={298} height={106} alt="logo" />
          </div>
        </Link>
        <div className="w-[55%] flex items-center justify-between mac:w-[60%] tablet:hidden">
          {MENU_ITEMS.map((item) => {
            if (item.type === "text") {
              return (
                <Link href={item.href} key={`menu-${item.id}`}>
                  <p className="text-[#BEBEBE] hover:text-main-900 text-[25px] font-500 cursor-pointer laptop:text-[15px] hover:underline">
                    {item.label}
                  </p>
                </Link>
              );
            } else {
              return (
                <Link href={item.href} key={`menu-${item.id}`}>
                  <button className="text-white bg-primary text-[25px] font-500 rounded-[50px] px-10 laptop:text-[15px] laptop:px-5 hover:bg-red-100">
                    {item.label}
                  </button>
                </Link>
              );
            }
          })}
        </div>
        <div className="hidden tablet:block" onClick={() => setSidebar(true)}>
          <ImMenu className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
      <div
        className={clsx(
          "z-10 fixed w-full h-full bg-black/40 top-0 left-0 transition-all duration-300",
          sidebar ? "visible opacity-100 backdrop-blur-2xl" : "invisible opacity-0"
        )}
      >
        <div className="flex items-center justify-center h-full">
          <div className="relative bg-white p-5 flex flex-col space-y-5 items-center rounded-md w-[250px] h-[300px] justify-center">
            <div className="absolute -top-7 -right-7" onClick={() => setSidebar(false)}>
              <MdCancel className="text-white w-8 h-8" />
            </div>
            {MENU_ITEMS.map((item) => {
              if (item.type === "text") {
                return (
                  <Link href={item.href} key={`menu-${item.id}`} onClick={() => setSidebar(false)}>
                    <p className="text-[#BEBEBE] hover:text-main-900 text-[20px] font-500 cursor-pointer hover:underline">
                      {item.label}
                    </p>
                  </Link>
                );
              } else {
                return (
                  <Link href={item.href} key={`menu-${item.id}`} onClick={() => setSidebar(false)}>
                    <button className="text-white bg-primary text-[20px] font-500 rounded-[50px] px-10 py-1 hover:bg-red-100">
                      {item.label}
                    </button>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
