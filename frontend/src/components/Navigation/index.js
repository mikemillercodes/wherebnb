import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import LoginForm from '../LoginFormModal/LoginForm'
import SignupFormPage from '../SignupFormPage';
import { Modal } from '../../context/Modal'
import { useHistory } from 'react-router-dom'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false)
  const [login, setLogin] = useState(true)
  const history = useHistory()

  const redirectCreateSpot = () => {
    history.push('/createnewspot')
  }

  const redirectHome = () => {
    history.push('/')
  }
  //   let sessionLinks;
  //   if (sessionUser) {
  //     sessionLinks = (
  //       <ProfileButton user={sessionUser} />
  //     );
  //   } else {
  //     sessionLinks = (
  //       <>
  //         <LoginFormModal />
  //         <NavLink to="/signup">Sign Up</NavLink>
  //       </>
  //     );
  //   }

  return (
    <ul>
      <div className='navigation-bar-left'>
        <div className='Home'>
          <div className='home-button'>
            <button id='redir-home' onClick={() => redirectHome()}><img className='logo' alt='alt' src='https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png'></img></button>
          </div>
        </div>
        <div className='become-host-button'>
          <button id='redir-create-spot' onClick={() => redirectCreateSpot()}>Airbnb your home</button>
        </div>
        <div className='globe'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'flex', height: '22px', width: '22px', fill: 'currentcolor' }}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" /></svg>
        </div>
        {isLoaded && (<ProfileButton
          user={sessionUser}
          setLogin={setLogin}
          setShowModal={setShowModal}
        />
        )}
        {showModal && <Modal onClose={() => setShowModal(false)}>
          {login ? <LoginForm setShowModal={setShowModal} /> : <SignupFormPage setShowModal={setShowModal} />}
        </Modal>}
      </div>
    </ul>
  );
}

export default Navigation;