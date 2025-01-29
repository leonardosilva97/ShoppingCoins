import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

export function ShoppingBagIcon({size = 24, color = '#7B22D3'}: IconBase) {
  const height = (size / 24) * 20; // Mantém a proporção original de 24x20
  return (
    <Svg width={size} height={height} viewBox="0 0 24 20" fill="none">
      <Path
        d="M6 1.66663L3 4.99996V16.6666C3 17.1087 3.21071 17.5326 3.58579 17.8451C3.96086 18.1577 4.46957 18.3333 5 18.3333H19C19.5304 18.3333 20.0391 18.1577 20.4142 17.8451C20.7893 17.5326 21 17.1087 21 16.6666V4.99996L18 1.66663H6Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 5H21"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 8.33337C16 9.21743 15.5786 10.0653 14.8284 10.6904C14.0783 11.3155 13.0609 11.6667 12 11.6667C10.9391 11.6667 9.92172 11.3155 9.17157 10.6904C8.42143 10.0653 8 9.21743 8 8.33337"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
