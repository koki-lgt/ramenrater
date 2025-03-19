const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "miso ramen.jpeg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "tonokotsu ramen.jpeg",
    rating: 7,
    comment: "tasty!"


  },
];

function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");
  ramens.forEach((ramen) => {
    const ramenItem = document.createElement("div");
    ramenItem.className = "ramen-item";
    ramenItem.innerHTML = `<img src="${ramen.image}" alt="${ramen.name}">`;
    ramenItem.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(ramenItem);
  });
}

function handleClick(ramen) {
  const detailImage = document.getElementById("detail-image");
  const detailName = document.getElementById("detail-name");
  const detailRestaurant = document.getElementById("detail-restaurant");
  const detailRating = document.getElementById("detail-rating");
  const detailComment = document.getElementById("detail-comment");

  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailRating.textContent = `Rating: ${ramen.rating}`;
  detailComment.textContent = `Comment: ${ramen.comment}`;
}

function addSubmitListener() {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newRamen = {
      id: ramens.length + 1,
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      image: e.target.image.value,
      rating: e.target.rating.value,
      comment: e.target.comment.value,
    };
    ramens.push(newRamen);
    displayRamens();
    form.reset();
  });
}

function main() {
  displayRamens();
  addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);
