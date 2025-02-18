import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

export function ArrowLeftSquareIcon({size = 24, color = '#7B22D3'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.908 0C21.144 0 24 2.7252 24 6.792V17.196C24 21.264 21.144 24 16.908 24H7.104C2.856 24 0 21.264 0 17.196V6.792C0 2.7252 2.856 0 7.104 0H16.908ZM12.252 6.864C11.904 6.516 11.328 6.516 10.98 6.864L6.456 11.364C6.12 11.7 6.12 12.3 6.456 12.636L10.98 17.136C11.328 17.484 11.904 17.484 12.252 17.136C12.6 16.776 12.6 16.212 12.252 15.852L9.276 12.9H16.896C17.4 12.9 17.796 12.492 17.796 12C17.796 11.496 17.4 11.1 16.896 11.1H9.276L12.252 8.136C12.42 7.968 12.516 7.728 12.516 7.5C12.516 7.2732 12.42 7.044 12.252 6.864Z"
        fill={color}
      />
    </Svg>
  );
}
