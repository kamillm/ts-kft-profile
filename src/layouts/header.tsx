import React from "react";
import Image from "next/image";

// @assets
import LogoImg from "@/assets/logo.png";
import { MENU_ITEMS } from "@/constants";
import Container from "@/components/Container";

const Header = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-2">
        <div className="w-[298px] h-[106px]">
          <Image src={LogoImg} width={298} height={106} alt="logo" />
        </div>
        <div className="w-[55%] flex items-center justify-between">
          {MENU_ITEMS.map((item) => {
            if (item.type === "text") {
              return (
                <p className="text-main-900 text-[25px] font-500 cursor-pointer" key={`menu-${item.id}`}>
                  {item.label}
                </p>
              );
            } else {
              return (
                <button
                  className="text-white bg-primary text-[25px] font-500 rounded-[50px] px-10"
                  key={`menu-${item.id}`}
                >
                  {item.label}
                </button>
              );
            }
          })}
        </div>
      </div>
    </Container>
  );
};

export default Header;