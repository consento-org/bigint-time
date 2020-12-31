const start = BigInt(Date.now()) * BigInt(1e6) - process.hrtime.bigint()

module.exports = () => start + process.hrtime.bigint()
