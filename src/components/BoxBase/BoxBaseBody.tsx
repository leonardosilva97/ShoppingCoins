import React from 'react';
import {Box, BoxProps} from '@components';

interface BoxBaseProps extends BoxProps {
  children: React.ReactNode;
}

export function BoxBaseBody({children, ...boxProps}: BoxBaseProps) {
  return (
    <Box
      flex={1}
      backgroundColor="gray5"
      borderTopLeftRadius={'s24'}
      borderTopRightRadius={'s24'}
      {...boxProps}>
      {children}
    </Box>
  );
}
