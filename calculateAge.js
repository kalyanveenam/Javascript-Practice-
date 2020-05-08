let calculateAge = function (day, month, year) {
  var date = new Date();
  var todayYear = date.getFullYear();

  var todayMonth = date.getMonth() + 1;
  var todayDay = date.getDate();
  var age = todayYear - year;

  if (todayMonth < month || (todayMonth == month && todayDay < day)) {
    age--;
  }
  return age;
};
