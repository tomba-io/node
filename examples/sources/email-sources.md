```js
const tomba = require('tomba');

// Init Tomba
let client = new tomba.Client();

let sources = new tomba.Sources(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
;

let result = sources.emailSources('b.mohamed@tomba.io');

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```