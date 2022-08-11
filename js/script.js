const animalSet = document.getElementsByClassName("waterfall-box");
const catSet = document.querySelectorAll("#Cats");
const dogSet = document.querySelectorAll("#Dogs");
const birdSet = document.querySelectorAll("#Birds");

const allSections = document.querySelectorAll(".section");
const searchBox = document.querySelector(".search-box");
const dropCtn = document.querySelector(".dropdown-content");

window.onload = function () {
  waterFall(animalSet);
};

window.onresize = function () {
  waterFall(animalSet);
};

//function for waterfall display all pics && define logo location/display
function waterFall(newItems) {
  const section = document.querySelector("section");
  var items = newItems;

  const gap = 10;
  const gapH = -20;

  var pageWidth = getClient().width;
  var itemWidth = items[0].offsetWidth;
  var columns = parseInt(
    pageWidth / (itemWidth + gap) <= 3 ? pageWidth / (itemWidth + gap) : 3
  );
  const initalTop = section.getBoundingClientRect().top;
  const initalLeft =
    section.getBoundingClientRect().left +
    (pageWidth - (itemWidth + gap) * columns) / 2;
  var arr = [];
  for (var i = 0; i < items.length; i++) {
    if (i < columns) {
      items[i].style.top = initalTop + "px";
      items[i].style.left = (itemWidth + gap) * i + initalLeft + "px";

      arr.push(initalTop + items[i].offsetHeight);
    } else {
      var minHeight = arr[0];
      var index = 0;
      for (var j = 0; j < arr.length; j++) {
        if (minHeight > arr[j]) {
          minHeight = arr[j];
          index = j;
        }
      }

      items[i].style.top = arr[index] + gapH + "px";
      items[i].style.left = items[index].offsetLeft + "px";

      arr[index] = arr[index] + items[i].offsetHeight + gap;

      document.getElementById("logo-large").style.left = items[0].style.left;
      if (window.innerWidth > 768) {
        document.getElementsByClassName("logo-l")[0].style.display = "block";
      } else {
        document.getElementsByClassName("logo-l")[0].style.display = "none";
      }
    }
  }
}

// get client width
function getClient() {
  return {
    width:
      // window.innerWidth ||
      // document.documentElement.clientWidth ||
      document.getElementById("section-waterfall").clientWidth,
    height:
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight,
  };
}

// waterfall cats pics after filter
function waterfall_cats() {
  addAnimal(dogSet, birdSet, catSet);
  removeAnimal(dogSet);
  removeAnimal(birdSet);
  waterFall(catSet);
  window.onresize = function () {
    waterFall(catSet);
  };
  document.getElementById("filter-text").innerHTML = "Cats";
  document.getElementById("filter-text").style.color = "black";
}

// waterfall dogs pics after filter
function waterfall_dogs() {
  addAnimal(dogSet, birdSet, catSet);
  removeAnimal(catSet);
  removeAnimal(birdSet);
  waterFall(dogSet);
  window.onresize = function () {
    waterFall(dogSet);
  };
  document.getElementById("filter-text").innerHTML = "Dogs";
  document.getElementById("filter-text").style.color = "black";
}

// waterfall birds pics after filter
function waterfall_birds() {
  addAnimal(dogSet, birdSet, catSet);
  removeAnimal(catSet);
  removeAnimal(dogSet);
  waterFall(birdSet);
  window.onresize = function () {
    waterFall(birdSet);
  };
  document.getElementById("filter-text").innerHTML = "Birds";
  document.getElementById("filter-text").style.color = "black";
}

//put all pics back to window
function addAnimal(animalSet1, animalSet2, animalSet3) {
  animalSet1.forEach((element) => {
    element.style.display = "";
  });
  animalSet2.forEach((element) => {
    element.style.display = "";
  });
  animalSet3.forEach((element) => {
    element.style.display = "";
  });
}

//hide specific animal
function removeAnimal(animalSet) {
  animalSet.forEach((element) => {
    element.style.display = "none";
  });
}

//pics on blur
function glassmorphism() {
  for (var i = 0; i < 59; i++) {
    document.getElementsByClassName("waterfall-box")[i].style.filter =
      "blur(5px)";
  }
}

//pics off blur
function non_glassmorphism() {
  for (var i = 0; i < 59; i++) {
    document.getElementsByClassName("waterfall-box")[i].style.filter = "none";
  }
}
