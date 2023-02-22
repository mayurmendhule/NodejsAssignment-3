const http =require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    fs.readFile('index.html', (error, data) =>{
    if(error) throw error;
    response.writeHead(200, {"Content-Type" : 'text/html'});
    response.write(data);
    response.end(); 
    });
});

const  port = 5000;
server.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`);
})