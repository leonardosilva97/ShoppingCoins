import React from 'react';
import {Box, Icon, Text, TouchableOpacityBox} from '@components';

interface TotalWalletProps {
  balance: number;
  onNavigate: () => void;
}

export function TotalWallet({onNavigate, balance}: TotalWalletProps) {
  return (
    <Box
      style={{marginTop: -28}}
      mb="s40"
      backgroundColor="grayWhite"
      flexDirection="row"
      height={62}
      borderRadius="s16"
      elevation={12}
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="s16">
      <Box flexDirection="row">
        <Icon name="wallet" color="primary" />
        <Text ml="s8">Lc </Text>
        <Text bold>{balance}</Text>
      </Box>
      <TouchableOpacityBox
        onPress={onNavigate}
        flexDirection="row"
        width={100}
        justifyContent="flex-end"
        alignItems="center"
        borderLeftWidth={3}
        borderColor="gray5"
        height={'100%'}>
        <Icon name="shoppingBag" color="primary" />
        <Text>Shop</Text>
      </TouchableOpacityBox>
    </Box>
  );
}
