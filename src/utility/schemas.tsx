import { z } from "zod/v4";

export const agentContactSchema = z.object({
    name: z.string().min(2, "Navn er påkrævet"),
    email: z.email(),
    subject: z.string().min(5, "Emne skal være mindst 5 tegn langt").optional(),
    message: z.string().min(10, "Besked skal være mindst 10 tegn langt"),

});
export type AgentContactFormData = z.infer<typeof agentContactSchema>;


export const contactSchema = z.object({
    name: z.string().min(2, "Navn skal være mindst 2 tegn langt"),
    email: z.email("Ugyldig email adresse").min(1),
    subject: z.string().min(5, "Emne skal være mindst 5 tegn langt").optional(),
    message: z.string().min(10, "Besked skal være mindst 10 tegn langt"),

});
export type ContactFormData = z.infer<typeof contactSchema>;



export const loginSchema = z.object({
    identifier: z.string().min(1, "Email er påkrævet").email("Ugyldig email adresse"),
    password: z.string().min(6, "Adgangskode skal være mindst 6 tegn langt"),
});
// export type LoginSchemaData = z.infer<typeof loginSchema>;



export const registerSchema = z.object({
    username: z.string().min(2, "Navn skal være mindst 2 tegn langt"),
    email: z.string().min(1, "Email er påkrævet").email("Ugyldig email adresse"),
    password: z.string().min(6, "Adgangskode skal være mindst 6 tegn langt"),
    confirmPassword: z.string().min(6, "Bekræft adgangskode skal være mindst 6 tegn langt"),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["custom"],
    message: "Adgangskoderne matcher ikke",
});
// export type LoginSchemaData = z.infer<typeof loginSchema>;