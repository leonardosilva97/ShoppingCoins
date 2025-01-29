import {z} from 'zod';

export const forgetPasswordSchema = z.object({
  email: z.string().email('E-mail inválido'),
});

export type ForgetPasswordSchema = z.infer<typeof forgetPasswordSchema>;
