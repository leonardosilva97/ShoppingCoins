import React from 'react';
import {ScrollView, View} from 'react-native';

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps={'handled'}
      showsVerticalScrollIndicator={false}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor,
        flex: 1,
        overflow: 'hidden',
      }}
      // eslint-disable-next-line react-native/no-inline-styles

      contentContainerStyle={{flexGrow: 1}}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children, backgroundColor}: Props) {
  // eslint-disable-next-line react-native/no-inline-styles
  return (
    <View
      style={{
        backgroundColor,
        flex: 1,
        overflow: 'hidden',
      }}>
      {children}
    </View>
  );
}
