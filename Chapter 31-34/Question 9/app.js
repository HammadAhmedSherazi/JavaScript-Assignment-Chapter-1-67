var msDiff = new Date().getTime() - new Date(" June 18, 2015").getTime();
var dDiff = msDiff / (1000 * 60 * 60 * 24);

var daysTillDoom = Math.floor(dDiff);
document.write(daysTillDoom + ' days have passed since 1st Ramadan 2015 ');
