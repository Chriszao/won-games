import {
  Wrapper,
  Title,
  Description,
  Logo,
  IllustrationStyled
} from './styles';

const Main = () => (
  <Wrapper>
    <Logo
      src="/img/icon-192.png"
      alt="Imagem de um átomo que representa a logo da biblioteca ReactJs."
    />
    <Title>Boiler plate para projetos Next.Js</Title>
    <Description>Typescript, ReactJS, NextJS e Styled Components</Description>
    <IllustrationStyled
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor em frente a tela com códigos"
    />
  </Wrapper>
);

export default Main;
