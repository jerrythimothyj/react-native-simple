import React, {useState} from 'react';
import {Icon, TabBar} from '@ant-design/react-native';
import Home from '../home/home.container';
import Friends from '../friends/friends.container';
import Profile from '../profile/profile.container';
import List from '../list/list.container';

const Router = () => {
  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="#f5f5f5">
      <TabBar.Item
        title="Home"
        icon={<Icon name="home" />}
        selected={selectedTab === 'home'}
        onPress={() => setSelectedTab('home')}>
        <Home />
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="ordered-list" />}
        title="List"
        badge={2}
        selected={selectedTab === 'list'}
        onPress={() => setSelectedTab('list')}>
        <List />
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="like" />}
        title="Friends"
        selected={selectedTab === 'friends'}
        onPress={() => setSelectedTab('friends')}>
        <Friends />
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="user" />}
        title="Profile"
        selected={selectedTab === 'profile'}
        onPress={() => setSelectedTab('profile')}>
        <Profile />
      </TabBar.Item>
    </TabBar>
  );
};

export default Router;
