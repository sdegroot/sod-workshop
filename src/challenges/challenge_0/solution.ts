import { z } from "zod";

export const Email = z.string().email();

export type Email = z.infer<typeof Email>;
export type EmailInput = z.input<typeof Email>;

export function validateEmail(email: EmailInput): Email {
    return Email.parse(email)
}