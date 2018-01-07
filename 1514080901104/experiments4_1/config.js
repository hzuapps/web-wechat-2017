(function (module) {
  var exports = module.exports = {};

  //jsonTypeFile+书单ID==书单入口
  var jsonTypeFile = "http://localhost/data/1514080901104/type";

  //根据书籍名称接入
  var searchByBookNameUrl = "https://infoaas.com/data/1514080901104/pdf1001/type";

  //Index页显示书籍接口
  var selBookUrl ="http://localhost/data/1514080901104/selbook_test.json";

  //服务器资源情况咨询接口
  var condition ="http://localhost/data/1514080901104/res_case.json";

  //本地信息存储文件路径
  var saveFilePath="./formdata";
  
  module.exports = {
    config: {
      jsonTypeFile: jsonTypeFile,
      searchByBookNameUrl: searchByBookNameUrl,
      selBookUrl: selBookUrl,
      condition: condition,
      saveFilePath: saveFilePath,
    }
  };
})(module);

