import React from 'react';
import {Box, Icon, Image, Text} from '@components';
import {ImageProps} from '@components';

interface HomeHeaderProps {
  name: string;
  uri: string;
}

export function HomeHeader({name, uri}: HomeHeaderProps & ImageProps) {
  return (
    <Box paddingHorizontal="s24" paddingBottom="s56" mt="s16">
      <Box
        mb="s20"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Image
          source={{
            uri: uri,
          }}
        />
        <Box
          backgroundColor="gray1"
          borderRadius="s24"
          padding="s4"
          paddingHorizontal="s8">
          <Text preset="paragraphSmall" semiBold color="grayWhite" bold>
            Shopping Coins
          </Text>
        </Box>
      </Box>
      <Box flexDirection="row" justifyContent="space-between">
        <Box flexDirection="row">
          <Text color="grayWhite">Olá, </Text>
          <Text bold color="grayWhite">
            {name}
          </Text>
        </Box>
        <Icon name="notification" color="grayWhite" size={24} />
      </Box>
    </Box>
  );
}
