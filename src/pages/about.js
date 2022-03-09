// 第1步：导入React
import * as React from 'react'
import Layout from '../components/layout'

// 第2步：定义您的组件
const AboutPage = () => {
    return (
        <Layout pageTitle="关于我">
            <p>你好呀！ 我是这个网站的骄傲创建者，我用Gatsby建立了这个网站。</p>
        </Layout>
    )
}

// 第3步：导出组件
export default AboutPage
