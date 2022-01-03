#!/usr/bin/env node
//= get_json_print_pretty.js

const http = require('http');
const https = require('https');

// guide: https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
var my_args = process.argv.slice(2);
// console.log('my_args: ', my_args);


const url = ( typeof(my_args[0]) == "string" ? my_args[0] : false) ;
if (url) {
  const url_toLowerCase = url.toLowerCase();

  if (url_toLowerCase.indexOf('https') >= 0) {
  
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { 
        const parsed_data = JSON.parse(data) 
        console.log( JSON.stringify(parsed_data, null, 2) );
      });
    }).on("error", (err) => {
      console.log("Error: ", err.message);
    });
  
  } else {

    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { 
        const parsed_data = JSON.parse(data) 
        console.log( JSON.stringify(parsed_data, null, 2) );
      });
    }).on("error", (err) => {
      console.log("Error: ", err.message);
    });
  
  }

}

//

// // or the micro-version:
// #!/usr/bin/env node
// const https = require('https');
// var my_args = process.argv.slice(2);
// const url = ( typeof(my_args[0]) == "string" ? my_args[0] : false) ;
// https.get(url, (res) => {
//   let data = '';
//   res.on('data', (chunk) => { data += chunk; });
//   res.on('end', () => { 
//     const parsed_data = JSON.parse(data) 
//     console.log( JSON.stringify(parsed_data, null, 2) );
//   });
// });

//-EOF