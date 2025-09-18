import { TombaClient, Verifier } from "tomba";

// Init Tomba
const client = new TombaClient();
const verifier = new Verifier(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = verifier.emailVerifier("b.mohamed@tomba.io");

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
