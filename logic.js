document.querySelector(".card").addEventListener("click", function () {
  document.querySelector(".card").style.background = "black";
  document.querySelector(".card").style.color = "white";
  document.querySelector("body").style.background = "white";
});

function loadBody() {
  document.querySelector("body").style.background = "black";
}

function userInput() {
  let txt = document.querySelector("#pass").value;
  let length = txt.length + 1;
  if (length >= 8) {
    document.querySelector("#pass").style.outline = "2px solid green";
  } else if (length < 8) {
    document.querySelector("#pass").style.outline = "2px solid red";
    document.querySelector("#pass").style.borderRadius = "3px";
  }
}

document.querySelector("button").addEventListener("click", function () {
  let txt = document.querySelector("#pass").value;
  let length = txt.length;
  if (length < 8) {
    document.querySelector("#pass").style.outline = "2px solid red";
    document.querySelector("#pass").style.borderRadius = "3px";
    let value = document.querySelector("button").style.marginLeft;
  }
});

function mouseEnter() {
  let el = document.querySelector("#btn");
  let values = getComputedStyle(el).marginLeft;
  let txt = document.querySelector("#pass").value;
  let length = txt.length;

  if (length < 8) {
    if (values == "150px") {
      document.querySelector("button").style.marginLeft = "0px";
    } else if (values == "0px") {
      document.querySelector("button").style.marginLeft = "150px";
    }
  }
  else if(document.querySelector("#pass").value == "" || document.querySelector("#user").value == ""){
  }
}

function login(){
  let txt = document.querySelector("#pass").value;
  let length = txt.length;
  if(document.querySelector("#pass").value == "" || document.querySelector("#user").value == ""){
  }
  else if(length < 8){
    mouseEnter()
  }
  else{
    
    setTimeout(function(){
      document.querySelector("#card2").style.height = "200px"
      document.querySelector("#card2 h2").style.opacity = "1"
    },0)
    document.querySelector("#card2").style.display = "flex"

  }
}
