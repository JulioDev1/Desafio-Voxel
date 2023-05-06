import { useState } from "react";

import { Email } from "../../assets/Email";
import { Password } from "../../assets/password";
import { Error } from "../../assets/Error";

import {
  AutomaticSign,
  Button,
  ButtonGoogle,
  EnterGoogle,
  ErrorContainer,
  ErrorMensage,
  FormContainer,
  FormContent,
  Google,
  Input,
  InputContent,
  Subtitle,
  Title,
  TitleContainer,
} from "./styled";
import { validateEmail } from "../../utils/regex";

export const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [isError, setError] = useState(false);

  const validate = () => {
    if (!validateEmail.test(data.email)) {
      setError(true);
    } else if (validateEmail.test(data.email)) {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    data.email = "";
    data.password = "";
  };

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
  console.log(isError);
  return (
    <FormContainer onSubmit={handleSubmit}>
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
        {isError ? (
          <ErrorContainer>
            <Error />
            <ErrorMensage>Padrão de E-mail não existente</ErrorMensage>
          </ErrorContainer>
        ) : (
          <></>
        )}
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
