import styled from "styled-components";
export const Input = styled.input`
  border: 1.8px solid #ccc;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  padding-left: 25px;
  font-family: "Work San Regular", sans-serif;
  :focus {
    outline: none;
    border: 1px solid #ffd600;
    ::-webkit-input-placeholder {
      color: #ffd600;
    }
  }
  ::-webkit-input-placeholder {
    font-weight: 500;
  }
`;
export const InputContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    left: 5px;
  }
  gap: 20px;
`;
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
`;
export const Button = styled.button`
  width: 80%;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  color: white;
  background-color: #ffd600;
  font-family: "Work Sans", sans-serif;
  height: 40px;
  cursor: pointer;
  :disabled {
    background-color: #ffef98;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  border: 2px solid #cccc;
  gap: 10px;
  width: 80%;
  border-radius: 10px;
  height: 400px;
`;
export const TitleContainer = styled.div`
  display: flex-start;
  width: 80%;
  height: 20px;
  margin-bottom: 90px;
`;
export const Title = styled.h1`
  color: black;
  font-size: 20px;
`;
export const EnterGoogle = styled.span`
  font-size: 15px;
  width: 100%;
  font-family: "Work Sans", sans-serif;
`;
export const Subtitle = styled.span`
  color: #cccc;
`;
export const AutomaticSign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 30px;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
`;
export const ButtonGoogle = styled.button`
  background: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 30px;
  font-family: "Poppins", sans-serif;
  border: 1.6px solid #ff0000;
  border-radius: 5px;
  width: 8rem;
  gap: 20px;
  color: #ff0000;
`;
export const Google = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;
