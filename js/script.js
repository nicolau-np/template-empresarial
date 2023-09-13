const itemsOfCaroucel = document.querySelectorAll(".caroucel .item");
const indicatorsCaroucel = document.querySelectorAll(".caroucel .indicators a");
const dataCounting = document.querySelectorAll("[data-counting] .counter");

const target = document.querySelectorAll("[data-anime]");
const animateClass = "animate";

const previousScrollPosition = document.documentElement.scrollTop;
const buttonTop = document.querySelector("#button-top");

var active = 0;
const countItemsOfCaroucel = itemsOfCaroucel.length - 1;

showCaroucel();

function showCaroucel() {
  itemsOfCaroucel.forEach(element => {
    element.classList.remove("active");
  });

  indicatorsCaroucel.forEach(element => {
    element.classList.remove("active");
  });

  itemsOfCaroucel[active].classList.add("active");
  indicatorsCaroucel[active].classList.add("active");
}

function nextItemCaroucel() {
  if (active === countItemsOfCaroucel) {
    active = 0;
  } else {
    active += 1;
  }
  showCaroucel();
}

indicatorsCaroucel.forEach(element => {
  element.addEventListener("click", e => {
    var selectedIndex = parseInt(element.getAttribute("data-index"));
    active = selectedIndex;
    showCaroucel();
  });
});

setInterval(() => {
  nextItemCaroucel();
}, 5000);

/** SCROLL TOP */

function addAnimateInButtonTop() {
  const currentScrollPosition = document.documentElement.scrollTop;
  if (previousScrollPosition < currentScrollPosition) {
    buttonTop.classList.add("animate");
  } else if (previousScrollPosition == currentScrollPosition) {
    buttonTop.classList.remove("animate");
  }
}

/**END */

/**ANIMATE */

function animeScroll() {
  const windowTop = window.scrollY + window.innerHeight * (3 / 4);

  target.forEach(e => {
    if (windowTop > e.offsetTop) {
      e.classList.add("animate");
    }
  });
}

/**END */

window.addEventListener("scroll", function() {
  addAnimateInButtonTop();
  animeScroll();
});

/**COUNTING */

/*let count = 0;
function actualizarContador() {
  if (count < 300) {
    count++;
    dataCounting.forEach((element)=>{
      element.querySelector("h1").textContent = count;
    })
    setTimeout(actualizarContador, 100);
  }
}

actualizarContador();*/

/*let count =[];

function counting() {
  dataCounting.forEach((element, index) => {
    var dataCount = parseInt(element.getAttribute("data-count"));
    if (count < dataCount) {
      count[index] ++;
      element.querySelector("h1").textContent = count[index];
      setTimeout(counting, 1000);
    }
  });
  
}
counting();*/

/*dataCounting.forEach((element, index)=>{
  console.log(element)
  console.log(index)
})*/

/**END */
