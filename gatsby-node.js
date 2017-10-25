const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    const activityTemplate = path.resolve(`src/templates/activity.js`);
    return graphql(`
        {
            allActivitiesJson {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }
        result.data.allActivitiesJson.edges.forEach(({ node }) => {
            createPage({
                path: node.id,
                component: activityTemplate,
                context: {
                    id: node.id
                }
            });
        });
    });
};
