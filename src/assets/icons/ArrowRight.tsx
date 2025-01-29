import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

export function ArrowRightIcon({size = 24, color = '#7B22D3'}: IconBase) {
  return (
    <Svg width="10" height="18" viewBox="0 0 10 18" fill="none">
      <Path d="M1 1L9 9L1 17" stroke="#545454" />
    </Svg>
  );
}
