// Importando o módulo Application do app.js
const { app } = require('./app');

// Importando as configurações do Web Server
const webServer_configs = require('./configs/webServer.json');

// Loop para ouvir conexões HTTP nas portas presentes nas configurações do Web Server
// "Para cada porta no arquivo de configurações do Web Server, abra um Web Server"
for (const webServer_Port of webServer_configs.ports) {
    app.listen(webServer_Port, () => {
        console.log(`[WS] Web Server listening on port ${webServer_Port} | http://${webServer_configs.address}:${webServer_Port}`)
    })
}
