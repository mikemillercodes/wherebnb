import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import LoginForm from '../LoginFormModal/LoginForm'
import SignupFormPage from '../SignupFormPage';
import { Modal } from '../../context/Modal'
import { useHistory } from 'react-router-dom'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false)
  const [login, setLogin] = useState(true)
  const history = useHistory()
  
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
      <li>
        <div className='Home'>
        <button id='redir-home' onClick={() => redirectHome()}>Home</button>
        {/* </button>exact to="/">Home</NavLink> */}
        </div>
        {isLoaded && ( <ProfileButton 
        user={sessionUser} 
        setLogin={setLogin} 
        setShowModal={setShowModal}
        />
        )}
      </li>
    {showModal && <Modal onClose={() => setShowModal(false)}>
        {login ? <LoginForm setShowModal={setShowModal}/> : <SignupFormPage setShowModal={setShowModal}/> }
    </Modal>}
    </ul>
  );
}

export default Navigation;