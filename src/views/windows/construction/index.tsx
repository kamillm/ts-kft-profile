import React from "react";
import Container from "@/components/Container";

import ProductImg from "@/assets/product.png";
import Image from "next/image";

const Construction = () => {
  return (
    <div>
      <div className="bg-primary py-5">
        <Container className="px-32 desktop:px-12 tablet:px-8 mobile:px-6 final:px-4">
          <p className="font-600 text-[40px] text-white">{"Udržitelná výstavba – bez omezování pohodlí"}</p>
          <p className="font-400 text-[20px] text-white max-w-[1432px]">
            {
              "Instalace oken z profilů SYNEGO má hned dvě výhody. Úsporu nákladů na vytápění během doby jejich životnosti a dobrý pocit z užívání produktu, který přispívá k ochraně životního prostředí. "
            }
          </p>
        </Container>
      </div>
      <Container className="px-32 desktop:px-12 tablet:px-8 mobile:px-6 final:px-4">
        <div className="px-20 py-10 flex flex-col space-y-10">
          <div>
            <p className="font-600 text-[30px] text-black">{"Dobrý pocit"}</p>
            <p className="font-400 text-[20px] text-black">
              {
                "SYNEGO okna od REHAU nesou značku EcoPuls, což dokládá, že je v okenním profilu obsaženo více než 40% recyklátu. Společnost REHAU stojí za tímto pozitivním přístupem k ochraně životního prostředí. Užijte se pohodlí, které vám okna dodají spolu s dobrým pocitem, že jste si vybrali udržitelný produkt."
              }
            </p>
          </div>

          <div className="flex items-center space-x-28 pt-10">
            <div className="max-w-[780px]">
              <p className="font-600 text-[30px] text-black">{"Dvojnásobně udržitelný"}</p>
              <p className="font-400 text-[20px] text-black">
                {
                  "Vynikající tepelně izolační vlastnosti také zajišťují, že s okny SYNEGO dlouhodobě přispíváte k ochraně životního prostředí. Po instalaci do obytného prostoru dosahují až o 45 % vyšší tepelné izolace ve srovnání s běžnými standardními okny*. Tak šetříte energií, zajišťujete příjemné teplo a zároveň také zvyšujete hodnotu vaší nemovitosti."
                }
                <br />
                <br />
                {
                  "U oken SYNEGO, v provedení se středovým těsněním (MD), byla podle směrnic ift potvrzena vhodnost instalace také do pasivních domů."
                }
              </p>
            </div>
            <div className="w-[305px] h-[305px]">
              <Image src={ProductImg} width={305} height={305} alt="product" />
            </div>
          </div>
          <p className="font-400 text-[12px] text-main-900">
            {
              "* Minimální požadavek na standardní okna podle vyhlášky o úsporách energie 2014 (EnEV) je Uw = 1,3 W/(m2K), nejlepší hodnota oken SYNEGO se středovým těsněním je Uw = 0,76 W/(m2K)"
            }
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Construction;
