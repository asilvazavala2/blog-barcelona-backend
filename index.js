//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { addPubsToDb } = require('./src/addPublicationsDb.js');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3002; // Cambiar el número del puerto a 3002

try {
  conn.sync({ force: false }).then(async () => {
  console.log('DB connected')
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
    addPubsToDb();
  })
});
} catch (error) {
    console.error('Error occurred during server start:', error);
  }