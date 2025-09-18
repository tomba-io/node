import { TombaClient, LeadsAttributes } from "tomba";

// Init Tomba
const client = new TombaClient();
const leadsAttributes = new LeadsAttributes(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = leadsAttributes.getLeadAttributes();

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
