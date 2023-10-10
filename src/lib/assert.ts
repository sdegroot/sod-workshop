import { assert, expect } from "chai";
import { ZodError, ZodIssue } from "zod";

export function expectZodErrors(fn: () => any, expectedErrors: ZodIssue[]) {
    try {
        fn();
        assert.fail('Expected ZodErrors: ' + expectedErrors)
    } catch (error) {
        if (error instanceof ZodError) {
            // console.log(JSON.stringify(error.issues, null, 2));
            expect(error.issues).to.have.same.deep.members(expectedErrors);
        } else {
            throw error;
        }
    }
}