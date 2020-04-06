module.exports = {
  async verification(request, response) {
    response.send({ 
      id: request.userId, 
      admin: request.userAdmin
    });
  }
}