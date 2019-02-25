var fs = require('fs');

function readFileList(path) {
    var filesList = [];
    var files = fs.readdirSync(path);
    files.forEach(function (itm) {
        var stat = fs.statSync(path + itm);
        if (stat.isDirectory()) {
        //递归读取文件
            readFileList(path + itm + "/", filesList)
        } else {
            var obj = {};//定义一个对象存放文件的路径和名字
            obj.path = path;//路径
            obj.filename = itm//名字
            filesList.push(obj);
        }
    });
    return filesList;
}

export default readFileList;
