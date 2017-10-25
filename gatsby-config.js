module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`
    },
    plugins: [
        `gatsby-plugin-react-next`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/data/activities.json`
            }
        },
        `gatsby-transformer-json`
    ]
};
