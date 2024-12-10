import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import './menu.scss';

import MenuItem from './menu-item';

import { IoArrowForwardSharp } from 'react-icons/io5';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { findIcon } from '../ui/utils/utils';

// const languages = [
//   {
//     abv: 'FI',
//     label: 'Suomeksi (FI)',
//     value: 'fi',
//     link: '/etusivu',
//   },
//   {
//     abv: 'SV',
//     label: 'På svenska (SV)',
//     value: 'sv',
//     link: '/pa-svenska',
//   },
//   {
//     abv: 'EN',
//     label: 'In English (EN)',
//     value: 'en',
//     link: '/in-english',
//   },
// ];

const Menu = ({ lang }) => {
  const headerMenuData = useStaticQuery(query);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const topLevelPages = headerMenuData.contentfulMainMenu.topLevelPages;
  const services = headerMenuData.contentfulMainMenu.services;
  const cta = headerMenuData.contentfulMainMenu.cta;
  //console.log(services);
  return (
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

    <nav className={`MainMenu`} aria-label="Naisten Linja Menu">
      <div className="escape">
        <div className="container">
          <a href="https://www.google.com/">
            Poistu sivustolta nopeasti <IoArrowForwardSharp />
          </a>
        </div>
      </div>
      <div className="service-bar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              {' '}
              <img src="/images/Naisten_Linja.svg" alt="Siirry etusivulle" />
            </Link>
          </div>
          <ul className="services">
            {services &&
              services.map(
                (service) =>
                  service && (
                    <li key={service.id} className="service-link">
                      {service.linkToCustomUrl ? (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={service.linkToCustomUrl}
                        >
                          {service.iconKey ? (
                            findIcon(service.iconKey)
                          ) : (
                            <div />
                          )}

                          {service.serviceName}
                        </a>
                      ) : service.linkToInternalPage ? (
                        <Link to={`/${service.linkToInternalPage?.slug}`}>
                          {service.iconKey ? (
                            findIcon(service.iconKey)
                          ) : (
                            <div />
                          )}
                          {service.serviceName}
                        </Link>
                      ) : null}
                    </li>
                  ),
              )}
          </ul>
          <div className="menu-cta">
            {' '}
            {/* TODO: Tähän CTA nappi sit kun valmistuu */}
            <Link to={`/${cta.slug}`}>{cta.pageName}</Link>
          </div>
          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="menu-icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      <div
        className={`menu-background ${isOpen ? 'menu-open' : 'menu-closed'}`}
      >
        <div className="menubar-container">
          <ul id="menubar" aria-label="Naisten Linja Menu" className={`menu`}>
            {topLevelPages.map((topLevelPage, i) => (
              <MenuItem
                key={topLevelPage.id}
                page={topLevelPage}
                index={i}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

const query = graphql`
  query MenuQuery {
    contentfulMainMenu(slug: { eq: "header-menu-2024" }) {
      id
      slug
      mainMenuName
      services {
        id
        iconKey
        serviceName
        # serviceInformation
        textColor
        backgroundColor
        linkToInternalPage {
          slug
        }
        linkToCustomUrl
      }
      cta {
        pageName
        slug
      }
      topLevelPages {
        id
        linkToExternalUrl
        menuPage {
          pageName
          slug
        }
        pageContainerName
        menuPageSubpages {
          id
          linkToExternalUrl
          menuPage {
            pageName
            slug
            id
          }
          pageContainerName
          menuPageSubpages {
            linkToExternalUrl
            menuPageSubpages {
              linkToExternalUrl
              menuPage {
                pageName
                slug
              }
              id
            }
            id
            menuPage {
              pageName
              slug
              id
            }
          }
        }
      }
    }
  }
`;
