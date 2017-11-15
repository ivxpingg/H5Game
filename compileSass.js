/**
 * @file 自动获取sass编译路径配置
 * @desc grunt-sass编译
 * @author sgj
 * @return Array
 */
const fs = require('fs');

const reScssPath = '/build/scss/page';
const reCssPath = 'dist/css';
var paths = {
    sass: {},
    autoprefixer: {}
};

paths.sass['dist/css/base.css'] = './build/scss/base.scss';
paths.autoprefixer['dist/css/base.css'] = 'dist/css/base.css';

module.exports = function () {
    var files = fs.readdirSync(__dirname + reScssPath);

    files.forEach(function(value, index ,items){
        let scssPath = reScssPath + '/' + value;
        let cssPath = reCssPath + '/' + value;
        let filesInner = fs.readdirSync(__dirname + scssPath);

        filesInner.forEach(function(v) {
            let joinCssPath = cssPath + '/' + v.split('.')[0] + '.css';
            let joinSassPath = './' + scssPath.slice(1) + '/' + v;
            paths.sass[joinCssPath] = joinSassPath;
            paths.autoprefixer[joinCssPath] = joinCssPath;
        });
    });


    return paths;
}
