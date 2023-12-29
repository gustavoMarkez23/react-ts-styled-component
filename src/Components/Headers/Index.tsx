import styled from "styled-components";
import InputText from "../../InputText/Index";

const HeaderStyled = styled.header`
  padding: 3.75rem 0;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 13.25rem;
  }
`

function Header() {
  return (
    <HeaderStyled>
       <img src="/images/logo.png" alt=""/>
       <InputText/>
    </HeaderStyled>
  );
}

export default Header;