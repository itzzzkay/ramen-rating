//this function will run when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  //this is the array showing the ramens originally in the website
  const ramens = [
    {
      id: 1,
      name: "Shoyu Ramen",
      restaurant: "Ichiran",
      image: "shoyu.jpeg",
      rating: 5,
      comment: "Delicious!",
    },
    {
      id: 2,
      name: "Miso Ramen",
      restaurant: "Menya",
      image: "miso.jpeg",
      rating: 4,
      comment: "Very flavorful!",
    },
    {
      id: 3,
      name: "Tonkotsu Ramen",
      restaurant: "Ramen-ya",
      image: "tonkotsu.jpeg",
      rating: 5,
      comment: "Delicious!",
    },
    {
      id: 4,
      name: "Hiyashi Ramen",
      restaurant: "Ichiraku",
      image: "hiyashi.jpeg",
      rating: 5,
      comment: "Delicious!",
    },
    {
      id: 5,
      name: "Kaisen Ramen",
      restaurant: "Umai",
      image: "kaisen.jpeg",
      rating: 4,
      comment: "Very nutritious!",
    },
    {
      id: 6,
      name: "Shio Ramen",
      restaurant: "Yukihira",
      image: "shio.jpeg",
      rating: 5,
      comment: "Salt is balanced!",
    },
    {
      id: 7,
      name: "Tantanmen Ramen",
      restaurant: "Nakiri",
      image: "tantanmen.jpeg",
      rating: 4,
      comment: "Delicious!",
    },
    {
      id: 8,
      name: "Tsukumen Ramen",
      restaurant: "Ikumi",
      image: "tsukumen.jpeg",
      rating: 5,
      comment: "Take when cold!",
    },
  ];
  //this is where I declare variables to the HTML elements we have taken
  const menu = document.getElementById("ramen-menu");
  const ramenName = document.getElementById("ramenName");
  const restaurant = document.getElementById("restaurant");
  const rating = document.getElementById("rating");
  const comment = document.getElementById("comment");

  //this function that clears the menu
  function displayRamens() {
    menu.innerHTML = "";

    ramens.forEach((ramen) => {
      const ramenImg = document.createElement("img");
      ramenImg.src = ramen.image;
      ramenImg.alt = ramen.name;
      ramenImg.title = ramen.name;
      ramenImg.addEventListener("click", function () {
        return ramenDetails(ramen);
      });
      menu.appendChild(ramenImg);
    });
  }
  function ramenDetails(ramen) {
    ramenName.innerText = ramen.name;
    restaurant.innerText = ramen.restaurant;
    rating.innerText = ramen.rating;
    comment.innerText = ramen.comment;
  }

  function addSubmitListener() {
    const form = document.getElementById("RamenForm");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const newName = document.getElementById("ramenName").value;
      const newRestaurant = document.getElementById("restaurant").value;
      const newImage = document.getElementById("ramenPic").value;
      const newRating = document.getElementById("rating").value;
      const newComment = document.getElementById("comment").value;

      const newId = ramens.length + 1;

      const newRamen = {
        id: newId,
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment,
      };

      ramens.push(newRamen);

      displayRamens();
    });
  }
  displayRamens();
  addSubmitListener();
});
