```js
const tomba = require('tomba');

// Init Tomba
let client = new tomba.Client();

let account = new tomba.Account(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
;

let result = account.getAccount();

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```