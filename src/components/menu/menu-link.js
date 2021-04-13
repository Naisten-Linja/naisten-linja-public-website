import { Link } from 'gatsby';
import React from 'react';

const MenuLink = ({ page, className, id }) => {
  const itemName = page.pageContainerName
    ? page.pageContainerName
    : page.menuPage.pageName;

  return page.linkToExternalUrl ? (
    <a href={page.linkToExternalUrl} className={className} id={id}>
      {itemName}
    </a>
  ) : (
    <Link
      to={`/${page.menuPage.slug}`}
      activeClassName="active-link"
      className={className}
      id={id}
    >
      {itemName}
    </Link>
  );
};

export default MenuLink;
