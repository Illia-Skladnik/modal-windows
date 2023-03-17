import './Auth.scss'
import { Registration } from '../Registration/Registration';
import { useState } from 'react';

export const Auth = () => {
  const [operationType, setOperaionType] = useState('Авторизуйтесь');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const continueButtonHandler = (event) => {
    event.preventDefault();
    console.log({
      email: emailInput,
      password: passwordInput,
    })
  };

  return (
    <div className='Auth'>
      <p className='Auth__title'>Авторизуйтесь</p>
      <div className='Auth__Registration'>
        <Registration
          operationType={operationType}
          emailInput={emailInput}
          setEmailInput={setEmailInput}
          passwordInput={passwordInput}
          setPasswordInput={setPasswordInput}
        />
      </div>

      <button
        onClick={continueButtonHandler}
        className='Auth__continue-button'
      >
        Продовжити
      </button>

    </div>
    );
};