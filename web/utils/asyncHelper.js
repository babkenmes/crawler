
const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const runAsyncWrapper = function (callback) {
  return function (req, res, next) {
    callback(req, res, next)
      .catch(next)
  }
}

module.exports = { asyncForEach, runAsyncWrapper }