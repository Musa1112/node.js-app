const fs = require('fs');
// const { Buffer } = require('stream/consumers');

function requestHandle (req, res)  {
    // console.log(req.url, req.headers, req.method);

    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
       
        return  res.end(); // Ensure the rest of the code is skipped
    }

    if (url === '/message' && method === 'POST') {
        const body =[];
        req.on('data', (chunck)=>{
            body.push(chunck)
            console.log(chunck);
        });

        req.on('end', ()=>{
            const ParsedBody = Buffer.concat(body).toString();
            console.log(ParsedBody);
            const message = ParsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);

        })
      
        res.statusCode = 302;  // Set status code correctly
        res.setHeader('Location', '/');  // Correct the header key
        return res.end();
    }

    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = {
    handler: requestHandle,
}