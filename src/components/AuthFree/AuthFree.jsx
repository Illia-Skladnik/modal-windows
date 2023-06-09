import './AuthFree.scss'
import { Registration } from '../Registration/Registration';
import { useState } from 'react';

export const AuthFree = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [role, setRole] = useState('patient');

  const patientButtonHandler = () => {
    setRole('patient');
    console.log('current role is ', role);
  };

  const doctorButtonHandler = () => {
    setRole('doctor');
    console.log('current role is ', role);
  };

  const continueButtonHandler = () => {
    console.log({
      role,
      email: emailInput,
      password: passwordInput,
    });
  };

  return (
    <div className='AuthFree'>
      <p className='AuthFree__title'>Зареєструватися безкоштовно</p>
      <p className='AuthFree__text'>
        Після реєстрації на нашому сайті вам буде відкритий доступ в особистий кабінет, і ви зможете користуватися усіма перевагам сервісу
      </p>

      <div className='AuthFree__button-role'>
        <button
          onClick={patientButtonHandler}
          className='AuthFree__button-patient'
        >
          Я пацієнт
        </button>

        <button
          className='AuthFree__button-doctor'
          onClick={doctorButtonHandler}
        >
          Я лікар
        </button>
      </div>

      <div className='AuthFree__Registration'>
        <Registration
          role={role}
          operationType={'Зареєструватися'}
          emailInput={emailInput}
          setEmailInput={setEmailInput}
          passwordInput={passwordInput}
          setPasswordInput={setPasswordInput}
        />
      </div>

      <button
        onClick={continueButtonHandler}
        className='AuthFree__continue-button'
      >
        Зареєструватись
      </button>
    </div>
  );
};