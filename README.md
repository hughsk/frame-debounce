# frame-debounce [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Decorate a function so that it only fires once per frame, using
`requestAnimationFrame` in the browser and `setImmediate` or `process.nextTick`
in node.

## Usage

[![NPM](https://nodei.co/npm/frame-debounce.png)](https://nodei.co/npm/frame-debounce/)

### debounced = debounce(fn, [immediate])

Returns a decorated version of `fn`, that can only be called once per frame

## See Also

* [debounce](http://github.com/component/debounce)
* [frame-queue](https://github.com/hughsk/frame-queue)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/frame-debounce/blob/master/LICENSE.md) for details.
