console.log(new Date().toString());

var tick = true;
var clock = document.getElementById('clock');
clock.innerHTML = new Date().toString().slice(15,21);

setInterval(function(){
  tick = !tick;
  var time = new Date().toString().slice(15,21);
  if(tick){
    var t = time.replace(/:/g, " ");
    time = t;
  }

  clock.innerHTML = time;
},1000)
