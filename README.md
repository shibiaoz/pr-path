## 获取项目根目录路径

```
var prPath = require('pr-path')
prPath.getRootPath('package.json', 0);
prPath.getRootPath('node_modules', 1);
```