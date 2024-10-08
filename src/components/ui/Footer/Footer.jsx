import React from 'react';
import './Footer.scss';

const Footer = ({ title }) => {
  return (
    <footer className="Footer_container">
      <div className="Footer_layout">
        <div className="Footer_logos">
          <div>Logo</div>
          <div>Nuoli</div>
        </div>
        <div className="Footer_main_content">
          <div className="Footer_contacts">
            <div className="Footer_contact_box">
              <div>Osoite</div>
              <div>sposti</div>
              <div>puhelin</div>
            </div>
            <div className="Footer_socials">
              <div className="Footer_socials">FB</div>
              <div className="Footer_socials">Insta</div>
              <div className="Footer_socials">X</div>
              <div className="Footer_socials">in</div>
              <div className="Footer_socials">YT</div>
              <div className="Footer_socials">TikTok</div>
            </div>
          </div>
          <div className="Footer_links">
            <div className="Footer_links_col">
              <a href="">Naisten Linja Suomessa ry</a>
              <a href="">Medialle</a>
              <a href="">Työpaikat</a>
            </div>
            <div className="Footer_links_col">
              <a href="">Liity jäseneksi</a>
              <a href="">Tilaa ystäväkirja</a>
              <a href="">Anna palautetta</a>
            </div>
            <div className="Footer_links_col">
              <a href="">Vapaaehtoiset</a>
              <a href="">Vapaaehtoisten netti</a>
            </div>
          </div>
        </div>
        <div className="Footer_language_links">FI | EN</div>
        <hr className="Footer_breakline" />
        <div className="Footer_bottom_section">
          <div>© {new Date().getFullYear()} Naisten Linja Suomessa ry</div>
          <div className="Footer_bottom_links">
            <a href="">Rekisteriseloste</a>
            <a href="">Tietosuojaseloste</a>
            <a href="">Saavutettavuusseloste</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
