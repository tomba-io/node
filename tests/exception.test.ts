import { describe, it, expect } from "@jest/globals";
import { TombaException } from "../lib/index";

describe("TombaException", () => {
    it("should create an exception with a message", () => {
        const ex = new TombaException("error");
        expect(ex.message).toBe("error");
    });
});
