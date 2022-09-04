module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Quattro Vidrios`,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: "Quattro Vidrios",
      short_name: "Quattro",
      start_url: "/",
      icon: "src/images/ISOO.jpeg",
    },
  }]
};
