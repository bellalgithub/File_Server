const http = require('http');
const fs = require('fs');
const path = require('path');


// Create a server
const server = http.createServer((req,res)=>{
    // Home page showing
    if(req.url === '/'){
      const homePage =   fs.readFileSync(path.join(__dirname, 'public/index.html'), 'utf8');
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(homePage);
      res.end();
    }
    // About page showing
    else if(req.url === '/about'){
        const aboutPage =   fs.readFileSync(path.join(__dirname, 'public/about.html'),'utf8');
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(aboutPage);
        res.end();

    }

    // Blog page showing
    else if(req.url === '/blog'){
        const blogPage =   fs.readFileSync(path.join(__dirname, 'public/blog.html'),'utf8');
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(blogPage);
        res.end();
    }

    // Contact page showing
    else if(req.url === '/contact'){
        const contactPage =   fs.readFileSync(path.join(__dirname, 'public/contact.html'),'utf8');
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(contactPage);
        res.end();
    }

    // Style css page showing
    else if(req.url === '/style') {
        const stylePage = fs.readFileSync(path.join(__dirname, 'public/style.css'),'utf8');
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(stylePage);
        res.end();
    }

    // Java Script js page showing
    else if(req.url === '/demo') {
        const demoPage = fs.readFileSync(path.join(__dirname, 'public/demo.js'),'utf8');
        res.writeHead(200, {'Content-Type': 'text/js'});
        res.write(demoPage);
        res.end();
    }

// If the page does not exist
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("404 Not Found" );
        res.end();
    }

});

server.listen(3000);
console.log('Server Run Success');