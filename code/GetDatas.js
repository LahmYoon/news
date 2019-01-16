//다른 경로의 파일을 가져옵니다.
var fakeData = require("./data/NewsData.js");

module.exports.function = function getDatas(topic) {
  var result = [];
  
  if(topic){
    result = fakeData[topic];
  }
  
  console.log(result);
  return result;
}
