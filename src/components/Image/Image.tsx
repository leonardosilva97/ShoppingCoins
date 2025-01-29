import React from 'react';
import {Image as ImageRN, ImageProps as ImagePropsRN} from 'react-native';
import {Box, Icon, TouchableOpacityBox} from '@components';

export type ImageProps = {
  editable?: boolean;
  width?: number;
  height?: number;
  newImage?: () => void;
} & ImagePropsRN;

export function Image({
  editable = false,
  height = 40,
  width = 40,
  newImage,
  ...imagePropsRN
}: ImageProps) {
  return (
    <Box position="relative" width={width} height={height}>
      <ImageRN
        resizeMode="cover"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: width,
          height: height,
          borderRadius: 16,
          borderWidth: 2,
          borderColor: 'rgba(255, 255, 255, 0.329)',
        }}
        {...imagePropsRN}
      />
      {editable && (
        <TouchableOpacityBox
          onPress={newImage}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
            bottom: -10,
            left: '50%',
            transform: [{translateX: -10}],
          }}>
          <Box
            backgroundColor="grayWhite"
            borderRadius="s16"
            padding="s4"
            elevation={4}>
            <Icon name="camera" color="primary" size={12} />
          </Box>
        </TouchableOpacityBox>
      )}
    </Box>
  );
}
