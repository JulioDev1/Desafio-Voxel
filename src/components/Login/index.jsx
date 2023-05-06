import { useState } from "react";
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
  const [data, setData] = useState({ email: "", password: "" });

  const inputQuantityFilled = () => {
    let qtd = 0;
    const addValue = 50;
    if (data.email !== "") {
      qtd += addValue;
    }
    if (data.password !== "") {
      qtd += addValue;
    }
    return qtd;
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };

      return newData;
    });
  };

  console.log(inputQuantityFilled());

  return (
    <FormContainer>
      <TitleContainer>
        <Title>Bem vindo!</Title>
        <Subtitle>Entre para continuar</Subtitle>
      </TitleContainer>
      <FormContent>
        <InputContent>
          <Email />
          <Input
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={data.email}
            name="email"
          />
        </InputContent>
        <InputContent>
          <Password />
          <Input
            type="password"
            placeholder="Senha"
            onChange={handleChange}
            value={data.password}
            name="password"
          />
        </InputContent>
      </FormContent>

      <Button disabled={inputQuantityFilled() !== 100}>ENTRAR</Button>
      <AutomaticSign>
        <EnterGoogle>Entre com</EnterGoogle>
        <ButtonGoogle>
          G <Google>Gmail</Google>
        </ButtonGoogle>
      </AutomaticSign>
    </FormContainer>
  );
};
