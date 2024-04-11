import { BannerView, ProductView, ScrollTopView } from "@/views/windows";
import { DESIGNS, PRODUCTS } from "@/utils";
import { useKind } from "@/contexts/KindProvider";
import { useEffect, useState } from "react";

export default function Windows() {
  const { kind } = useKind();

  const [Package, setPackage] = useState<any>([]);

  useEffect(() => {
    if (!kind) {
      setPackage(PRODUCTS);
    } else {
      setPackage(DESIGNS);
    }
  }, [kind]);

  return (
    <>
      <BannerView />
      {/* <ConstructionView />
      <ConstructionView />
      <ConstructionView /> */}
      {Package.map((item: any, index: number) => (
        <ProductView key={`product-${index}`} item={item} />
      ))}

      <ScrollTopView />
    </>
  );
}
