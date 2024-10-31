import React from 'react';
import './KeyPointsList.scss';
import Container from '../utils/Container/Container';
import CtaButton from '../CtaButton/CtaButton';

const KeyPointsList = ({
  title,
  ingress,
  button,
  theme,
  keyPoint1,
  keyPoint2,
  keyPoint3,
  keyPoint4,
  keyPoint5,
  keyPoint6,
}) => {
  return (
    <Container theme={theme} size={'extra-large'} background={false}>
      <div className="KeyPointsList_container">
        <div className="KeyPointsList_left">
          {title && <h2 className="">{title}</h2>}
          {ingress && <div dangerouslySetInnerHTML={{ __html: ingress }} />}
          {button && button}
        </div>
        <ul className={`KeyPointsList_right ${theme}`}>
          {keyPoint1 && <li dangerouslySetInnerHTML={{ __html: keyPoint1 }} />}
          {keyPoint2 && <li dangerouslySetInnerHTML={{ __html: keyPoint2 }} />}
          {keyPoint3 && <li dangerouslySetInnerHTML={{ __html: keyPoint3 }} />}
          {keyPoint4 && <li dangerouslySetInnerHTML={{ __html: keyPoint4 }} />}
          {keyPoint5 && <li dangerouslySetInnerHTML={{ __html: keyPoint5 }} />}
          {keyPoint6 && <li dangerouslySetInnerHTML={{ __html: keyPoint6 }} />}
        </ul>
      </div>
    </Container>
  );
};

export default KeyPointsList;
