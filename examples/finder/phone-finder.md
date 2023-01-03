```js
const tomba = require('tomba');

// Init Tomba
let client = new tomba.Client();

let finder = new tomba.Finder(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
;

let result = finder.phoneFinder('******@zapier.com');

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```