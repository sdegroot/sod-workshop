import { z } from "zod";

class Test {
    name: string = 'name';
}

const TestSchema = z.instanceof(Test);

TestSchema.parse(new Test()); // passes
TestSchema.parse("blob"); // throws