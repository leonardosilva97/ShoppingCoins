import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthSatck} from './AuthStack';
import Bootplash from 'react-native-bootsplash';
import {useAuth} from '@hooks';
import {storageSuccessGet} from '@storage';

export function Router() {
  const {user} = useAuth();
  const {success} = storageSuccessGet();
  const isAuthenticated = !!user.id;

  console.log('user route', user);
  console.log('isath', isAuthenticated);
  console.log('success route', success);
  return (
    <NavigationContainer onReady={() => Bootplash.hide({fade: true})}>
      {isAuthenticated && success ? <AppStack /> : <AuthSatck />}
    </NavigationContainer>
  );
}
