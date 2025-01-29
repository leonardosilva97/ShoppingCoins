import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '@components';

import {LoginScreen} from '../screens/auth/LoginScreen/Login';

import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';
import {SignUpScreen} from 'src/screens/auth/SignUpScreen/SignUpScreen';
import {ForgetPasswordScreen} from 'src/screens/auth/ForgetPasswordScreen/ForgetPassword';
import {AppStack} from '@routes';

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
    buttonTitle: string;
    isApp: boolean;
  };
  ForgetPasswordScreen: undefined;
  AppStack: undefined;
};
const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamList>();

export function AuthSatck() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
      <Screen name="SuccessScreen" component={SuccessScreen} />
      <Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
      <Screen name="AppStack" component={AppStack} />
    </Navigator>
  );
}
