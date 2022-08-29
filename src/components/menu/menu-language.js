import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useIsMobile } from '../../hooks/useIsMobile';
import ArrowIcon from './icons/arrow';

const MenuLanguage = ({
  language,
  languages,
  index,
  activeItem,
  setActiveItem,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();

  const handleExpanded = async () => {
    const changedValue = !isExpanded;
    await setIsExpanded(changedValue);

    if (changedValue) {
      setActiveItem(index);
    }
  };

  const handleMouseEnter = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setActiveItem(index);
    }
  };

  const handleMouseExit = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  };

  const handleEsc = (event) => {
    if (event.key === 'Escape') {
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
      aria-label=""
    >
      <button
        aria-expanded={isExpanded}
        onClick={handleExpanded}
        className="top-level-button"
      >
        {languages.find((l) => l.value === language)['abv']}
        {isMobile && <ArrowIcon ariaLabel="Avaa valikko" rotate={isExpanded} />}
      </button>
      {shouldExpand && (
        <div className="MainMenu__submenu-container">
          <ul aria-label="supported languages" className="submenu">
            <li>
              <ul>
                {languages.map((lang) => (
                  <li key={`lang-${lang.value}`}>
                    <Link to={lang.link}>{lang.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default MenuLanguage;
