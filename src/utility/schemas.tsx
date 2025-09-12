import { z } from "zod/v4";

export const agentContactSchema = z.object({
    name: z.string().min(2, "Navn er påkrævet"),
    email: z.email(),
    subject: z.string().min(5, "Emne skal være mindst 5 tegn langt").optional(),
    message: z.string().min(10, "Besked skal være mindst 10 tegn langt"),

});
export type ContactFormData = z.infer<typeof agentContactSchema>;


export const contactSchema2 = z.object({
    name: z.string().min(2, "Navn skal være mindst 2 tegn langt"),
    email: z.email("Ugyldig email adresse").min(1),
    subject: z.string().min(5, "Emne skal være mindst 5 tegn langt").optional(),
    message: z.string().min(10, "Besked skal være mindst 10 tegn langt"),

});
export type ContactFormData2 = z.infer<typeof contactSchema2>;