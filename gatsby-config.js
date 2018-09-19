module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-126098691-1",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Vivek Nayyar',
    description: 'Full stack web developer',
    keywords: 'full stack, web enginner, portfolio, personal website',
    url: 'https://www.viveknayyar.in'
  }
};
