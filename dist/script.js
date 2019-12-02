const classes = [".face1", ".face2", ".face4", ".face5"];
const wins = ["shin", "hei", "gimel", "nun"];
const hebrewChars = {
  nun: "&#1504;",
  gimel: "&#1490;",
  hei: "&#1492;",
  shin: "&#1513;"
};
classes.forEach((element, index) => {
  // console.log(index, element)
  document.querySelector(element).innerHTML = hebrewChars[index];
});

console.log(hebrewChars);

document.addEventListener("DOMContentLoaded", event => {
  document.querySelector(".face1 span").innerHTML = "ש";
  // alert('d')
  let btn = document.querySelector(".play button");

  btn.addEventListener("click", event => {
    document.querySelector(".win").innerHTML = "";
    let cs = document.querySelector(".cubespinner");
    console.log(cs);
    cs.style.animationDuration = "1s";
    //spin for a random period between 1 and 10 seconds
    let time = (Math.floor(Math.random() * 10) + 1) * 1000;
    //request a random number between 1 and 4
    let win = Math.floor(Math.random() * 4) + 1;
    console.log(time, win);
    setTimeout(function() {
      // alert(win)
      document.querySelector(".win").innerHTML = wins[win];
      cs.style.animationDuration = "0s";
      document.querySelector(".face1 span").innerHTML = hebrewChars[wins[win]];
    }, time);
  });
});