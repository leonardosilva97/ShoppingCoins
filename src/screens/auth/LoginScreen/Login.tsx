import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Text,
  Screen,
  Button,
  FormTextInput,
  Icon,
  Box,
  BoxBaseBody,
  TouchableOpacityBox,
} from '@components';
import {AuthScreenProps} from '@routes';
import {useAuth, useResetNavigationSuccess} from '@hooks';

import {loginSchema, LoginSchema} from './loginScreen';
import {$screen} from 'src/utils/styles';
import Logo2 from 'src/brand/Logo2';
import {storageUserGet} from '@storage';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {singIn, isLoading} = useAuth();

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgetPasswordScreen() {
    navigation.navigate('ForgetPasswordScreen');
  }

  async function submitForm(formValues: LoginSchema) {
    try {
      await singIn(formValues.email, formValues.password);

      if (storageUserGet() !== null) {
        reset({
          title: 'Bem, vindo ao ShoppingCoins',
          description:
            'Clique no botão para começar a navegar em nossa aplicação',
          buttonTitle: 'Iniciar',
          isApp: true,
          icon: {
            name: 'checkCircle',
            color: 'secondary',
          },
        });
      }
    } catch (error) {
      console.log('error login:', error);
    }
  }
  return (
    <Screen scrolable style={$screen}>
      <Box
        justifyContent="center"
        alignItems="center"
        paddingBottom="s48"
        paddingTop="s48">
        <Logo2 />
      </Box>

      <BoxBaseBody paddingHorizontal="s24">
        <Box justifyContent="center" alignItems="center">
          <Text preset="paragraphMedium" semiBold mt="s32" mb="s24">
            Login
          </Text>
        </Box>
        <FormTextInput
          control={control}
          LeftComponent={<Icon name="user" size={16} color="primary" />}
          name="email"
          placeholder="E-mail"
          boxProps={{mb: 's24'}}
        />
        <FormTextInput
          isSecureTextEntry
          control={control}
          LeftComponent={<Icon name="lock" size={16} color="primary" />}
          name="password"
          placeholder="Senha"
          boxProps={{mb: 's32'}}
        />

        <Box alignItems="center">
          <Button
            isLoading={isLoading}
            width={100}
            disabled={!formState.isValid}
            marginBottom="s64"
            title="Entrar"
            onPress={handleSubmit(submitForm)}
          />
        </Box>
        <Box flexDirection="row" justifyContent="center" marginTop="s16">
          <TouchableOpacityBox onPress={navigateToSignUpScreen}>
            <Text mr="s4" color="gray3" preset="paragraphCaptionSmall">
              Registre-se
            </Text>
          </TouchableOpacityBox>
          <Text color="gray3" preset="paragraphCaptionSmall">
            |
          </Text>
          <TouchableOpacityBox onPress={navigateToForgetPasswordScreen}>
            <Text ml="s4" color="gray3" preset="paragraphCaptionSmall">
              Resetar senha
            </Text>
          </TouchableOpacityBox>
        </Box>
      </BoxBaseBody>
    </Screen>
  );
}
