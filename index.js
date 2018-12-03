let path = require('path')
let sep = path.sep;
let cwd = process.cwd();
let curDir = cwd + sep;
let fs = require('fs')
var flagNum = 1;
var MAXFLOORNUM = 4;
function iteraPath(fileName, prPath) {
    prPath = prPath || curDir;
    let filePath = prPath + fileName;
    if(flagNum > MAXFLOORNUM) {
        throw Error(`往上找了${MAXFLOORNUM}层没找到，你当前位置是不是有问题...`)
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
        return iteraPath(fileName, upPath);
    }
}

function getRootPath(fileName,floorNum) {
    flagNum = 1;
    MAXFLOORNUM = floorNum || MAXFLOORNUM;
    return iteraPath(fileName);
}

exports.getRootPath = getRootPath;
