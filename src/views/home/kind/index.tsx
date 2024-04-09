import React from "react";
import Image from "next/image";

import RehuaBannerImg from "@/assets/rehau-banner.png";
import { KindCard } from "@/components/Card";

const KindView = () => {
  return (
    <div>
      <div className="bg-primary h-2" />
      <div className="relative h-[894px]">
        <Image src={RehuaBannerImg} fill alt="rehua-banner" />

        <div className="bg-black/50 absolute w-full h-full flex">
          <div className="w-1/2 flex items-center justify-end">
            <div className="w-fit pb-[150px] pr-[50px]">
              <KindCard
                title="Okna SYNEGO"
                description="SYNEGO - tento okenní systém zajišťuje příjemné teplo a aktivně přispívá, vzhledem k téměř o 45 % vyšší tepelné izolaci, k ochraně životního prostředí."
                sublabel="Nové vnímání oken. Pro moderní život."
                kindlabel="Produkty SYNEGO"
              />
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-start">
            <div className="w-fit pt-[150px] pl-[50px]">
              <KindCard
                title="Okna Brillant-Design"
                description="Brillant-Design - tento okenní systém nabízí obrovský výběr barev a tvarů, excelentní zvukovou izolaci a díky perfektní tepelné izolaci Vám zajistí skvělé domáci pohodlí."
                sublabel="Designová okna pro vaše bydlení."
                kindlabel="Produkty Brillant-Design"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KindView;
