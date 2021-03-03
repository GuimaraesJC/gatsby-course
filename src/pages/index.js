import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
          }
        }
      }
    }
  `)

  const PostList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {PostList.map(({
        node: {
          frontmatter: { background, category, date, description, title },
          fields: { slug }
        }
      }) => (
        <PostItem
          slug={slug}
          background={background}
          category={category}
          date={date}
          title={title}
          description={description}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
