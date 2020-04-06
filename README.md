# Aplicação de Teste da Algo Tecnologia
### Back-end
* Stack: NodeJS

* Banco de dados: SQLite

| Field    | Value   |
|----------|---------|
| id       | Integer |
| name     | String  |
| email    | String  |
| password | String  |
| admin    | Boolean |

* Comandos 👨‍💻
> Criação da pasta.
```
> mkdir backend
```
> Criação do package.json.
```
> npm init -y
```
> Instalação do express.
```
> npm install express
```
> Instalação do nodemon para executar o servidor e atulizar automaticamente.
```
> npm install nodemon
> npm start
```
> Instalação do knex para conexão e criação do banco de dados sqlite3.
[Knex](http://knexjs.org/)
```
> npm install knex
> npm install sqlite3
```
> Configurações de acesso ao Banco de dados.
```
> npx knex init
```
> Criando a migration users no banco de dados.
```
> npx knex migrate:make create_users
```
> Criando a table usario
```
> npx knex migrate:latest
```
> Instação do JWT
```
> npm install jsonwebtoken
```

### Front-end
* Stack: ReactJS

* Comandos 👨‍💻
> Criação da pasta.
```
> npx create-react-app frontend
> cd frontend
```
> Iniciar o servidor na porta 3000
```
> npm start
```
> Instalação do pacote de icons no projeto
```
> npm install react-icons
```
> Instalação do pacote de rotas
```
> npm install react-router-dom
```
> Instação do axios (Cliente HTTP)
```
> npm install axios
```