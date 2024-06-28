const http = require("http");
const fsPromises = require("fs/promises");

const app = http.createServer(async (req, res) => {
    // console.log(Object.keys(req));
  // res.write('Welcome');
  // res.setHeader('Content-Type','text/plain');

  res.writeHead(200, {"Content-Type": "text/html"});
  const route = req.url;

 switch (route) {
    case "/":{
        const stream = await fsPromises.readFile('./hompage.html');
        res.end(stream);
        break;
    };
    case '/products':{
        const stream = await fsPromises.readFile('.hompage.html')
        res.end(stream);
        break;
    };
 
    default:
        res.end('Oops! Page not found');
 }
  
  const stream = await fsPromises.readFile('./homepage.html')
  res.end(stream);
});

// http://localhost:1500
app.listen(1500, () => {
  console.log("Server started");
});
