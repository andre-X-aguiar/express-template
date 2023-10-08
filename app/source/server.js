const { app } = require('./app');

const webServer_configs = require('./configs/webServer.json');

for (const webServer_Port of webServer_configs.ports) {
    app.listen(webServer_Port, () => {
        console.log(`[WS] Web Server listening on port ${webServer_Port} | http://${webServer_configs.address}:${webServer_Port}`)
    })
}
