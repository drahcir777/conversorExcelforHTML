const ejs = require('ejs');
class HtmlParser {

  static async Parser(table) {
    return await ejs.renderFile('./table.ejs', { header: table.header, rows: table.row });
  }

}

module.exports = HtmlParser