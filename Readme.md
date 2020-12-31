# bigint-time

`bigint-time` uses [`process.hrtime.bigint`][hrtime] and
[`performance.now()`][now] to return the time in nanoseconds since epoch.

- Node.js & Browser compatible.
- TypeScript types available.
- No dependencies.

[hrtime]: https://nodejs.org/api/process.html#process_process_hrtime_bigint
[now]: https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

## Usage

```javascript
const bigtime = require('bigint-time')

const time = bigtime() // BigInt number returned of the time.
```

## Compatibility

This library assumes Node > 10.4 and that the Browsers support [BigInt][bigint]
and [performance.now][perfnow].

The resolution and accuracy may vary depending on
platform.

[bigint]: https://caniuse.com/bigint
[perfnow]: https://caniuse.com/high-resolution-time

## License

[MIT](./LICENSE)
