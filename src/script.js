const classes = [".face1", ".face2", ".face4", ".face5"];
const wins = ["shin", "hei", "gimel", "nun"];
const hebrewChars = {
  nun: "&#1504;",
  gimel: "&#1490;",
  hei: "&#1492;",
  shin: "&#1513;"
};

console.log(hebrewChars);

document.addEventListener("DOMContentLoaded", event => {
  let index = 0;
    for (let cl of classes) {
      let el = document.querySelector(`${cl} span`);
      if (el){
        el.innerHTML = hebrewChars[wins[index++]];
      }
    }
  let btn = document.querySelector(".play button");

  btn.addEventListener("click", event => {
    //reset all faces
    let index = 0;
    for (let cl of classes) {
      let el = document.querySelector(`${cl} span`);
      if (el){
        el.innerHTML = hebrewChars[wins[index++]];
      }
    }

    
    document.querySelector(".win").innerHTML = "";
    let cs = document.querySelector(".cubespinner");
    console.log(cs);
    cs.style.animationDuration = ".5s";
    //spin for a random period between 1 and 10 seconds
    let time = (Math.floor(Math.random() * 5) + 1) * 1000;
    //request a random number between 0 and 3
    let win = Math.floor(Math.random() * 4);
    console.log(time, win);
    setTimeout(function() {
      // alert(win)
      document.querySelector(".win").innerHTML = `${wins[win]}`;
      cs.style.animationDuration = "0s";
      document.querySelector(".face1 span").innerHTML = hebrewChars[wins[win]];
    }, time);
  });
});
