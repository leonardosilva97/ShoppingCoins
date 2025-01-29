import React from 'react';
import {Pressable} from 'react-native';

import {UseAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {ArrowLeftSquareIcon} from '../../assets/icons/ArrowLeftSquareIcon';
import {Bag3Icon} from '../../assets/icons/Bag3Icon';
import {BankIcon} from '../../assets/icons/BankIcon';
import {CheckCircleIcon} from '../../assets/icons/CheckCircleIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {Loader2Icon} from '../../assets/icons/Loader2Icon';
import {LockIcon} from '../../assets/icons/LockIcon';
import {MyAccountIcon} from '../../assets/icons/MyAccountIcon';
import {PersonFillIcon} from '../../assets/icons/PersonFillIcon';
import {ScheduleIcon} from '../../assets/icons/ScheduleIcon';
import {ShoppingBagIcon} from '../../assets/icons/ShoppingBagIcon';
import {ShoppingCartIcon} from '../../assets/icons/ShoppingCartIcon';
import {UserIcon} from '../../assets/icons/UserIcon';
import {WalletIcon} from '../../assets/icons/WalletIcon';
import {NotificationIcon} from 'src/assets/icons/Notification';
import {CameraIcon} from 'src/assets/icons/CameraIcon';
import {ArrowLightIcon} from 'src/assets/icons/ArrowLight';
import {ArrowRightIcon} from 'src/assets/icons/ArrowRight';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = UseAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }
  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftSquareIcon,
  bag: Bag3Icon,
  bank: BankIcon,
  checkCircle: CheckCircleIcon,
  home: HomeIcon,
  loader: Loader2Icon,
  lock: LockIcon,
  myAccount: MyAccountIcon,
  person: PersonFillIcon,
  schedule: ScheduleIcon,
  shoppingBag: ShoppingBagIcon,
  shoppingCart: ShoppingCartIcon,
  user: UserIcon,
  wallet: WalletIcon,
  notification: NotificationIcon,
  camera: CameraIcon,
  arrowLight: ArrowLightIcon,
  arrowRight: ArrowRightIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
