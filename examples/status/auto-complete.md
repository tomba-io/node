```js
const tomba = require('tomba');

// Init Tomba
let client = new tomba.Client();

let status = new tomba.Status(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
;

let result = status.autoComplete('google');

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```