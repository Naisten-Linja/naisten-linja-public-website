import { Link } from 'gatsby';
import React from 'react';
import ExternalLinkIcon from '../icons/externalLink';

const MenuLink = ({ page, className, id }) => {
  const itemName = page.pageContainerName
    ? page.pageContainerName
    : page.menuPage.pageName;

  return page.linkToExternalUrl ? (
    <a href={page.linkToExternalUrl} className={className} id={id}>
      {itemName}{' '}
      <ExternalLinkIcon
        style={{ marginLeft: '0.25rem', marginBottom: '0.25rem' }}
      />
      <span className="visually-hidden">Linkki vie ulkoiseen palveluun</span>
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
