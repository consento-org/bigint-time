const bigint = require('.')
const test = require('fresh-tape')

const n1e6 = BigInt(1e6)

test('basics', async t => {
  for (const time of [5, 10, 20, 30, 40, 50]) {
    const n = bigint()
    const d = Date.now()
    await new Promise((resolve) => {
      setTimeout(() => {
        const n1 = bigint()
        const d1 = Date.now()
        const diffBigInt = n1 - n
        const diffDate = BigInt(d1 - d) * n1e6
        const diff = diffDate - diffBigInt
        const tolerance = n1e6 * BigInt(2)
        t.ok(diff < tolerance && -diff < tolerance, `Difference of ${time}ms within tolerance of ${tolerance}: ${diff}`)
        resolve()
      }, time)
    })
  }
})
