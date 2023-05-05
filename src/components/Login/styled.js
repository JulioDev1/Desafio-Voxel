import styled from "styled-components";
export const Input = styled.input`
  border: 1px solid #cccc;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  padding-left: 30px;
  ::placeholder {
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
  }
`;
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 80%;
`;
export const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  padding-left: 30px;
  color: white;
  background-color: black;
  font-family: "Work Sans", sans-serif;
  height: 40px;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  border: 1px solid #cccc;
  border-radius: 5px;
  height: 350px;
`;
export const TitleContainer = styled.div`
  display: flex-start;
  width: 80%;
`;
export const Title = styled.h1`
  color: black;
  font-size: 20px;
`;
export const Subtitle = styled.p`
  color: #cccc;
  padding-bottom: 10px;
`;
export const IconEmail = styled.div`
  position: relative;
  right: 140px;
  top: 74px;
`;
export const IconPassword = styled.div`
  position: relative;
  right: 140px;
  top: 97px;
`;
