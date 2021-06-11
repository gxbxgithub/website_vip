
const NODE_ENV = process.env.NODE_ENV;
const fs = require('fs');
const path = require('path');
const confDir = path.resolve(__dirname);
const appDir = path.resolve(confDir, '../../');// 项目根目录
const localSettingsPath = path.join(confDir, "local_settings.json");// 本地配置文件的路径

exports.remoteUrl = "http://39.107.29.30:5999"
exports.appName = "web_api_dev"
exports.appDir = appDir;// 项目的根目录
exports.port = 3200;
exports.serverId = process.pid;

// 以下将使用本地的配置来替换上面的配置
const local_settings = JSON.parse(fs.readFileSync(localSettingsPath));

for (let attrName in local_settings) {
    exports[attrName] = local_settings[attrName];
}

