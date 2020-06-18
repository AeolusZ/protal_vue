// vue.config.js
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        // 代理
        // proxy: {
        // },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
      }
}