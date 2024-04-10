import { ComponentProps } from "@/types";
import Header from "./header";
import Footer from "./footer";
import Contact from "./contact";
import Container from "@/components/Container";

export default function Layout({ children }: ComponentProps) {
  return (
    <>
      <Header />
      {children}
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}
