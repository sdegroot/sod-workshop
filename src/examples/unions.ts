/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";


// Basic unions

const stringOrNumber = z.union([z.string(), z.number()]);

// is equal to: const stringOrNumber = z.string().or(z.number());

stringOrNumber.parse("foo"); // passes
stringOrNumber.parse(14); // passes


// Discriminated unions

const myUnion = z.discriminatedUnion("status", [
    z.object({ status: z.literal("success"), data: z.string() }),
    z.object({ status: z.literal("failed"), error: z.instanceof(Error) }),
]);

myUnion.parse({ status: "success", data: "yippie ki yay" });