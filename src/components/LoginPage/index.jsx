import { Header } from "../Header";
import { Login } from "../Login";
import { LoginContainer, PageContainer } from "./styled";

export const LoginPage = () => {
  return (
    <PageContainer>
      <Header />
      <LoginContainer>
        <Login />
      </LoginContainer>
    </PageContainer>
  );
};
