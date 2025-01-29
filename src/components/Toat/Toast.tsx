import {Dimensions} from 'react-native';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {useToast} from '@service';
import {useEffect} from 'react';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  const {toast, hiddenToast} = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hiddenToast();
      }, 2000);
    }
  }, [hiddenToast, toast]);

  if (!toast) return null;
  return (
    <Box top={100} {...$boxStyle}>
      <Icon color="success" name="checkCircle" />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast?.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  position: 'absolute',
  backgroundColor: 'background',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: {...$shadowProps},
};
