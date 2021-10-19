```js
const tomba = require('tomba');

// Init Tomba
let client = new tomba.Client();

let leadsAttributes = new tomba.LeadsAttributes(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
;

let result = leadsAttributes.getLeadAttributes();

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```