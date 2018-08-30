module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve:"gatsby-livechat-rocket-chat",
    options: {
      key: "<YOUR_API_KEY_HERE>",
    }
  }
],
}
