import { TombaClient, Sources } from "/dist/client";

// Init Tomba
const client = new TombaClient();
const sources = new Sources(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = sources.emailSources("b.mohamed@tomba.io");

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
