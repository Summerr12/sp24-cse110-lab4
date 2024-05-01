
function printTime(){
    let d=new Date();
    let time= d.toLocaleTimeString();
    console.log(time);
}

let interval = setInterval(printTime, 1000);

setTimeout(() => {
    clearInterval(interval);
    console.log("stopped")
  }, "50000");