import { TombaClient, Keys } from "tomba";

// Init Tomba
const client = new TombaClient();
const keys = new Keys(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = keys.deleteKey("");

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
