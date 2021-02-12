const fetch = require('node-fetch');



module.exports.Getgif = (interacion) => {
    const {get} = require('https');
    
    
    function getContent(url) {
      return new Promise((resolve, reject) => {
        get(url, (res) => {
          const {statusCode} = res;
          if(statusCode !== 200) {
            res.resume();
            reject(`Request failed. Status code: ${statusCode}`);
          }
          res.setEncoding('utf8');
          let rawData = '';
          res.on('data', (chunk) => {rawData += chunk});
          res.on('end', () => {
            try {
              const parsedData = JSON.parse(rawData);
              resolve(parsedData);
            } catch(e) {
              reject(`Error: ${e.message}`);
            }
          });
        }).on('error', (err) => {
          reject(`Error: ${err.message}`);
        })
      });
    }

   return getContent('https://api.thegod12.repl.co/api/'+interacion)
}


