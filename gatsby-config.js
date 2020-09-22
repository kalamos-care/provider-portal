module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-cname',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Kalamos Care Provider Portal",
        short_name: "Kalamos Care",
        start_url: "/app",
        background_color: "#fff",
        theme_color: "#67568c",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "minimal-ui",
        icon: "src/images/k_fav_new_purple.png"
      // This path is relative to the root of the site.
      }
    }
  ],
  siteMetadata: {
    title: 'Kalamos Care Provider Portal',
    siteUrl: 'https://register.kalamos.care/',
    description: "A set of tools for remotely monitoring your patients' sexual health."
  },
};
