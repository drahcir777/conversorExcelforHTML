const fs = require('fs');
const util = require('util');

class Whiter {
  constructor() {
    this.whiter = util.promisify(fs.writeFile)
  }

  async White(filename, data) {

    try {
      await this.whiter(filename, data)
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = Whiter