// 第1步：导入React
import * as React from 'react'
import { Link } from 'gatsby'

// 第2步：定义您的组件
const IndexPage = () => {
  return (
      <main>
        <title>Home Page</title>
        <h1>Welcome to my Gatsby site!</h1>
        <Link to="/about">About</Link>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </main>
  )
}
// 第3步：导出组件
export default IndexPage
