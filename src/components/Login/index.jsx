import { Email } from "../../assets/Email";
import { Password } from "../../assets/password";
import {
  AutomaticSign,
  Button,
  ButtonGoogle,
  EnterGoogle,
  FormContainer,
  FormContent,
  Google,
  Input,
  InputContent,
  Subtitle,
  Title,
  TitleContainer,
} from "./styled";

export const Login = () => {
  return (
    <FormContainer>
      <TitleContainer>
        <Title>Bem vindo!</Title>
        <Subtitle>Entre para continuar</Subtitle>
      </TitleContainer>
      <FormContent>
        <InputContent>
          <Email />
          <Input type="text" placeholder="Email" />
        </InputContent>
        <InputContent>
          <Password />
          <Input type="text" placeholder="Senha" />
        </InputContent>
      </FormContent>

      <Button>ENTRAR</Button>
      <AutomaticSign>
        <EnterGoogle>Entre com</EnterGoogle>
        <ButtonGoogle>
          G <Google>Gmail</Google>
        </ButtonGoogle>
      </AutomaticSign>
    </FormContainer>
  );
};
