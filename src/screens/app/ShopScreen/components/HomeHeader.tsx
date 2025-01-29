import React from 'react';

import {Box, BoxProps, CardItemButton, Text} from '@components';
import {useAppSafeArea} from '@hooks';

interface HomeHeaderProps {
  onBackPress: () => void;
}

export function HomeHeader({onBackPress}: HomeHeaderProps) {
  const {top} = useAppSafeArea();
  return (
    <Box {...$wrapper} style={{paddingTop: top}} bg="primary">
      <CardItemButton
        onPress={onBackPress}
        icon="arrowLeft"
        color="primary"
        bg="grayWhite"
      />
      <Text ml="s8" color="grayWhite" preset="paragraphSmall">
        Voltar
      </Text>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  paddingBottom: 's24',
  paddingHorizontal: 's24',
  alignItems: 'center',
};
