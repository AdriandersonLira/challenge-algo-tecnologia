const connection = require('../database/connection');
const jwt = require('jsonwebtoken');
const verificationConfig = require('../config/verification');

module.exports = {
  async authentication(request, response) {
    const { email, password } = request.body;

    const user = await connection('users')
      .where( 'email', email)
      .select('*') 

    if (user.length == 0)
      return response.status(400).json({ error: 'Usuario não cadastrado.'});

    if (user[0].password != password)
      return response.status(400).json({ 
        error: 'Senha Incorreta, verifique seus dados e tente novamente'
      });

    const token = jwt.sign({ id: user[0].id, admin: user[0].admin }, verificationConfig.secret, {
      expiresIn: 86400,
    });
    
    response.send({ user: {
      name: user[0].name,
    }, token: token });
  }
}