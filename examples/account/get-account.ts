import { TombaClient, Account } from "tomba";

// Init Tomba
const client = new TombaClient();
const account = new Account(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = account.getAccount();

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
