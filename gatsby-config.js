module.exports = {
    siteMetadata: {
      title: `我的第一个盖茨比网站`,
        siteUrl: `https://myfirstgatsbysitemain09656.gatsbyjs.io`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
    ],
}