var slice = require('sliced')

if (process.browser) {
  var raf = require('raf-component')
} else {
  var raf = typeof setImmediate !== 'undefined'
    ? setImmediate
    : process.nextTick
}

module.exports = debounce

function debounce(fn, now) {
  var args = null
  var ctx = null

  return debounced

  function debounced() {
    if (args !== null) return
    args = slice(arguments)
    ctx = this
    if (now) fn.apply(ctx, args)
    raf(next)
  }

  function next() {
    if (!now) fn.apply(ctx, args)
    args = null
    ctx = null
  }
}
