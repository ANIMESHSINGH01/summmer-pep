const http = require("http");
const fsPromises = require("fs/promises");
const fs = require("fs");
const url = require("url");

// Read data.json file
const dataText = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const data = JSON.parse(dataText);

const app = http.createServer(async (req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  console.log(`Request received for: ${pathname}`);

  try {
    switch (pathname) {
      case "/": {
        const bf = await fsPromises.readFile(`${__dirname}/homepage.html`);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(bf);
        break;
      }
      case "/products": {
        const bf = await fsPromises.readFile(`${__dirname}/products.html`);
        let text = bf.toString();
        let productsText = "";
        for (let i = 0; i < data.length; i++) {
          productsText += `<div class="product-card">
            <h3>${data[i].title}</h3>
            <img src="${data[i].thumbnail}" alt='product-image' height='200'>
            <p>${data[i].description}</p>
            <a href="/view?id=${data[i].id}" target="_blank">More</a>
            </div>`;
        }
        text = text.replace("$PRODUCTS$", productsText);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(text);
        break;
      }
      case "/view": {
        const product = data.find((elem) => elem.id == query.id);
        if (!product) {
          console.log(`Product with ID ${query.id} not found`);
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("<h2>Product not found!</h2>");
          break;
        }

        
        const bf = await fsPromises.readFile(`${__dirname}/view.html`);
        let text = bf.toString();
        text = text.replace(
          "$VIEW$",
          `<div>
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" height='300'>
            <h4>Price: ${product.price}</h4>
            <p>${product.description}</p>
          </div>`
        );
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(text);
        break;
      }
      default: {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Oops! Page not found...");
      }
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("<h2>Internal Server Error</h2>");
  }
});

// http://localhost:1400
app.listen(1400, () => {
  console.log("----------Server Started ----------");
});
