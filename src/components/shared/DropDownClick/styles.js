import { Link } from "gatsby"
import styled from "styled-components"

export const DropDown = styled.div``

export const Parent = styled.button`
  color: var(--c-p-haiti);
  font-family: Barlow;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 29px;
  text-align: left;
  cursor: pointer;

  width: 100%;
  height: 100%;
  padding: 0.84em 0.33em;
  border-bottom: 1px solid var(--c-p-selago-dark);

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContentList = styled.ul`
  display: ${props => (props.isOpen ? "block" : "none")};
  padding: 1.25em 0.5em 0.375em;
`

export const ListItem = styled.li``

export const ItemLink = styled(Link)`
  color: var(--c-p-haiti);
  font-family: Barlow;
  font-size: 1rem;
  font-weight: 500;
  line-height: 27px;

  height: 100%;
  width: 100%;

  margin-bottom: 0.84375em;
`

export const ArrowRight = styled.img`
  width: 12px;
`
