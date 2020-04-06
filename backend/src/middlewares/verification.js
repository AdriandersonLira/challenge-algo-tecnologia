const jwt = require('jsonwebtoken');
const verificationConfig = require('../config/verification.json');

module.exports = (request, response, next) => {
  const sessionHeader = request.headers.authorization;

  if (!sessionHeader)
    return response.status(401).send({ error: 'Token Inválido' });

  const parts = sessionHeader.split(' ');

  if (!parts.length === 2)
    return response.status(401).send({ error: 'Error non Token' })

  const [ scheme , token ] = parts;

  if (!/^Bearer$/i.test(scheme))
    return response.status(401).send({ error: 'Token mal formatado'})

  jwt.verify(token, verificationConfig.secret, (err, decoded) => {
    if (err) return response.status(401).send({ error: 'Token Inválido' });
    request.userId = decoded.id;
    request.userAdmin = decoded.admin;
    return next();
  });
};