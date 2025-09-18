import { describe, it, expect } from "@jest/globals";
import { Verifier } from "../lib/services/verifier";
describe("Verifier Service", () => {
    it("should be defined", () => {
        expect(Verifier).toBeDefined();
    });
});
