import { HeaderContainer, LogoStyle } from "./styled";

import Logo from "../../assets/732c39aa-24d5-441e-ac73-c859b163ee2b-removebg-preview 1.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoStyle src={Logo} alt="Logo" />
    </HeaderContainer>
  );
};
