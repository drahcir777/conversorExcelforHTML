const pdf = require('html-pdf');

class PDFWhiter {

  static WhiterPDF(filename, html) {
    pdf.create(html, {}).toFile(filename, error => console.log(error));
  }
}

module.exports = PDFWhiter