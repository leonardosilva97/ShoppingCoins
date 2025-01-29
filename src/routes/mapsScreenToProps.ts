import {IconProps} from '@components';
import {AppTabBottomTabParamList} from '@routes';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: IconProps['name'];
  }
> = {
  Home: {
    label: 'Inicio',
    icon: 'home',
  },
  Shop: {
    label: 'Shop',
    icon: 'bag',
  },
  Profile: {
    label: 'Favorito',
    icon: 'myAccount',
  },
};
