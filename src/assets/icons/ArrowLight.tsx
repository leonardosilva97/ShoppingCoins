import React from 'react';
import {Svg, Path, G, Defs, Filter} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

export function ArrowLightIcon({size = 24, color = '#7B22D3'}: IconBase) {
  return (
    <Svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <G filter="url(#filter0_d_3911_584)">
        <Path
          d="M32.908 12C37.144 12 40 14.7252 40 18.792V29.196C40 33.264 37.144 36 32.908 36H23.104C18.856 36 16 33.264 16 29.196V18.792C16 14.7252 18.856 12 23.104 12H32.908ZM28.252 18.864C27.904 18.516 27.328 18.516 26.98 18.864L22.456 23.364C22.12 23.7 22.12 24.3 22.456 24.636L26.98 29.136C27.328 29.484 27.904 29.484 28.252 29.136C28.6 28.776 28.6 28.212 28.252 27.852L25.276 24.9H32.896C33.4 24.9 33.796 24.492 33.796 24C33.796 23.496 33.4 23.1 32.896 23.1H25.276L28.252 20.136C28.42 19.968 28.516 19.728 28.516 19.5C28.516 19.2732 28.42 19.044 28.252 18.864Z"
          fill="white"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_3911_584"
          x="0"
          y="0"
          width={size}
          height={size}
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3911_584"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3911_584"
            result="shape"
          />
        </Filter>
      </Defs>
    </Svg>
  );
}
