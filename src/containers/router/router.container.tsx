import React, {useState} from 'react';
import Navbar from '../navbar/navbar.container';

const Router = () => {
  const [selectedNav, setSelectedNav] = useState('home');

  const handleClickNavItem = (navItem: string) => {
    setSelectedNav(navItem);
  };

  return (
    <Navbar selectedNav={selectedNav} onClickNavItem={handleClickNavItem} />
  );
};

export default Router;
