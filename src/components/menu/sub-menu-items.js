import React from 'react';
import MenuLink from './menu-link';

const SubMenuItems = ({ page }) => {
  return (
    <ul>
      {page.subPages.map((item, i) => (
        <li key={item.id}>
          <MenuLink page={item} />
        </li>
      ))}
    </ul>
  );
};

export default SubMenuItems;
