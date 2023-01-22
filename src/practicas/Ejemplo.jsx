import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import UserContext from '../../../../core/context/user.jsx';
import {
  onLoadImageAvatarError,
  onLoadImageAvatarSuccess,
  defaultAvatar,
} from '../../../identity/_utils';
import Image from '../../../global/Image';
import useUserContext from '../../../../core/context/actions';
import UserIconNav from '../../../../icons/UserIconNav.jsx';

const AuthButtons = ({ setShowRightPanel }) => {
  const {
    actions: { setShowLoginModal, setShowRegistrationModal },
  } = useUserContext();

  const {
    initiatedIdentity,
    user: { isLoggedIn, picture, firstName },
  } = useContext(UserContext);

  if (initiatedIdentity) {
    return (
      <div className="login-register-container">
        {isLoggedIn ? (
          <button
            className="account-button account-button--logged-in"
            aria-label="myAccount"
            onClick={setShowRightPanel}
            onKeyDown={setShowRightPanel}
          >
            <i className="account-button-chevron-icon" />
            <span>{firstName}</span>
            <Image
              alt="Avatar"
              src={picture || defaultAvatar}
              containerClasses="account-button__avatar account-button__avatar--logged-in"
              // isAmp={isAmp}
              onError={(event) => {
                onLoadImageAvatarError(event, firstName, 18);
              }}
              onLoad={onLoadImageAvatarSuccess}
            />
          </button>
        ) : (
          <>
            <button
              // className="identity-button"
              className="identity-button d23-primary"
              aria-label="register link"
              onClick={() => setShowRegistrationModal(true)}
            >
              REGISTRARME
            </button>
            <button
              // className="identity-button"
              className="identity-button d23-secondary"
              aria-label="login link"
              onClick={() => setShowLoginModal(true)}
            >
              INICIAR SESIÓN
            </button>

            <button
              className="account-button account-button--mobile"
              aria-label="myAccount"
              onClick={setShowRightPanel}
              onKeyDown={setShowRightPanel}
            >
              {/* <Image
                alt="Avatar"
                src={defaultAvatar}
                containerClasses="account-button__avatar"
                // isAmp={isAmp}
                onError={(event) => {
                  onLoadImageAvatarError(event, firstName, 18);
                }}
                onLoad={onLoadImageAvatarSuccess}
              /> */}
              <UserIconNav />
            </button>
          </>
        )}
      </div>
    );
  }

  return null;
};

AuthButtons.propTypes = {
  setShowRightPanel: PropTypes.func,
};

export default AuthButtons;
