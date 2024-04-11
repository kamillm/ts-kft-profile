import { FeedBackCard } from "@/components/Card";

const referenceData1 = [
  {
    id: 1,
    title: "Matěj Beran",
    description:
      "Když jsme se rozhodovali pro nová okna, bylo pro nás důležité najít firmu, na kterou se můžeme spolehnout. Tato firma splnila všechna naše očekávání a jsme rádi, že jsme se rozhodli pro ni."
  },
  {
    id: 2,
    title: "Jakub Zacharda",
    description:
      "Vyhledávali jsme spolehlivou firmu pro výměnu oken a volba padla na tuto. Jsme velmi spokojeni s profesionálním přístupem a kvalitou dodaných produktů."
  },
  {
    id: 3,
    title: "Martin Holý",
    description:
      "Po instalaci nových oken naší firmou jsme zaznamenali nejen úsporu energie, ale také vylepšení estetiky našeho bydlení. Doporučujeme!"
  },
  {
    id: 4,
    title: "Šárka Němcová",
    description:
      "Díky novým oknům od této společnosti se nám podařilo výrazně snížit náklady na vytápění. Jsme rádi, že jsme se rozhodli pro tuto investici."
  },
  {
    id: 5,
    title: "Jakub Němec",
    description:
      "Okna od této firmy jsme si nechali nainstalovat do našeho nového rodinného domu a jsme nadmíru spokojeni. Kvalita je skvělá a cena byla velmi přijatelná."
  }
];

const ReferenceView = () => {
  return (
    <div>
      <div className="bg-primary">
        <p className="text-white font-700 text-[50px] text-center mac:text-[45px] tablet:text-[40px] mobile:text-[30px]">
          {"Naši spokojení zákazníci"}
        </p>
      </div>

      <div className="flex flex-col space-y-10 p-20">
        <div className="flex justify-center flex-wrap px-20 desktop:px-0">
          {referenceData1.map((item) => (
            <div className="p-5 mobile:px-0" key={`feedback-${item.id}`}>
              <FeedBackCard {...item} />
            </div>
          ))}
        </div>
        {/* <div className="flex space-x-10 justify-center">
          {referenceData2.map((item) => (
            <FeedBackCard key={`feedback-${item.id}`} {...item} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ReferenceView;
