module.exports.function = function getDetail (news) {
  console.log(news);
  uri = "intent:#Intent;" + "action=" + "";
  return {
    title: news.title,
    url: news.url
  };
}
