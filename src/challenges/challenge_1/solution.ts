import { z } from "zod";

const SignupForm = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
    age: z.number().int().min(18),
})

export function signUp(form: any) {
    SignupForm.parse(form)
}