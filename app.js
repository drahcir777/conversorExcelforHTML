const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require("./Table");
const HtmlParser = require('./HtmlParser')
const Whiter = require('./Whiter');
const PDFWriter = require('./PDFWriter');

var leitor = new Reader();
var escritor = new Whiter();

const main = async () => {
  var dados = await leitor.Read("./usuarios.csv")
  var dadosProcessados = Processor.Process(dados)
  var usuarios = new Table(dadosProcessados)
  var html = await HtmlParser.Parser(usuarios);

  escritor.White("meuhtml.html", html);
  PDFWriter.WhiterPDF("meuhtml.pdf", html)
  // console.log(usuarios.row);
  // console.log(usuarios.header)
  // console.log(usuarios.RowCount)

  //console.log(html)

  // escritor.White("htmlGerado.html", hmtl);

}

main();