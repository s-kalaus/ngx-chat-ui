const { sign } = require('jsonwebtoken');

const tokenGetOne = async (_, __, { app }) => {
  return sign({
    userId: '1',
    exp: Math.floor(Date.now() / 1000) + app.config.get('token.ttl'),
  }, app.config.get('token.secret'));
};

module.exports = tokenGetOne;
