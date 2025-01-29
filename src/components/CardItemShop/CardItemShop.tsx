import React from 'react';
import {Image, Text} from 'react-native';
import {Box, CardItemButton} from '@components';
import {ProductInfo} from './components/ProductInfo';
import {ProductPrice} from './components/ProductPrice';
import {Product} from '@domain';

interface Props {
  product: Product;
  payment: () => void;
}

export function CardItemShop({product, payment}: Props) {
  return (
    <Box
      height={243}
      width={167}
      elevation={12}
      bg="grayWhite"
      borderRadius="s16">
      {/* <Text>{JSON.stringify(product?.imageUrl)}</Text> */}
      <Image
        resizeMode="cover"
        source={{
          uri: product?.imageUrl,
        }}
        style={{
          width: '100%',
          height: 111,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      />
      <Box pl="s8" pt="s16" pb="s16">
        <ProductInfo
          ProductTitle={product?.name}
          ProductQuantity={`${product?.quantity} unidade(s)`}
        />
      </Box>
      <Box flexDirection="row" alignItems="flex-end">
        <ProductPrice
          price={product?.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        />
        <CardItemButton onPress={payment} />
      </Box>
    </Box>
  );
}
