import styled from "styled-components";
export const PageContainer = styled.div`
  max-width: 100%;
  width: 100%;
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 58rem;
  @media (max-width: 820px) {
    height: 73rem;
  }
`;
export const HeroContainer = styled.div`
  background-color: black;
  font-family: "Poppins", sans-serif;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1050px) {
    display: none;
  }
`;
export const Title = styled.span`
  color: #ffd600;
  font-weight: 700;
  font-size: 30px;
`;
export const Button = styled.button`
  background: none;
  font-family: "Poppins", sans-serif;
  border-color: #ffd600;
  font-weight: 700;
  width: 200px;
  border-radius: 5px;
  height: 3rem;
  color: white;
  transition: 0.2s ease;
  :hover {
    background-color: #ffd600;
    color: white;
  }
`;
export const LoginRight = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  @media (max-width) {
    width: 100%;
  }
`;
export const Text = styled.p`
  font-size: 20px;
  color: white;
`;
