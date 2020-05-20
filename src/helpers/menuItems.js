import { SERVICE, COMPANY } from "../consts"

const getMenuItems = items => {
  const { industries, solutions } = items

  const industriesObj = {
    name: "Industries",
    children: industries.nodes.map(item => ({
      name: item.frontmatter.title,
      to: item.fields.slug,
    })),
  }

  const solutionsObj = {
    name: "Solutions",
    children: solutions.nodes.map(item => ({
      name: item.frontmatter.title,
      to: item.fields.slug,
    })),
  }

  const values = {
    industries: { ...industriesObj },
    solutions: { ...solutionsObj },
  }

  return values
}

export const getHeaderItems = items => {
  const { industries, solutions } = getMenuItems(items)

  const headerItems = {
    solutions,
    service: {
      name: SERVICE.name,
      to: "/service",
      children: [],
    },
    industries,
    company: { ...COMPANY },
    career: {
      name: "Career",
      to: "/career",
      children: [],
    },
  }

  return headerItems
}

export const getSideDrawerItems = items => {
  const headerItems = getHeaderItems(items)

  headerItems.solutions.children = [
    {
      name: "Solutions",
      to: "/solutions",
    },
    ...headerItems.solutions.children,
  ]

  headerItems.industries.children = [
    {
      name: "Industries",
      to: "/industries",
    },
    ...headerItems.industries.children,
  ]

  return headerItems
}

export const getFooterItems = items => {}
