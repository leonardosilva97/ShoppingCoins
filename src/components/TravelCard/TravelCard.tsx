import React from 'react';
import {Box, Text} from '@components';
import Travel from 'src/brand/1973120';

export function TravelCard() {
  return (
    <Box flexDirection="row" mr="s12">
      <Box
        width={296}
        height={96}
        bg="primary"
        flexDirection="row"
        borderRadius="s16"
        justifyContent="center"
        alignItems="center">
        <Box mr="s8">
          <Travel />
        </Box>

        <Box height={96} justifyContent="center">
          <Text color="grayWhite" preset="paragraphCaption">
            Pacote{' '}
            <Text bold color="grayWhite" preset="paragraphCaption">
              ACAPUCO
            </Text>
          </Text>
          <Text color="grayWhite" preset="paragraphCaption">
            Guerrero - México
          </Text>
          <Box flexDirection="row" alignItems="center">
            <Text color="grayWhite" preset="paragraphCaption">
              lC
            </Text>
            <Text color="grayWhite" preset="headingLarge">
              50.000
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
