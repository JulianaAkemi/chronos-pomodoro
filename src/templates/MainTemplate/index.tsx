import { useEffect } from "react";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { Content } from "../Content";
import { showMessage } from "../../adapters/showMessage";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  useEffect(() => {
    return () => {
      showMessage.dismiss();
    };
  }, []);

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Content>{children}</Content>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
