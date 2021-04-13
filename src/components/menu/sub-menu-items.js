import React from 'react';
import MenuLink from './menu-link';

const SubMenuItems = ({ page }) => {
  return (
    <ul>
      {page.menuPageSubpages.map((item, i) => (
        <li key={item.id}>
          <MenuLink page={item} id={`sub-page-item-${i}`} />
        </li>
      ))}
    </ul>
  );
};

export default SubMenuItems;
