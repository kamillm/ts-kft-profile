import React from "react";
import Image from "next/image";

import ItemImg from "@/assets/item.png";
import Container from "@/components/Container";
import { DownArrowIcon } from "@/assets/Icons";

const Product = () => {
  return (
    <Container className="px-32 desktop:px-12 tablet:px-8 mobile:px-6 final:px-4">
      <div className="p-20">
        <div className="flex space-x-10">
          <div className="border-2 border-primary w-[553px] h-[553px]  shrink-0">
            <Image src={ItemImg} width={553} height={553} alt="item" />
          </div>

          <div className="flex flex-col space-y-5 justify-end ">
            <p className="font-600 text-[40px] text-black">{"Okna SYNEGO"}</p>
            <p className="font-600 text-[25px] text-black">
              {"Systém PVC se stavební hloubkou 80 mm a hodnotou Uf až 0,94 W/m²K"}
            </p>
            <p className="font-400 text-[20px] text-black">
              {
                "Okna SYNEGO jsou nejlepší volbou pro zákazníky, které zajímá energeticky úsporný provoz. Vedle hodnoty Uf činící až 0,94 W/m²K se tento systém prosazuje svojí úsporností a různorodými designovými variantami."
              }
            </p>

            <div className="bg-primary text-white p-5">
              <p className="text-[30px] font-700">{"Vaše výhody:"}</p>
              <ul className="list-disc pl-10">
                <li className="p-2">
                  {"Více místa ve skladu, neboť lze u systému SYNEGO používat dvě varianty těsnění."}
                </li>
                <li className="p-2">{"Široká paleta profilů"}</li>
                <li className="p-2">
                  {
                    "V nabídce ve všech barevných odstínech i s novým sklolaminátovým povrchem KALEIDO VISION pro interiérový nábytek"
                  }
                </li>
                <li className="p-2">{"Ekologický, recyklovatelný systém"}</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="relative font-600 text-black text-[30px] text-center py-10 underline decoration-primary">
          {"Technická data"}
          <div className="absolute left-1/2 -translate-x-1/2">
            <DownArrowIcon />
          </div>
        </p>

        <div className="flex space-x-10">
          <table className="w-1/2">
            <thead>
              <tr>
                <td className="row-span-2 text-danger text-[25px] font-600 text-primary">{"Všeobecné informace"}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Pohledová šířka rámu/křídla"}</td>
                <td>{"109 mm až 175 mm mm"}</td>
              </tr>
              <tr>
                <td>{"Pohledová šířka - středového spojení"}</td>
                <td>{"114 mm až 218 mm"}</td>
              </tr>
              <tr>
                <td>{"Stavební hloubka"}</td>
                <td>{"80 mm"}</td>
              </tr>
              <tr>
                <td>{"Počet komor rám/křídlo"}</td>
                <td>{"7/6"}</td>
              </tr>
              <tr>
                <td>{"Tloušťka skla"}</td>
                <td>{"max. 51 mm"}</td>
              </tr>
              <tr>
                <td>{"Těsnící systém"}</td>
                <td>
                  {"AD: 2 dorazová těsnění"}
                  <br />
                  {"MD: 2 dorazová těsnění, 1 středové těsnění"}
                </td>
              </tr>
              <tr>
                <td>{"Tvar profilu"}</td>
                <td>{"Plošně odsazené křídlo, poloplošně odsazené oblé křídlo"}</td>
              </tr>
            </tbody>
          </table>

          <table className="w-1/2">
            <thead>
              <tr>
                <td className="row-span-2 text-danger text-[25px] font-600 text-primary">{"Vlastnosti"}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Součinitel prostupu tepla Uf (ČSN EN 12412-2)"}</td>
                <td>{"až 0,94 W/m²K"}</td>
              </tr>
              <tr>
                <td>{"Vzduchová neprůzvučnost Rw (ČSN EN ISO 10140-2)"}</td>
                <td>{"Rw až 47 dB"}</td>
              </tr>
              <tr>
                <td>{"Odolnost proti vloupání (ČSN EN 1627)"}</td>
                <td>{"do třídy RC3"}</td>
              </tr>
              <tr>
                <td>{"Odolnost proti zatížení větrem (ČSN EN 12210)"}</td>
                <td>{"do třídy B5"}</td>
              </tr>
              <tr>
                <td>{"Vodotěsnost (ČSN EN 12208)"}</td>
                <td>{"do třídy 9A"}</td>
              </tr>
              <tr>
                <td>{"Průvzdušnost (ČSN EN 12207)"}</td>
                <td>{"do třídy 4"}</td>
              </tr>
              <tr>
                <td>{"Průvzdušnost (ČSN EN 12207)"}</td>
                <td>{"třída 1"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Product;
