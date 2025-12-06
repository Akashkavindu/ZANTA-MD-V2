
//Base by Akash kavindu
//WhatsApp: +94743404814
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Akash-kavindu
//   * Credit To Akash kavindu
//   * © 2025 © ZANTA-MD-V2.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Your session id hear",
PORT: process.env.PORT || "8000"
};
