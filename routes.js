exports.index = function (req, res) {
  var weddingDate = new Date(2013,7,17);
  var daysLeft = Date.today().getDaysBetween(weddingDate);
  res.render('index', { daysLeft: daysLeft });
};

exports.create = function (view) {
  return function (req, res) {
    res.render(view);
  };
};