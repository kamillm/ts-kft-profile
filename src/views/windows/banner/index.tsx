import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { useKind } from "@/contexts/KindProvider";

import BannerImg1 from "@/assets/1.png";
import BannerImg2 from "@/assets/2.png";
import { KindCard } from "@/components/Card";
import Container from "@/components/Container";

const BannerView = () => {
  const { kind, setKind } = useKind();

  return (
    <div>
      <div className="relative h-[808px] desktop:h-[700px] tablet:h-[600px]">
        <Image src={!kind ? BannerImg1 : BannerImg2} fill alt="home-banner" className="object-cover" />

        <div className="bg-black/50 absolute w-full h-full py-20">
          <div className="flex items-center justify-center small:flex-col">
            <div
              onClick={() => setKind(!kind)}
              className={clsx(
                "cursor-pointer text-white text-[20px] font-700 p-2 w-[308px] desktop:w-[230px] desktop:text-[15px]",
                !kind ? "bg-primary hover:bg-red-100" : "bg-main-900 hover:bg-main-900/65"
              )}
            >
              {"Okna a dveře SYNEGO"}
            </div>
            <div className="bg-white w-1 h-[46px] desktop:h-[38px] small:w-[230px] small:h-1" />
            <div
              onClick={() => setKind(!kind)}
              className={clsx(
                "cursor-pointer text-white text-[20px] font-700 p-2 w-[308px] text-right desktop:w-[230px] desktop:text-[15px]",
                kind ? "bg-primary hover:bg-red-100" : "bg-main-900 hover:bg-main-900/65"
              )}
            >
              {"Okna a dveře Briliant-Design"}
            </div>
          </div>
          <Container className="px-32 desktop:px-12 tablet:px-8 mobile:px-6 final:px-4">
            {!kind ? (
              <div className="pt-[200px] tablet:pt-[100px]">
                <KindCard
                  show={false}
                  title="Okna SYNEGO"
                  description="SYNEGO - tento okenní systém zajišťuje příjemné teplo a aktivně přispívá, vzhledem k téměř o 45 % vyšší tepelné izolaci, k ochraně životního prostředí."
                  sublabel="Nové vnímání oken. Pro moderní život."
                  kindlabel="Produkty SYNEGO"
                />
              </div>
            ) : (
              <div className="pt-[200px]  tablet:pt-[100px] float-end">
                <KindCard
                  show={false}
                  title="Okna Brillant-Design"
                  description="Brillant-Design - tento okenní systém nabízí obrovský výběr barev a tvarů, excelentní zvukovou izolaci a díky perfektní tepelné izolaci Vám zajistí skvělé domáci pohodlí."
                  sublabel="Designová okna pro vaše bydlení."
                  kindlabel="Produkty Brillant-Design"
                />
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BannerView;
