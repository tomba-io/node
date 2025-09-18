import { TombaClient, Usage } from "tomba";

// Init Tomba
const client = new TombaClient();
const usage = new Usage(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = usage.getUsage();

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
