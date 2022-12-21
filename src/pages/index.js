import * as React from "react"

const pageStyles = {
  maxWidth: "620px",
  margin: "0 auto",
  color: "#232129",
  padding: "2.5rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: "1.2rem",
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Новый
        <span style={headingAccentStyles}>сайт!</span>
      </h1>
      <p style={paragraphStyles}>
        Описание😎
      </p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
