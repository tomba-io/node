import { TombaClient, Status } from "tomba";

// Init Tomba
const client = new TombaClient();
const status = new Status(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = status.domainStatus("gmail.com");

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
