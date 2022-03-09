// 第1步：导入React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// 第2步：定义您的组件
const IndexPage = () => {
    return (
        <Layout pageTitle="首页">
            <p>我是按照Gatsby教程来做的。</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
                src="../images/clifford.jpg"
            />
        </Layout>

    )
}

// 第3步：导出组件
export default IndexPage
