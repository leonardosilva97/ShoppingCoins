import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Text, Screen, Button, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {
  forgetPasswordSchema,
  ForgetPasswordSchema,
} from './forgetPasswordScreen';

export function ForgetPasswordScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AuthScreenProps<'ForgetPasswordScreen'>) {
  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    // TODO: implements submit form

    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviaddo no seu e-mail para recuperar sua senha',
      buttonTitle: 'Voltar ao inicio',
      isApp: false,
      icon: {
        name: 'checkCircle',
        color: 'primary',
      },
    });
  }

  function goBack() {
    navigation.goBack();
  }

  const {control, handleSubmit, formState} = useForm<ForgetPasswordSchema>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });
  return (
    <Screen>
      <Text color="grayWhite" preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text color="grayWhite" preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />
      <Button
        preset="outline"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
      <Button
        marginVertical="s24"
        preset="outline"
        title="voltar"
        onPress={goBack}
      />
    </Screen>
  );
}
