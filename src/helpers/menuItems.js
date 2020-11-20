import { COMPANY } from "../consts"

const getMenuItems = items => {
  const { solutions } = items

  const solutionsObj = {
    name: "Solutions",
    children: solutions.nodes.map(item => ({
      name: item.frontmatter.title,
      to: item.fields.slug,
    })),
  }

  const values = {
    solutions: { ...solutionsObj },
  }

  return values
}

export const getHeaderItems = items => {
  const { solutions } = getMenuItems(items)

  const headerItems = {
    solutions: { ...solutions, to: "/solutions" },
    industries: {
      name: "Industries",
      to: "/industries",
      children: [],
    },
    approach: {
      name: "Approach",
      to: "/approach",
      children: [],
    },
    rAndD: {
      name: "R & D",
      to: "/r&d",
      children: [],
    },
    company: {
      name: "Company",
      to: "/about",
      children: [],
    },
    news: {
      name: "News & Media",
      to: "/news",
      children: [],
    },
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

  return headerItems
}

export const getFooterItems = items => {
  const { solutions } = getMenuItems(items)
  const company = { ...COMPANY }

  solutions.children = [
    {
      name: "Solutions",
      to: "/solutions",
    },
    ...solutions.children,
  ]

  company.children = [
    {
      name: "Company",
      to: "/about",
    },
    ...company.children,
  ]

  const footerItems = {
    solutions,
    company,
  }

  return footerItems
}
