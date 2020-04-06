const connection = require('../database/connection');

module.exports = {
  async index(resquest, response) {
      const users = await connection('users').select('*');
      return response.json(users);
  },
  
  async create(request, response) {
    const data = request.body;
    await connection('users').insert(data);
    return(response.json({}));
  },
}