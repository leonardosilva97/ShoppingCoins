import React from 'react';
import {Box, Text} from '@components';

interface Props {
  ProductTitle: string;
  ProductQuantity: string;
}

export function ProductInfo({ProductQuantity, ProductTitle}: Props) {
  return (
    <Box>
      <Text preset="paragraphSmall" semiBold>
        {ProductTitle}
      </Text>
      <Text preset="paragraphCaptionSmall" color="gray4">
        {ProductQuantity}
      </Text>
    </Box>
  );
}
