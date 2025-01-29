import React from 'react';
import {Box, Text} from '@components';

interface Props {
  price: string;
}

export function ProductPrice({price}: Props) {
  return (
    <Box paddingHorizontal="s16">
      <Box>
        <Text color="primary" preset="paragraphCaptionSmall">
          Lc
        </Text>
        <Text preset="paragraphSmall" color="primary" semiBold>
          {price}
        </Text>
      </Box>
    </Box>
  );
}
