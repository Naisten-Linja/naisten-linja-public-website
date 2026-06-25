import { Link } from 'gatsby';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import SubMenu from './sub-menu';

const MenuItem = ({ page, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const itemName = page.pageContainerName
    ? page.pageContainerName
    : page.menuPage.pageName;
  const hasSubPages = page.menuPageSubpages?.length > 0;
  const subMenuId = `sub-menu-${index}`;

  const topLevelLink = page.linkToExternalUrl ? (
    <a href={page.linkToExternalUrl} id={`top-level-item-${index}`}>
      {itemName}
    </a>
  ) : page.menuPage?.slug ? (
    <Link
      to={`/${page.menuPage?.slug}`}
      activeClassName="active-link"
      id={`top-level-item-${index}`}
    >
      {itemName}
    </Link>
  ) : (
    <span id={`top-level-item-${index}`}>{itemName}</span>
  );

  return (
    <li
      className={`menu-item ${hasSubPages ? 'has-submenu' : ''} ${
        isExpanded ? 'submenu-expanded' : ''
      }`}
    >
      <div className="menu-item__row">
        <div className="menu-item__link">{topLevelLink}</div>
        {hasSubPages && (
          <button
            type="button"
            className="submenu-toggle"
            aria-expanded={isExpanded}
            aria-controls={subMenuId}
            aria-label={`${
              isExpanded ? 'Piilota' : 'Näytä'
            } alavalikko: ${itemName}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <BiChevronDown aria-hidden="true" />
          </button>
        )}
      </div>
      {hasSubPages && (
        <SubMenu
          id={subMenuId}
          isExpanded={isExpanded}
          page={page}
          itemName={itemName}
        />
      )}
    </li>
  );
};

export default MenuItem;
