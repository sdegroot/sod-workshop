import { assert, expect } from "chai";
import { ZodError, ZodIssue } from "zod";
import { fromZodError } from "zod-validation-error";

export function expectZodErrors(fn: () => any, expectedErrors: ZodIssue[]) {
    try {
        fn();
        assert.fail('Expected ZodErrors: ' + expectedErrors)
    } catch (error) {
        if (error instanceof ZodError) {
            // console.log(fromZodError(error).toString())
            expect(error.issues).to.have.same.deep.members(expectedErrors);
        } else {
            throw error;
        }
    }
}