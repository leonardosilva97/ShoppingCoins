import React from 'react';

import {
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  ActivityIndicator,
} from '@components';

import {Text, TextVariants} from '@components';

import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
  width?: number;
  presetText?: TextVariants;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled = false,
  width,
  presetText = 'paragraphMedium',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      width={width ? width : '100%'}
      alignItems="center"
      justifyContent="center"
      borderRadius={'s24'}
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset={presetText} bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
