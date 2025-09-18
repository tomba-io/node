import { describe, it, expect } from "@jest/globals";
import { Account } from "../lib/index";
describe("Account Service", () => {
    it("should be defined", () => {
        expect(Account).toBeDefined();
    });
});
