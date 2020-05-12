import React from "react"
import { graphql, Link } from "gatsby"

const Solutions = ({ data }) => {
  const { title, subtitle, solutions, previousWork } = data.pagesYaml

  const SolutionItem = ({ item }) => {
    const { title, description, image, slug, ctaImage } = item
    return (
      <li>
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={image} alt={title} />
        <Link to={slug}>
          <img src={ctaImage} alt={`${title} CTA`} />
        </Link>
      </li>
    )
  }

  const SolutionList = ({ solutions }) => (
    <ul>
      {solutions.map(item => (
        <SolutionItem key={item.title} item={item} />
      ))}
    </ul>
  )

  const PreviousWorkItem = ({ item }) => {
    const { title, image, link } = item
    return (
      <li>
        <h3>{title}</h3>
        <a href={link}>
          <img src={image} alt="title" />
        </a>
      </li>
    )
  }

  const PreviousWorkList = ({ previousWork }) => (
    <ul>
      {previousWork.map(item => (
        <PreviousWorkItem key={item.title} item={item} />
      ))}
    </ul>
  )

  return (
    <>
      <div className="jumbotron">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <main>
        <section className="solutions">
          <SolutionList solutions={solutions} />
        </section>
        <section className="previous-work">
          <h3>{previousWork.title}</h3>
          <PreviousWorkList previousWork={previousWork.previousWorkList} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  query {
    pagesYaml(identifier: { eq: "solutions" }) {
      title
      subtitle
      previousWork {
        title
        previousWorkList {
          image
          link
          title
        }
      }
      solutions {
        ctaImage
        description
        image
        slug
        title
      }
    }
  }
`

export default Solutions
