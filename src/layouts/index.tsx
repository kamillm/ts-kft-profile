import { ComponentProps } from "@/types";
import Header from "./header";
import Footer from "./footer";
import Contact from "./contact";

export default function Layout({ children }: ComponentProps) {
  return (
    <>
      <Header />
      {children}
      <Contact />
      <Footer />
    </>
  );
}
