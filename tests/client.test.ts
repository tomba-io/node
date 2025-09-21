import { describe, it, expect } from "@jest/globals";
import { TombaClient } from "../lib/index";

describe("Client", () => {
    it("should instantiate with default values", () => {
        const client = new TombaClient();
        expect(client.endpoint).toBe("https://api.tomba.io/v1");
        expect(client.headers["x-sdk-version"]).toBe("tomba:nodejs:v1.0.4");
    });
});
