var utc = new Date().toString();
console.log(utc);

var tick = 1;
setInterval(function(){
  if(tick)
  var time = new Date().toString().slice(15,24);
  console.log(time);
},1000)
