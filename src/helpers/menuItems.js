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
    solutions: { ...solutions, to: "/solutions" },
    service: {
      name: SERVICE.name,
      to: "/service",
      children: [],
    },
    industries: { ...industries, to: "/industries" },
    company: { ...COMPANY, to: "/about" },
    career: {
      name: "Career",
      to: "/career",
      children: [],
    },
  }

  console.log(headerItems)

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

export const getFooterItems = items => {
  const { industries, solutions } = getMenuItems(items)
  const company = { ...COMPANY }
  const service = { ...SERVICE }

  solutions.children = [
    {
      name: "Solutions",
      to: "/solutions",
    },
    ...solutions.children,
  ]

  industries.children = [
    {
      name: "Industries",
      to: "/industries",
    },
    ...industries.children,
  ]

  company.children = [
    {
      name: "Company",
      to: "/about",
    },
    ...company.children,
  ]

  service.children = [
    {
      name: "Service",
      to: "/service",
    },
    ...service.children,
  ]

  const footerItems = {
    solutions,
    service,
    industries,
    company,
  }

  return footerItems
}
