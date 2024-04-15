import { ComponentProps } from "@/types";
import Header from "./header";
import Footer from "./footer";
import Contact from "./contact";
import Container from "@/components/Container";

export default function Layout({ children }: ComponentProps) {
  return (
    <>
      <Header />
      <div className="mt-[100px] desktop:mt-[86px]">{children}</div>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}
