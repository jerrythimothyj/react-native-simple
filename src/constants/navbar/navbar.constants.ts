import Home from '../../containers/home/home.container';
import List from '../../containers/list/list.container';
import Friends from '../../containers/friends/friends.container';
import Profile from '../../containers/profile/profile.container';

export const UNSELECTED_TINT_COLOR = '#949494';
export const TINT_COLOR = '#33A3F4';
export const BAR_TINT_COLOR = '#f5f5f5';
export const NAV_ITEMS = [
  {
    title: 'Home',
    iconName: 'home',
    nav: 'home',
    component: Home,
  },
  {
    title: 'List',
    iconName: 'ordered-list',
    nav: 'list',
    component: List,
  },
  {
    title: 'Friends',
    iconName: 'like',
    nav: 'friends',
    component: Friends,
  },
  {
    title: 'Profile',
    iconName: 'user',
    nav: 'profile',
    component: Profile,
  },
];
