const pr = fetch("https://dummyjson.com/products");
pr.then((res) => {
  const pr2 = res.json();
  pr2.then((data) => {
    createUI(data);
    console.log(data);
  });
}).catch((err) => {
  console.log("error\n", err);
});

const main = document.getElementById("root");

function createUI(data) {
  main.innerHTML = ''; // Clear previous results
  const products = data.products;

  for (let i = 0; i < products.length; i++) {
    const newCard = document.createElement("div");
    newCard.className = "product-card";

    const title = document.createElement("h3");
    title.innerText = products[i].title;
    newCard.appendChild(title);

    const image = document.createElement("img");
    image.setAttribute("src", products[i].thumbnail);
    image.setAttribute("alt", products[i].title);
    newCard.appendChild(image);

    const price = document.createElement("p");
    price.innerText = `Price: ${products[i].price}`;
    newCard.appendChild(price);

    main.appendChild(newCard);
  }
}

function searchProducts(e) {
  const searchText = e.target.value;
  console.log(searchText);
  const pr = fetch(`https://dummyjson.com/products/search?q=${searchText}`);
  pr.then((res) => {
    const pr2 = res.json();
    pr2.then((data) => {
      createUI(data);
    });
  }).catch((err) => {
    console.log("error\n", err);
  });
}

document.getElementById('search-bar').addEventListener('input', searchProducts);
