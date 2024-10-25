import { MdEmail, MdLock, MdPerson } from "react-icons/md";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import {
  Column,
  Container,
  WhiteText,
  GreenText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
  Subtitle2,
} from "./styles";

const Cadastro = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para voce aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change</SubtitleLogin>
            <form>
              <Input placeholder="Nome completo" leftIcon={<MdPerson />} />
              <Input placeholder="Senha" type="E-mail" leftIcon={<MdEmail />} />
              <Input
                placeholder="Password"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Criar minha conta" variant="secondary" />
            </form>
            <Column>
              <Subtitle2>
                Ao clicar em criar minha conta grátis, declaro que aceito as
                Politicas de Privacidade e os termos de uso da DIO.
              </Subtitle2>
              <Row>
                <WhiteText>
                  Já tenho conta <span> </span>
                </WhiteText>
                <GreenText>Fazer Login.</GreenText>
              </Row>
            </Column>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
