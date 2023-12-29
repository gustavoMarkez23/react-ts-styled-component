import { ReactNode } from "react"
import styled from "styled-components"

type StyledListItemProps = {
  active: boolean
}
const StyledListItem = styled.li<StyledListItemProps>`
  font-size: 1.5rem;
  line-height: 1.8125rem;
  margin-bottom: 1.875rem;
  cursor: pointer;
  color: ${ props => props.active ? '#7b78e5' : '#d9d9d9'};
  font-family: ${ props => props.active ? 'GandhiSansBold' : 'GandhiSansRegular'};
  display: flex;
  align-items: center;
  gap: 1.375rem;
`
type Props = {
  activeItem: string 
  inactiveItem: string
  active?: boolean
  children: ReactNode
}
function ListItem({activeItem, children, inactiveItem, active = false}: Props) {
  return (
    <StyledListItem active={active}>
      <img src={active ? activeItem : inactiveItem} alt=""/>
      {children}
    </StyledListItem>
  );
}

export default ListItem;