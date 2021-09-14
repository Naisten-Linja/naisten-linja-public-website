import React from 'react';
import { Link } from 'gatsby';

const SitemapList = ({ pages, isTopLevel = false }) => {
  return (
    <ul>
      {pages.map((page) => (
        <li>
          {isTopLevel && page.subPages ? (
            <>{page.pageName}</>
          ) : (
            <>
              {page.linkToExternalUrl ? (
                <a href={page.linkToExternalUrl}>{page.pageName}</a>
              ) : (
                <Link to={`/${page.pageSlug}`}>{page.pageName}</Link>
              )}
            </>
          )}
          {page.subPages && <SitemapList pages={page.subPages} />}
        </li>
      ))}
    </ul>
  );
};

export default SitemapList;
