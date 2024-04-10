import { Inter } from "next/font/google";
import { BannerView, ConstructionView, ProductView, ScrollTopView } from "@/views/windows";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <BannerView />
      <ConstructionView />
      <ConstructionView />
      <ConstructionView />
      <ProductView />
      <ProductView />
      <ProductView />
      {/* <ScrollTopView /> */}
    </>
  );
}
