import React from 'react';
import {Svg, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

export function ShoppingCartIcon({size = 16, color = '#7B22D3'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip0_1902_11651)">
        <Path
          d="M5.33329 14.6667C5.70148 14.6667 5.99996 14.3682 5.99996 14C5.99996 13.6319 5.70148 13.3334 5.33329 13.3334C4.9651 13.3334 4.66663 13.6319 4.66663 14C4.66663 14.3682 4.9651 14.6667 5.33329 14.6667Z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.6667 14.6667C13.0349 14.6667 13.3333 14.3682 13.3333 14C13.3333 13.6319 13.0349 13.3334 12.6667 13.3334C12.2985 13.3334 12 13.6319 12 14C12 14.3682 12.2985 14.6667 12.6667 14.6667Z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1.3667 1.3667H2.70003L4.47337 9.6467C4.53842 9.94994 4.70715 10.221 4.95051 10.4133C5.19387 10.6055 5.49664 10.7069 5.8067 10.7H12.3267C12.6301 10.6995 12.9244 10.5956 13.1607 10.4053C13.3971 10.215 13.5615 9.94972 13.6267 9.65336L14.7267 4.70003H3.41337"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1902_11651">
          <Rect width={16} height={16} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
