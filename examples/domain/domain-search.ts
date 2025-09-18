import { TombaClient, Domain } from "tomba";

// Init Tomba
const client = new TombaClient();
const domain = new Domain(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = domain.domainSearch("stripe.com");

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
