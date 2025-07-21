import React from 'react';
import './NotFound.scss';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <div className="not-found__subtitle">Page Not Found</div>
        <p className="not-found__text">
          Oops! The page you're looking for seems to have vanished into thin air.
        </p>
        <a href="/" className="not-found__button">
          Go Back Home
        </a>
      </div>
      <div className="not-found__animation">
        <div className="not-found__stars"></div>
        <div className="not-found__astronaut">
          <div className="not-found__astronaut-helmet"></div>
          <div className="not-found__astronaut-body"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 