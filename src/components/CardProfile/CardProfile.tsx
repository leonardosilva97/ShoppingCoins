import React from 'react';
import {Box, Icon, IconProps, Text} from '@components';

interface CardProfileProps {
  icon: IconProps['name'];
  title: string;
}

export function CardProfile({icon, title}: CardProfileProps) {
  return (
    <Box
      mb="s24"
      paddingHorizontal="s24"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      backgroundColor="grayWhite"
      elevation={12}
      height={80}
      borderRadius="s16">
      <Box flexDirection="row">
        <Icon name={icon} color="primary" />
        <Text ml="s16" preset="paragraphLarge" semiBold>
          {title}
        </Text>
      </Box>
      <Icon name="arrowRight" />
    </Box>
  );
}
