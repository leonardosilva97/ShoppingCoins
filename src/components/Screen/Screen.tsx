import React from 'react';
import {KeyboardAvoidingView, Platform, StatusBar} from 'react-native';

import {Box, BoxProps} from '@components';
import {UseAppTheme, useAppSafeArea} from '@hooks';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer/ScreenContainer';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  scrolable?: boolean;
  backgorund?: boolean;
}

export function Screen({
  children,
  backgorund = false,
  scrolable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const Container = scrolable ? ScrollViewContainer : ViewContainer;
  const {colors} = UseAppTheme();

  return (
    <KeyboardAvoidingView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Container
        backgroundColor={backgorund ? colors.grayWhite : colors.primary}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
