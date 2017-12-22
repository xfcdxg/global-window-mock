var equals = function(e1) {
  return function(e2) {
    return e1 === e2
  }
}

var isObject = equals('object')

var isUndefined = equals('undefined')

var mockWindow = function(defaultParams) {
  var win = {}

  if (isObject(typeof window)) {
    win = window
  } else if (isObject(typeof global.win)) {
    win = global.win
  }

  for (var k in defaultParams) {
    var v = defaultParams[k]
    if (isUndefined(typeof win[k])) {
      win[k] = v
    }
  }

  if (isObject(typeof global)) {
    global.win = win
  }

  return win
}

module.exports = mockWindow
