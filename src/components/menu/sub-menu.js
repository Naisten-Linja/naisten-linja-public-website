import React from 'react';
import MenuLink from './menu-link';
import SubMenuItems from './sub-menu-items';

const SubMenu = ({ page, itemName }) => {
  return (
    <div className="MainMenu__submenu-container">
      <ul aria-label={itemName} className="submenu">
        {page.menuPageSubpages.map((subPage, i) => (
          <li key={subPage.id}>
            <MenuLink
              page={subPage}
              className="top-level-item"
              id={`sub-menu-item-${i}`}
            />
            {subPage.menuPageSubpages && <SubMenuItems page={subPage} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
