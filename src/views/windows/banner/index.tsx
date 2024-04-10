import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useKind } from "@/contexts/KindProvider";

import BannerImge from "@/assets/banner-image.png";
import { KindCard } from "@/components/Card";
import Container from "@/components/Container";

const BannerView = () => {
  const { kind, setKind } = useKind();

  const [type, setType] = useState(kind);

  useEffect(() => {
    setKind(type);
  }, [type]);

  return (
    <div id="product-banner">
      <div className="relative h-[808px]">
        <Image src={BannerImge} fill alt="home-banner" />

        <div className="bg-black/50 absolute w-full h-full py-20">
          <div className="flex items-center justify-center">
            <div
              onClick={() => setType(!type)}
              className={clsx(
                "cursor-pointer text-white text-[20px] font-700 p-2 w-[308px]",
                !type ? "bg-primary" : "bg-main-900"
              )}
            >
              {"Okna a dveře SYNEGO"}
            </div>
            <div className="bg-white w-1 h-[46px]" />
            <div
              onClick={() => setType(!type)}
              className={clsx(
                "cursor-pointer text-white text-[20px] font-700 p-2 w-[308px] text-right",
                type ? "bg-primary" : "bg-main-900"
              )}
            >
              {"Okna a dveře Briliant-Design"}
            </div>
          </div>
          <Container className="px-32 desktop:px-12 tablet:px-8 mobile:px-6 final:px-4">
            {!type ? (
              <div className="pt-[200px]">
                <KindCard
                  title="Okna SYNEGO"
                  description="SYNEGO - tento okenní systém zajišťuje příjemné teplo a aktivně přispívá, vzhledem k téměř o 45 % vyšší tepelné izolaci, k ochraně životního prostředí."
                  sublabel="Nové vnímání oken. Pro moderní život."
                  kindlabel="Produkty SYNEGO"
                />
              </div>
            ) : (
              <div className="pt-[200px] float-end">
                <KindCard
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