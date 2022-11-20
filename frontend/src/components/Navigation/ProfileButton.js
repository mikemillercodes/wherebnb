import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css'

function ProfileButton({ user, setLogin, setShowModal }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button id='menu-button' onClick={openMenu}>
        <div className="menu-items">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '50px', width: '30px', stroke: 'currentcolor', strokeWidth: '3', overflow: 'visible' }}><g fill="none" fillRule="nonzero"><path d="m2 16h28" /><path d="m2 24h28" /><path d="m2 8h28" /></g></svg>
        </div>
        <div className="profile-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentcolor' }}><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" /></svg>
        </div>
      </button>
      <div className="profile-dropdown2">
        {showMenu && (user ?
          (<ul className="profile-dropdown">
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <button id='logout' onClick={logout}>Log Out</button>
            </li>
          </ul>) :
          (<ul className="profile-dropdown">
            <li>
              <button id='login-button' onClick={() => {
                setLogin(true)
                setShowModal(true)
              }}>Log In</button>
            </li>
            <li>
              <button id='signup-button' onClick={() => {
                setLogin(false)
                setShowModal(true)
              }}>
                Sign Up
              </button>
            </li>
          </ul>)
        )}
      </div>
    </>
  );
}

export default ProfileButton;