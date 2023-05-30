const request = require("request");
const URL = process.argv[2];
const filePath = process.argv[3];
const fs = require("fs");
//fetch content from remote server

request(URL, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const content = body;

    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error(err);
        process.exit();
      } else {
        var stats = fs.statSync(filePath);
        var fileSizeInBytes = stats.size;
        console.log(
          `Downloaded and saved ${fileSizeInBytes} bytes to ${filePath}`
        );
      }
      // file written successfully
    });
  } else {
    if (error.code === "ENOTFOUND") {
      console.log(`The URL ${URL}  typed is not valid`);
    } else {
      console.log(error);
    }
  }
});
//write file to disk
