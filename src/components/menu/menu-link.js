import { Link } from 'gatsby';
import React from 'react';
import ExternalLinkIcon from '../icons/externalLink';

const MenuLink = ({ page, className, id }) => {
  const itemName = page.pageName;

  return page.linkToExternalUrl ? (
    <a href={page.linkToExternalUrl} className={className}>
      {itemName} <ExternalLinkIcon aria-label="Linkki vie toiseen palveluun" />
    </a>
  ) : (
    <Link
      to={`/${page.pageSlug}`}
      activeClassName="active-link"
      className={className}
    >
      {itemName}
    </Link>
  );
};

export default MenuLink;
