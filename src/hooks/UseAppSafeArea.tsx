import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {UseAppTheme} from './UseAppTheme';

export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();
  const {spacing} = UseAppTheme();

  return {
    top: Math.max(top, spacing.s20),
    bottom: Math.max(bottom, spacing.s20),
  };
}
