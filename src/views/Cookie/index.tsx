import Container from "@/components/Container";
import React from "react";

const ContentView = () => {
  return (
    <Container className="px-32 desktop:px-12 tablet:px-8 mobile:px-6 final:px-4">
      <div className="flex flex-col w-full space-y-24 items-center small:space-y-14 py-[200px] mac:py-[150px] desktop:py-[100px] small:py-[50px]">
        <p className="font-700 text-[70px] text-primary mac:text-[50px] tablet:text-[30px]">
          {"Zásady ochrany osobních údajů"}
        </p>

        <div className="flex flex-col space-y-5">
          <p className="font-700 text-[40px] text-primary mac:text-[30px] tablet:text-[25px]">
            {"Co to jsou cookies?"}
          </p>
          <p className="text-[25px] mac:text-[20px] tablet:text-[15px]">
            {
              "Soubory cookies a další technologie nám pomáhají zlepšovat naše služby, pomáhají nám analyzovat výkon webu a umožňují nám pomáhat zákazníkům ve výběru správného zboží. V nastavení si můžete vybrat, které cookies můžeme používat. Svůj souhlas můžete kdykoliv odvolat."
            }
          </p>
        </div>
        <div className="flex flex-col space-y-5">
          <p className="font-700 text-[40px] text-primary mac:text-[30px] tablet:text-[25px]">{"Analytické"}</p>
          <p className="text-[25px] mac:text-[20px] tablet:text-[15px]">
            {
              "Statistické cookies používáme k vyhodnocování výkonu našeho webu a reklamních kampaní. Pomocí cookies určujeme počet návštěv, zdroje návštěvnosti a chování zákazníků na našem webu – např. informace o tom, co na webu hledáte a které informace jsou pro vás nejdůležitější. Na základě těchto dat můžeme provádět optimalizaci webu a vylepšovat naše služby."
            }
          </p>
        </div>
        <div className="flex flex-col space-y-5">
          <p className="font-700 text-[40px] text-primary mac:text-[30px] tablet:text-[25px]">{"Preferenční"}</p>
          <p className="text-[25px] mac:text-[20px] tablet:text-[15px]">
            {
              "Díky preferenčním cookies vám můžeme přizpůsobit obsah našich stránek a zobrazovat služby, o které máte zájem. Procházení webu vám ulehčíme tím, že si budeme pamatovat vaše předvolby. Používání webu bude pro vás snazší a pohodlnější."
            }
          </p>
        </div>
        <div className="flex flex-col space-y-5">
          <p className="font-700 text-[40px] text-primary mac:text-[30px] tablet:text-[25px]">{"Marketingové"}</p>
          <p className="text-[25px] mac:text-[20px] tablet:text-[15px]">
            {
              "Marketingové cookies využívají naši partneři k zobrazování relevantní reklamy na základě vašich preferencí. Tato personalisovaný obsah se může zobrazovat na webech třetích stran, které využívají naši partneři k zobrazování reklamních sdělení. Pokud nedáte souhlas s použitím marketingových cookies, objem reklamy zůstane stejný, ale bude se vám zobrazovat nezajímavý obsah."
            }
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ContentView;
