require('dotenv').config();

const { json } = require('micro');
const { applyMiddleware } = require('micro-mw');

const graphqlFetch = require('./graphqlFetch');
const checkFireBaseToken = require('./middlewares/checkFireBaseToken');

const microAPi = applyMiddleware([checkFireBaseToken], async (req, res) => {
  const body = await json(req);
  const result = await graphqlFetch(body);

  return result;
});

module.exports = microAPi;
