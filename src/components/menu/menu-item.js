import { Link } from 'gatsby';
import React, { useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import ArrowIcon from './icons/arrow';
import SubMenu from './sub-menu';

const MenuItem = ({ page, index, activeItem, setActiveItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const itemName = page.pageName;

  const isMobile = useIsMobile();
  const handleExpanded = async () => {
    const changedValue = !isExpanded;
    await setIsExpanded(changedValue);

    if (changedValue) {
      setActiveItem(index);
    }
  };

  const handleEsc = (event) => {
    if (event.key === 'Escape') {
      setIsExpanded(false);
    }
  };

  const handleMouseEnter = () => {
    if (!isExpanded && page.subPages.length) {
      setIsExpanded(true);
      setActiveItem(index);
    }
  };

  const handleMouseExit = () => {
    if (isExpanded && page.subPages.length) {
      setIsExpanded(false);
    }
  };

  const shouldExpand = isExpanded && activeItem === index;

  return (
    <li
      className={shouldExpand ? 'is-expanded' : ''}
      onMouseLeave={handleMouseExit}
      onMouseEnter={handleMouseEnter}
      onKeyUp={handleEsc}
    >
      {page.subPages ? (
        <button
          aria-expanded={isExpanded}
          onClick={handleExpanded}
          className="top-level-button"
          id={`top-level-item-${index}`}
        >
          {itemName}
          {isMobile && (
            <ArrowIcon ariaLabel="Avaa valikko" rotate={isExpanded} />
          )}
        </button>
      ) : page.linkToExternalUrl ? (
        <a href={page.linkToExternalUrl} id={`top-level-item-${index}`}>
          {itemName}
        </a>
      ) : (
        <Link
          to={`/${page.menuPage.slug}`}
          activeClassName="active-link"
          id={`top-level-item-${index}`}
        >
          {itemName}
        </Link>
      )}
      {page.subPages && shouldExpand && (
        <SubMenu page={page} itemName={itemName} />
      )}
    </li>
  );
};

export default MenuItem;
