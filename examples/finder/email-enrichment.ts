import { TombaClient, Finder } from "tomba";

// Init Tomba
const client = new TombaClient();
const finder = new Finder(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = finder.emailEnrichment("dayna.winter@shopify.com");

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
