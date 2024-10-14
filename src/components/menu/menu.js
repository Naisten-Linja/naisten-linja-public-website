import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import './menu.scss';

import MenuItem from './menu-item';

import { FaArrowRight } from 'react-icons/fa';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

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
          <a href="/">
            Poistu sivustolta nopeasti <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="service-bar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              {' '}
              <img src="/images/Naisten_Linja.svg" alt="" />
            </Link>
          </div>
          <ul className="services">
            {services &&
              services.map(
                (service) =>
                  service && (
                    <li key={service.id} className="service-link">
                      {service.serviceIcon ? (
                        <img src={service.serviceIcon.file.url} alt="" />
                      ) : (
                        <div />
                      )}
                      {service.linkToCustomUrl ? (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={service.linkToCustomUrl}
                        >
                          {service.serviceName}
                        </a>
                      ) : service.linkToInternalPage ? (
                        <Link to={`/${service.linkToInternalPage?.slug}`}>
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
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </div>
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
    contentfulMainMenu(slug: { eq: "header-menu" }) {
      id
      slug
      mainMenuName
      services {
        id
        serviceIcon {
          file {
            url
          }
        }
        serviceName
        serviceInformation
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
