```js
const tomba = require('tomba');

// Init Tomba
let client = new tomba.Client();

let usage = new tomba.Usage(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
;

let result = usage.getUsage();

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```