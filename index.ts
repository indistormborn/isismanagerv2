const HttpServer = require('/src/api/HttpServer');

const config = require('/resources/config.json');

const server = new HttpServer();

new Promise(async (resolve, reject) => {
  try {
    await server.init(config);
    resolve();
  } catch (e) {
    reject(e)
  }
}).then(() => {
  console.log('Sistema iniciado normalmente')
}).catch(reason => {
  console.error('Houve um problema ao iniciar o sistema:', reason)
});
