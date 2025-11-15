import { TombaClient, Reveal } from "tomba";

const client = new TombaClient();
client.setKey("your-api-key").setSecret("your-api-secret");

const reveal = new Reveal(client);

const response = await reveal.companiesSearch({
    query: "technology companies in san francisco",
    filters: {
        location_city: {
            include: ["san francisco"],
        },
        industry: {
            include: ["technology"],
        },
        size: {
            include: ["51-200", "201-500"],
        },
    },
    page: 1,
});

console.log(response.data.companies);
console.log(`Total: ${response.meta.total}`);
