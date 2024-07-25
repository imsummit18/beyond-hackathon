import { z } from 'zod';

const SetPasswordSchema: any = (t: any) =>
  z
    .object({
      password: z
        .string({
          required_error: t('Please_enter_your_password'),
        })
        .min(6, t('Password_must_be_at_least_6_characters_long')),
      confirm_password: z
        .string({
          required_error: t('Please_enter_your_confirmation_password'),
        })
        .min(6, t('Password_must_be_at_least_6_characters_long')),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: t('Password_and_Confirmation_Password_must_be_same'),
      path: ['confirm_password'],
    });

type SetPasswordSchemaType = z.infer<typeof SetPasswordSchema>;
export { SetPasswordSchema, type SetPasswordSchemaType };
