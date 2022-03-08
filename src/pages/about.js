// 第1步：导入React
import * as React from 'react'
import Layout from '../components/layout'

// 第2步：定义您的组件
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

// 第3步：导出组件
export default AboutPage
