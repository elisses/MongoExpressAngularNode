const server = require('./config/server')//rotas
require('./config/database')
require('./config/routes')(server)//configuração do servidor