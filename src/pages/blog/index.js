import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="我的博客文章">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <Link to={`/blog/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                        <p>发布时间：{node.frontmatter.date}</p>
                    </article>
                ))
            }

        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                slug
            }
        }
    }
`



export default BlogPage
