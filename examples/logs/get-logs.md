```js
const tomba = require('tomba');

// Init Tomba
let client = new tomba.Client();

let logs = new tomba.Logs(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
;

let result = logs.getLogs();

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
