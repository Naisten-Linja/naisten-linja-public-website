import React from 'react';
import './PersonIntroduction.scss';

const PersonIntroductionCard = ({
  personName,
  personPicture,
  personIntroduction,
  phone,
  email,
  title,
}) => {
  return (
    <div className="person-introduction-card">
      <div className="person-introduction-card-image">
        <img
          src={
            personPicture?.file?.url + '?fm=webp&q=95&h=500' ??
            '/images/placeholder.png'
          }
          alt={personName}
        />
      </div>
      <div>
        <div className="person-introduction-card-content-container">
          <h3>{personName}</h3>
          <p>{title}</p>
        </div>
        <div className="person-introduction-card-content">
          {(phone || email) && (
            <div style={{ marginBottom: '1rem' }}>
              <p>{phone}</p>
              <p>{email}</p>
            </div>
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: personIntroduction?.childMarkdownRemark?.html,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonIntroductionCard;
