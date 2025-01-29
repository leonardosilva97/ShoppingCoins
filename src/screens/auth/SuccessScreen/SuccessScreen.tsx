import React from 'react';

import {Icon} from '@components';
import {Text, Screen, Button} from '@components';
import {AuthScreenProps} from '@routes';
import {useAuth} from '@hooks';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  const {singOut, successScreenEnter} = useAuth();

  function goBackToBegin() {
    singOut();
    navigation.goBack();
  }
  function goToApllication() {
    successScreenEnter();
    navigation.reset({
      index: 0,
      routes: [{name: 'AppStack'}],
    });
  }
  return (
    <Screen>
      <Icon {...route.params.icon} color="grayWhite" />
      <Text color="grayWhite" preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text color="grayWhite" preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button
        preset="outline"
        onPress={route.params.isApp ? goToApllication : goBackToBegin}
        title={route.params.buttonTitle}
        marginTop="s40"
      />
      {route.params.isApp && (
        <Button
          preset="outline"
          onPress={goBackToBegin}
          title="Voltar ao Inicio"
          marginTop="s16"
        />
      )}
    </Screen>
  );
}
