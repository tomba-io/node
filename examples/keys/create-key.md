```js
const tomba = require('tomba');

// Init Tomba
let client = new tomba.Client();

let keys = new tomba.Keys(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
;

let result = keys.createKey();

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```