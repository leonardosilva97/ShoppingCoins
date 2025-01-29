import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

export function WalletIcon({size = 24, color = '#7621CA'}: IconBase) {
  const height = (size / 24) * 20; // Mantém a proporção original de 24x20
  return (
    <Svg width={size} height={height} viewBox="0 0 24 20" fill="none">
      <Path
        d="M20 10V6.66671H6C5.46957 6.66671 4.96086 6.49111 4.58579 6.17855C4.21071 5.86599 4 5.44207 4 5.00004C4 4.08337 4.9 3.33337 6 3.33337H18V6.66671"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 5V15C4 15.9167 4.9 16.6667 6 16.6667H20V13.3333"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 10C17.4696 10 16.9609 10.1756 16.5858 10.4882C16.2107 10.8007 16 11.2246 16 11.6667C16 12.5833 16.9 13.3333 18 13.3333H22V10H18Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
