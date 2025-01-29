import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Text,
  Screen,
  Button,
  FormTextInput,
  BoxBaseBody,
  Box,
  Image,
} from '@components';

import {signUpSchema, SignUpSchema} from './signUpSchema';
import {$screen} from '@utils';

import {AuthScreenProps} from '@routes';
import {useAuth, useResetNavigationSuccess} from '@hooks';

export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {signUp, isLoading} = useAuth();
  const {reset} = useResetNavigationSuccess();
  const {control, handleSubmit, formState} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function goBack() {
    navigation.goBack();
  }

  async function submitForm(formValues: SignUpSchema) {
    formValues.profilePicture =
      'data:image/jpeg;base64,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';
    await signUp({
      ...formValues,
      profilePicture: formValues.profilePicture || '',
      saldo: 1000,
      dataDeCadastro: new Date().toISOString(),
    });
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      buttonTitle: 'Voltar para o login',
      isApp: false,
      icon: {
        name: 'checkCircle',
        color: 'success',
      },
    });
  }

  return (
    <Screen scrolable style={$screen}>
      <Box paddingHorizontal="s24" alignItems="center" mb="s32">
        <Box paddingVertical="s24">
          <Image
            editable
            width={96}
            height={96}
            source={{
              uri: '',
            }}
          />
        </Box>
      </Box>

      <BoxBaseBody paddingHorizontal="s24">
        <Box justifyContent="center" alignItems="center">
          <Text preset="paragraphMedium" semiBold mt="s32" mb="s24">
            Crie sua conta
          </Text>
        </Box>

        <FormTextInput
          control={control}
          name="name"
          autoCapitalize="words"
          placeholder="Digite seu nome completo"
          boxProps={{mb: 's20'}}
        />
        <FormTextInput
          control={control}
          name="email"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's20'}}
        />
        <FormTextInput
          control={control}
          name="password"
          placeholder="Digite sua senha"
          boxProps={{mb: 's48'}}
        />

        <Button
          isLoading={isLoading}
          disabled={!formState.isValid}
          title="Criar uma conta"
          onPress={handleSubmit(submitForm)}
        />
        <Button
          marginVertical="s24"
          preset="outline"
          title="voltar"
          onPress={goBack}
        />
      </BoxBaseBody>
    </Screen>
  );
}
