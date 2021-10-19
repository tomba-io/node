```js
const tomba = require('tomba');

// Init Tomba
let client = new tomba.Client();

let count = new tomba.Count(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
;

let result = count.emailCount('tomba.io');

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```