import styled from "styled-components"
import ListItem from "./ListItem/Index"

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 13.25rem;
`

function SideBar() {
  return (
    <aside>
      <nav>
        <StyledList>
          <ListItem 
              activeItem="public/icons/home-ativo.png" 
              inactiveItem="public/icons/home-inativo.png"
              active={true}
            >INICIO</ListItem>
          <ListItem 
              activeItem="public/icons/mais-vistas-ativo.png" 
              inactiveItem="public/icons/mais-vistas-inativo.png"
          >MAIS VISTAS</ListItem>
        </StyledList>
      </nav>
    </aside>
  )
}

export default SideBar