import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import {UseAppTheme} from '@hooks';

import {BoxProps, Box} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  errorMessage?: string;
  LeftComponent?: React.ReactElement;
  boxProps?: BoxProps;
  isSecureTextEntry?: boolean;
}

export function TextInput({
  errorMessage,
  LeftComponent,
  boxProps,
  isSecureTextEntry = false,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = UseAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInpuContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 1 : 0,
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's16',
    backgroundColor: 'background',
    elevation: 24,
    shadowColor: 'gray3',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 16.0,
    shadowRadius: 34,
  };

  function focusInput() {
    inputRef.current?.focus();
  }
  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Box {...$textInpuContainer}>
          {LeftComponent && (
            <Box ml="s8" mr="s8" justifyContent="center">
              {LeftComponent}
            </Box>
          )}
          <RNTextInput
            secureTextEntry={isSecureTextEntry}
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray1}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
        </Box>
        {errorMessage && (
          <Text color="error" mt="s4" preset="paragraphSmall" bold>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  height: 28,
  padding: 0,
  fontFamily: $fontFamily.semiBold,
  ...$fontSizes.paragraphSmall,
};
