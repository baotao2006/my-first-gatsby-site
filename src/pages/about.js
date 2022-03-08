// 第1步：导入React
import * as React from 'react'
import { Link } from 'gatsby'

// 第2步：定义你的组件
const AboutPage = () => {
    return (
        <main>
            <title>About Me</title>
            <h1>About Me</h1>
            <Link to="/">Back to Home</Link>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    )
}
// 第3步：导出你的组件
export default AboutPage
