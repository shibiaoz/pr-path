let path = require('path')
let sep = path.sep;
let cwd = process.cwd();
let curDir = cwd + sep;
let fs = require('fs')
var flagNum = 0;
function getRootPath(fileName, prPath) {
    prPath = prPath || curDir;
    let filePath = prPath + fileName;
    if(flagNum > 4) {
        throw Error('找了4层没找到，你当前位置是不是有问题...')
    }    
    if(fs.existsSync(filePath)) {
       return prPath;
    }
    else {
        let fileArrSplit = filePath.split(sep);
        fileArrSplit.pop();
        fileArrSplit.pop();
        let upPath = fileArrSplit.join(sep) + sep;
        flagNum++;
        // console.log(upPath + fileName)
        return getRootPath(fileName, upPath);
    }
}
exports.getRootPath = getRootPath;