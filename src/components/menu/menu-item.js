import { Link } from 'gatsby';
import React from 'react';
import SubMenu from './sub-menu';

const MenuItem = ({ page, index }) => {
  const itemName = page.pageContainerName
    ? page.pageContainerName
    : page.menuPage.pageName;

  return (
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    <li>
      {page.linkToExternalUrl ? (
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
        <span>{itemName}</span>
      )}
      {page.menuPageSubpages && <SubMenu page={page} itemName={itemName} />}
    </li>
  );
};

export default MenuItem;
