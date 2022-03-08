import * as React from 'react'
// 第1步：导入useStaticQuery钩子hook和graphql标签tag
import { useStaticQuery, graphql } from 'gatsby'
const Header = () => {
    /* 第2步：使用useStaticQuery钩子和graphql标签
      来查询query数据（这个查询query在构建时build time运行）*/
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <header>
            {/* 第3步：在你的组件中使用这个数据data */}
            <h1>{ data.site.siteMetadata.title }</h1>
        </header>
    )
}
export default Header
