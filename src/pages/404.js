import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '../components/ui/utils/Container/Container';

const NotFoundPage = () => (
  <Layout
    lang="fi"
    hero={{
      heroTitle: 'Sivua ei löytynyt',
      backLink: { slug: '', pageName: 'Etusivu' },
    }}
  >
    <Seo title="Sivua ei löytynyt" />
    <Container>
      <section className="full-width-section">
        <div className="layout-container">
          <h1>Sivua ei löytynyt</h1>
          <div>
            <p>
              <br />
              Sen nimi on ehkä kirjoitettu väärin, tai on tapahtunut virhe.{' '}
              <br />
              <br />
              <a href="https://link.webropolsurveys.com/Participation/Public/abb56125-ea90-42bb-a623-3fdef155bbcc?displayId=Fin2184615">
                Voit jättää meille palautteen painamalla tästä.
              </a>
            </p>
          </div>
        </div>
      </section>
    </Container>
  </Layout>
);

export default NotFoundPage;
