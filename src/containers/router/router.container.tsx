import React, {useState} from 'react';
import Navbar from '../../components/navbar/navbar.component';
import {NAV_ITEMS} from '../../constants/navbar/navbar.constants';

const Router = () => {
  const [selectedNav, setSelectedNav] = useState(NAV_ITEMS[0].nav);

  const handleClickNavItem = (navItem: string) => {
    setSelectedNav(navItem);
  };

  return (
    <Navbar selectedNav={selectedNav} onClickNavItem={handleClickNavItem} />
  );
};

export default Router;
