module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve:"gatsby-livechat-rocket-chat",
    options: {
      url: "http://localhost:3000",
    }
  }
],
}
