import { TombaClient, LeadsLists } from "tomba";

// Init Tomba
const client = new TombaClient();
const leadsLists = new LeadsLists(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = leadsLists.createList();

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
