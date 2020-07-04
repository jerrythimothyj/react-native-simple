import React from 'react';
import {Icon, TabBar} from '@ant-design/react-native';

import {
  UNSELECTED_TINT_COLOR,
  TINT_COLOR,
  BAR_TINT_COLOR,
  NAV_ITEMS,
} from '../../constants/navbar/navbar.constants';
import {NavBarProps} from '../../types/navbar/navbar.types';

const Navbar = (props: NavBarProps) => {
  return (
    <TabBar
      unselectedTintColor={UNSELECTED_TINT_COLOR}
      tintColor={TINT_COLOR}
      barTintColor={BAR_TINT_COLOR}>
      {NAV_ITEMS.map((navItem: any, index) => {
        return (
          <TabBar.Item
            key={index}
            title={navItem.title}
            icon={<Icon name={navItem.iconName} />}
            selected={props.selectedNav === navItem.nav}
            onPress={() => props.onClickNavItem(navItem.nav)}>
            {navItem.component()}
          </TabBar.Item>
        );
      })}
    </TabBar>
  );
};

export default Navbar;
