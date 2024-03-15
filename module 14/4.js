const todayIs = function (t = new Date()) {
  let Y = t.getFullYear();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let M = months[t.getMonth()];
  let D = t.getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = days[t.getDay()];
  let h = t.getHours() < 10 ? "0" + t.getHours() : t.getHours();
  let m = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
  return `${M} ${D}, ${Y} ${h}:${m} (${d})`;
};
console.log(todayIs());

function daysPass(date1, date2) {
  return date2 - date1 / (1000 * 60 * 60 * 24);
}
