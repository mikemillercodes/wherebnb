import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import LoginForm from '../LoginFormModal/LoginForm'
import SignupFormPage from '../SignupFormPage';
import { Modal } from '../../context/Modal'
import { useHistory } from 'react-router-dom'
import Logo from '../Navigation/wherebnb2.png'

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

    <div className='navigation-bar'>
      <div className='home-button'>
        <button id='redir-home' onClick={() => redirectHome()}><img className='logo' alt='alt' src={Logo}></img></button>
      </div>
      <div className='right-side'>
        <div className='become-host-button'>
          <button id='redir-create-spot' onClick={() => redirectCreateSpot()}>Ready to Wherebnb it?</button>
        </div>
        <div className='menu-button'>
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
      </div>
    </div>


  );
}

export default Navigation;