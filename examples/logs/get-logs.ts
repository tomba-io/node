import { TombaClient, Logs } from "tomba";

// Init Tomba
const client = new TombaClient();
const logs = new Logs(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = logs.getLogs();

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
