const flowers = [
  {
    image: "rose.png",
    title: "Velvet Rose",
    info: "Soft petals wrapped in elegance and mystery."
  },
  {
    image: "orchid.png",
    title: "Royal Orchid",
    info: "A rare bloom that defines quiet luxury."
  },
  {
    image: "iris.png",
    title: "Golden Iris",
    info: "Shining beauty that grows once in a lifetime."
  },
  {
    image: "tulip.png",
    title: "Midnight Tulip",
    info: "Dark, bold, and beautifully uncommon."
  }
];

let index = 0;

const photo = document.getElementById("photo");
const titleText = document.getElementById("title-text");
const infoText = document.getElementById("info-text");
const countBadge = document.getElementById("count-badge");

function displayFlower() {
  photo.src = flowers[index].image;
  titleText.textContent = flowers[index].title;
  infoText.textContent = flowers[index].info;
  countBadge.textContent = (index + 1) + " / " + flowers.length;
}

function next() {
  index = (index + 1) % flowers.length;
  displayFlower();
}

function prev() {
  index = (index - 1 + flowers.length) % flowers.length;
  displayFlower();
}

displayFlower();