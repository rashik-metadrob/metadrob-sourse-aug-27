const fs=require('fs')
module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync("../server/cert/key.pem"),
      cert: fs.readFileSync("../server/cert/cert.pem"),
      //ca: fs.readFileSync("C:/Users/User/AppData/Local/mkcert/rootCA.pem"),
    },
    client: {
      // webSocketURL: "wss://localhost:8080/ws",
      // webSocketURL: "ws://curious-formerly-gnu.ngrok-free.app/ws",
      webSocketURL: "wss://192.168.17.1:8080/ws",
      //webSocketURL: "wss://curious-formerly-gnu.ngrok-free.app/ws",
      logging: 'verbose'
    },
    proxy: {
      "/v1": {
        target: "https://localhost:3000",
        secure: false,
        // bypass: function (req, res, proxyOptions) {
        //   if (req.headers.accept.indexOf('html') !== -1) {
        //     console.log('Skipping proxy for browser request.');
        //     return '/index.html';
        //   }
        // },
      },
      "/shopify": {
        target: "https://localhost:3000",
        secure: false,
      },
      "/uploads": {
        target: "https://localhost:3000",
        secure: false,
      },
    },
  },
};
