import { TombaClient, Count } from "tomba";

// Init Tomba
const client = new TombaClient();
const count = new Count(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = count.emailCount("tomba.io");

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
