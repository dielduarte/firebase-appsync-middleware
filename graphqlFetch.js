const print = require('graphql/language/printer');
const fetch = require('node-fetch');

const graphqlFetch = body => {
  return fetch(process.env.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY
    },
    body: body,
    cache: 'reload'
  }).then(response => response.json());
};

module.exports = graphqlFetch;
