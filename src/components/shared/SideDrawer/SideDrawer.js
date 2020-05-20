import React from "react"

import DropDownClick from "../DropDownClick/DropDownClick"
import Button from "../Button/Button"

import * as S from "./styles"

import logoDark from "../../../assets/images/logo_dark.png"

// const menuItems = [
//   {
//     name: "Solutions",
//     children: [
//       {
//         name: "Solutions",
//         to: "/solutions",
//       },
//       {
//         name: "Neoflow",
//         to: "/solutions/neflow",
//       },
//       {
//         name: "MetalTrail",
//         to: "/solutions/metaltrail",
//       },
//       {
//         name: "QCAD",
//         to: "/solutions/qcad",
//       },

//       {
//         name: "Mavenstamp",
//         to: "/solutions/mavenstamp",
//       },
//     ],
//   },
//   {
//     name: "Service",
//     children: [],
//     to: "/service",
//   },
//   {
//     name: "Industries",
//     children: [
//       {
//         name: "Oil and Gas",
//         to: "/industries/oil-and-gas",
//       },
//     ],
//   },
//   {
//     name: "Company",
//     children: [
//       {
//         name: "About Us",
//         to: "/about",
//       },
//     ],
//   },
//   {
//     name: "Career",
//     children: [],
//     to: "/career",
//   },
// ]

const SideDrawer = ({ isOpen, closeDrawer, menuItems }) => {
  const getNavItem = item => {
    if (item.children.length > 0) {
      return (
        <DropDownClick key={item.name} item={item} isDrawerClosed={!isOpen} />
      )
    }
    return (
      <S.NavItem key={item.name}>
        <S.NavLink to={item.to}>{item.name}</S.NavLink>
      </S.NavItem>
    )
  }

  return (
    <S.SideDrawer isOpen={isOpen}>
      <S.Container>
        <S.Header>
          <S.Logo src={logoDark} alt="Mavennet logo" />
          <S.CloseButton type="button" onClick={closeDrawer} />
        </S.Header>
        <S.NavBar>
          <S.NavList>{menuItems.map(item => getNavItem(item))}</S.NavList>
        </S.NavBar>
        <S.ButtonContainer>
          <Button text="Get In Touch" to="/about" />
        </S.ButtonContainer>
      </S.Container>
    </S.SideDrawer>
  )
}

export default SideDrawer
