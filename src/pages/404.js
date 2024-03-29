import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout lang="fi">
    <Seo title="Sivua ei löytynyt" />
    <section className="full-width-section">
      <div className="layout-container">
        <h1>Sivua ei löytynyt</h1>
        <div>
          <p>
            Sen nimi on ehkä kirjoitettu väärin, tai on tapahtunut virhe.{' '}
            <a href="https://link.webropolsurveys.com/Participation/Public/abb56125-ea90-42bb-a623-3fdef155bbcc?displayId=Fin2184615">
              Voit jättää meille palautteen.
            </a>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
