import './AuthFree.scss'
import { Registration } from '../Registration/Registration';
import { useRef, useState } from 'react';

export const AuthFree = () => {
    const [operationType, setOperaionType] = useState('Зареєструватися');
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
    
    const userData = useRef({
        role: 'role',
        email: 'email',
        password: 'password',
    });

    const continueButtonHandler = () => {
        console.log('Continue button');
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
                    <p className='AuthFree__button-patient-text'>Я пацієнт</p>
                </button>

                <button 
                    className='AuthFree__button-doctor'
                    onClick={doctorButtonHandler}
                >
                    <p className='AuthFree__button-doctor-text'>Я лікар</p>
                </button>
            </div>

            <div className='AuthFree__Registration'>
                <Registration
                    operationType={operationType}
                    emailInput={emailInput}
                    setEmailInput={setEmailInput}
                    passwordInput={passwordInput}
                    setPasswordInput={setPasswordInput}
                />
            </div>

            <div>
                <button
                    onClick={continueButtonHandler}
                    className='AuthFree__continue-button'
                >
                    Зареєструватись
                </button>
            </div>
        </div>
    );
};