// import { Header } from "../Header";
import { Login } from "../Login";
import {
  Button,
  HeroContainer,
  LoginContainer,
  LoginRight,
  PageContainer,
  Text,
  Title,
} from "./styled";
import { Header } from "../Header";
export const LoginPage = () => {
  return (
    <PageContainer>
      <Header />
      <LoginContainer>
        <HeroContainer>
          <div>
            <Title>Bem Vindo</Title>
            <Text>Deseja expandir seu négocio ?</Text>
            <Button>Cadastre-se</Button>
          </div>
        </HeroContainer>
        <LoginRight>
          <Login />
        </LoginRight>
      </LoginContainer>
    </PageContainer>
  );
};
