# npm

Node Package Manager

``` bash
node -v
npm -v
npm install -g http-server
mkdir olaeco
cd olaeco
npm init
xed form.html
```
``` javascript
//index.js
require('http').createServer((req, res) => {
  let body = ''
  let packts = 1
  req.on('error', console.error).on('data', chunk => {
    body += chunk.toString()
    packts += 1
  }).on('end', () => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    const json = {
      url: req.url,
      header: req.rawHeaders,
      body: body,
      packts: packts
    }
    res.end(JSON.stringify(json, null, 4))
  })
}).listen(3000)
```
``` bash
http-server --proxy http://127.0.0.1:3000
```
