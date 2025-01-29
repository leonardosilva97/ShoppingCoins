import React, {useEffect} from 'react';

import {
  Box,
  BoxBaseBody,
  Button,
  CardItemShop,
  HomeHeader,
  Screen,
  TravelCard,
} from '@components';
import {AppTabScreenProps} from '@routes';
import {$screen} from '@utils';
import {TotalWallet} from '@components';
import {Platform, ScrollView} from 'react-native';
import {useProductList} from '@domain';
import {useToast} from '@service';
import {useAuth} from '@hooks';

import {PermissionsAndroid} from 'react-native';
import {getMessaging} from '@react-native-firebase/messaging';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'Home'>) {
  const {user} = useAuth();
  const {productList} = useProductList();
  const {showToast} = useToast();
  function navigationToShopList() {
    navigation.navigate('Shop');
  }

  useEffect(() => {
    async function requestNotificationPermission() {
      const token = await getMessaging().getToken();
      console.log('Token:', token);

      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Permissão de notificações concedida (Android 13+)');
        } else {
          console.log('Permissão de notificações negada.');
        }
      }
    }

    requestNotificationPermission();
  }, []);
  return (
    <Screen scrolable style={$screen}>
      <HomeHeader uri={user.profilePicture} name={user.name} />

      <BoxBaseBody>
        <Box paddingHorizontal="s24">
          <TotalWallet balance={user.saldo} onNavigate={navigationToShopList} />
        </Box>
        <Box height={96} mb="s40">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{paddingLeft: 24, height: '100%'}}>
            <Box flexDirection="row" mr="s24">
              <TravelCard />
              <TravelCard />
            </Box>
          </ScrollView>
        </Box>
        <Box
          paddingBottom="s34"
          paddingHorizontal="s24"
          flexDirection="row"
          justifyContent="space-between">
          <CardItemShop
            payment={() => showToast({message: 'parabens'})}
            product={productList[0]}
          />
          <CardItemShop
            payment={() => showToast({message: 'parabens'})}
            product={productList[1]}
          />
        </Box>

        <Box justifyContent="center" alignItems="center">
          <Button
            width={231}
            title="Ver todos os produtos"
            onPress={navigationToShopList}
          />
        </Box>
      </BoxBaseBody>
    </Screen>
  );
}
