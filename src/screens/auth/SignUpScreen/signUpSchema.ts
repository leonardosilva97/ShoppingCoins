import {stringUtils} from '@utils';
import {z} from 'zod';

export const signUpSchema = z.object({
  name: z
    .string()
    .min(5, 'Nome muito curto')
    .max(50, 'Nome muito longo')
    .transform(stringUtils.capitalizeFirstLetter),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteries'),
  profilePicture: z.string().optional(),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
