(function (module) {
  var exports = module.exports = {};

  //jsonTypeFile+书单ID==书单入口
  var jsonTypeFile = "https://infoaas.com/data/1514080901104/type";

  //根据书籍名称接入
  var searchByBookNameUrl = "https://infoaas.com/data/1514080901104/pdf1001/type";

  //Index页显示书籍接口
  var selBookUrl ="https://infoaas.com/data/1514080901104/selbook.json";

  //服务器资源情况咨询接口
  var condition ="https://infoaas.com/data/1514080901104/res_case.json";

 //上传表单数据接口
  var shareurl ="https://infoaas.com/data/1514080901104/post.php";
  
  module.exports = {
    config: {
      jsonTypeFile: jsonTypeFile,
      searchByBookNameUrl: searchByBookNameUrl,
      selBookUrl: selBookUrl,
      condition: condition,
      shareurl: shareurl
    }
  };
})(module);

