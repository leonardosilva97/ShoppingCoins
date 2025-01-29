import React from 'react';
import {
  Box,
  BoxProps,
  Icon,
  IconProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

interface CardItemButtonProps {
  color?: string;
  icon?: IconProps['name'];
  bg?: BoxProps['backgroundColor'];
}

export function CardItemButton({
  color = 'grayWhite',
  icon = 'shoppingCart',
  bg = 'primary',
  ...touchableOpacityBoxProps
}: CardItemButtonProps & TouchableOpacityBoxProps) {
  return (
    <TouchableOpacityBox {...touchableOpacityBoxProps}>
      <Box
        height={32}
        width={32}
        justifyContent="center"
        alignItems="center"
        borderRadius="s10"
        backgroundColor={bg}>
        <Icon name={icon} color={color} />
      </Box>
    </TouchableOpacityBox>
  );
}
