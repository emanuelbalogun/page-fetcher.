const request = require("request");
const URL = process.argv[2];
const filePath = process.argv[3];
const fs = require('fs');
//fetch content from remote server

request(URL, (error, response, body) => {
if(response.statusCode === 200){
  const content = body;

fs.writeFile(filePath, content, err => {
  if (err) {
    console.error(err);
  }
  else{
    console.log('file written successfully');
  }
  // file written successfully
});
}  else{
  console.log(error);
}
});
//write file to disk



