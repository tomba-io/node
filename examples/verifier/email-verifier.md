```js
const tomba = require('tomba');

// Init Tomba
let client = new tomba.Client();

let verifier = new tomba.Verifier(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
;

let result = verifier.emailVerifier('b.mohamed@tomba.io');

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```