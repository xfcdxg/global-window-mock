# global-window-mock

用于在 Node (SSR) 环境下模拟 window 对象

### 例子

```js
  var globalWindowMock = require('global-window-mock')

  var win = globalWindowMock()

  win.hello = 'world'
```

### 设置默认参数

```js
  var globalWindowMock = require('global-window-mock')

  var default = { hello: 'world' }

  var win = globalWindowMock(default)

  console.log(win.hello)  // -> world
```
