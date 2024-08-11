const div_res = document.getElementById("responsive");
const header = document.getElementById("header");
const body = document.getElementById("body");
const big = document.querySelector(".big-div");
const nav = document.querySelector(".nav-img");
const night = document.querySelector(".svg-night");
const night_resp = document.querySelector(".svg-night-resp");

let currentIndex = 0;

nav.addEventListener("click", function () {
  currentIndex = 1 - currentIndex;
  switch (currentIndex) {
    case 1:
      {
        nav.style.transform = "rotate(90deg)";
        div_res.style.right = "0";
        night.style.marginRight = "100px";
      }
      break;
    case 0: {
      nav.style.transform = "rotate(0deg)";
      div_res.style.right = "-200px";
      night.style.marginRight = "5px";
    }
  }
});
night.addEventListener("click", function () {
  currentIndex = 1 - currentIndex;
  switch (currentIndex) {
    case 1:
      {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        document.querySelector(".hr").style.backgroundColor = "white";
        document.querySelector(".name").style.color = "yellow";
        document.querySelector(".frist-btn").style.color = "white";
        document.querySelector(".frist-btn").style.backgroundColor = "black";
      }
      break;
    case 0: {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      document.querySelector(".hr").style.backgroundColor = "black";
      document.querySelector(".name").style.color = "blue";
      document.querySelector(".frist-btn").style.color = "white";
      document.querySelector(".frist-btn").style.backgroundColor = "green";
    }
  }
});
//
//
night_resp.addEventListener("click", function () {
  currentIndex = 1 - currentIndex;
  switch (currentIndex) {
    case 1:
      {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        document.querySelector(".hr").style.backgroundColor = "white";
        document.querySelector(".name").style.color = "yellow";
        document.querySelector(".frist-btn").style.color = "white";
        document.querySelector(".frist-btn").style.backgroundColor = "black";
      }
      break;
    case 0: {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      document.querySelector(".hr").style.backgroundColor = "black";
      document.querySelector(".name").style.color = "blue";
      document.querySelector(".frist-btn").style.color = "white";
      document.querySelector(".frist-btn").style.backgroundColor = "green";
    }
  }
});
