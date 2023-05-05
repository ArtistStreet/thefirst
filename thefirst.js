const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");
const frame = 51;
const currentFrame = (index) => `./tmp/${index.toString()}.png`;
const image = [];
let thefirst = { frame: 0 };
for (let i = 0; i < frame; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  image.push(img);
}
gsap.to(thefirst, {
  frame: frame - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: true,
    pin: "canvas",
    end: "200%",
  },
  onUpdate: render,
});

image[0].onload = render;
function render() {
  context.canvas.width = image[0].width;
  context.canvas.height = image[0].height;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image[thefirst.frame], 0, 0);
}

var typed = new Typed(".typing", {
  strings: ["Dang", "artiSt"],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
});

const a = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hidden = document.querySelectorAll(".max-width.hidden");
hidden.forEach((el) => a.observe(el));

// var loader = document.getElementById("svg");
// window.addEventListener("load", function () {
//   body.style.overflow = "hidden";
// });

const svg = document.querySelector(".svg");
const body = document.querySelector("body");

window.onload = function () {
  body.style.overflow = "hidden";
  setTimeout(function () {
    svg.style.display = "none";
    body.style.overflowY = "auto";
  }, 3000);
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
// $(document).keydown(function (e) {
//   switch (e.which) {
//     case 17: // left
//       var href = $("#previous").attr("href");
//       window.location.href = href;
//       break;
//   }
//   e.preventDefault();
// });
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();

    var href = $("#previous").attr("href");
    window.location.href = href;
  }
});

var message = "souces code in my github ";

function rtclickcheck(keyp) {
  if (navigator.appName == "Netscape" && keyp.which == 3) {
    var href = $("#previous").attr("href");
    window.location.href = href;
  }

  if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {
    return false;
  }
}

document.onmousedown = rtclickcheck;

document.onmousedown = rtclickcheck;
function mousehandler(e) {
  var myevent = isNS ? e : event;
  var eventbutton = isNS ? myevent.which : myevent.button;
  if (eventbutton == 2 || eventbutton == 3) return false;
}
// const text = document.querySelector(".text p");
// text.innerHTML = text.innerText
//   .split("")
//   .map(
//     (char, i) => `<span style="transform:rotate(${i * 17}deg)">${char}</span>`
//   )
//   .join("");
// const logo = document.querySelectorAll("#logo path");
// for (let i = 0; i < logo.length; i++) {
//   console.log(`${i + 1}__${logo[i].getTotalLength()}`);
// }
