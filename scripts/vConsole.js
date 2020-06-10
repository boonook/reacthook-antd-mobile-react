const fs = require("fs");
const cheerio = require('cheerio');
(function vConsole() {
    fs.readFile('public/index.html',function(err,data) {
        if (err) {
            return console.error(err);
        }
        let person = data.toString();//将二进制的数据转换为字符串
        let $ = cheerio.load(person);
        let vConsoleJs = $('html').find('#vConsoleJs');
        let vConsoleJsInfo = $('html').find('#vConsoleJsInfo');
        console.log('---',vConsoleJs)
        if(process.env.NODE_ENV+'' === 'development'){
            if(vConsoleJs!==undefined){
                vConsoleJs.remove();
                vConsoleJsInfo.remove();
            }else{
                $('html').find('body').append('<script id="vConsoleJs" type="text/javascript" src="./vconsole.min.js"></script><script id="vConsoleJsInfo" type="text/javascript">\n' +
                    '    let vConsole = new VConsole()\n' +
                    '</script>')
            }
        }else if(process.env.NODE_ENV+'' === 'test'){
           if(vConsoleJs===undefined){
               $('html').find('body').append('<script id="vConsoleJs" type="text/javascript" src="./vconsole.min.js"></script><script id="vConsoleJsInfo" type="text/javascript">\n' +
                   '    let vConsole = new VConsole()\n' +
                   '</script>')
           }
        }else{
            if(vConsoleJs!==undefined){
                vConsoleJs.remove();
                vConsoleJsInfo.remove();
            }
        }
        fs.writeFile('public/index.html',$('html'),function(err){
            if(err){
                console.error(err);
            }
            console.log('----------重写成功-------------');
        })
    })
})()