import { TombaClient, Finder } from "tomba";

// Init Tomba
const client = new TombaClient();
const finder = new Finder(client);

client
    .setKey("ta_xxxx") // Your Key
    .setSecret("ts_xxxx"); // Your Secret

const result = finder.linkedinFinder("https://www.linkedin.com/in/mattm");

result
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
