import { describe, it, expect } from "@jest/globals";
import { Logs } from "../lib/index";

describe("Logs Service", () => {
    it("should be defined", () => {
        expect(Logs).toBeDefined();
    });
});
