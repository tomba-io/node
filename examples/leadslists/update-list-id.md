```js
const tomba = require('tomba');

// Init Tomba
let client = new tomba.Client();

let leadsLists = new tomba.LeadsLists(client);

client
  .setKey("ta_xxxx") // Your Key
  .setSecret("ts_xxxx"); // Your Secret
;

let result = leadsLists.updateListId('[List_ID]');

result
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```