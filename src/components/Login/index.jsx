import {
  Button,
  FormContainer,
  FormContent,
  IconEmail,
  IconPassword,
  Input,
  Subtitle,
  Title,
  TitleContainer,
} from "./styled";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";

export const Login = () => {
  return (
    <FormContainer>
      <TitleContainer>
        <Title>Bem vindo!</Title>
        <Subtitle>Entre para continuar</Subtitle>
      </TitleContainer>
      <FormContent>
        <IconEmail>
          <HiOutlineMail color="#CCCC" />
        </IconEmail>
        <IconPassword>
          <MdLockOutline color="#CCC" />
        </IconPassword>
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Senha" />
        <Button>Login</Button>
      </FormContent>
    </FormContainer>
  );
};
