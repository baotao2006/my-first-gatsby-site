import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>未找到</title>
      <h1 style={headingStyles}>页面没有找到</h1>
      <p style={paragraphStyles}>
        抱歉{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        我们找不到您要找的东西。
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            尝试在<code style={codeStyles}>src/pages/</code>文件夹中创建一个页面。
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">返回到首页</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
