import './Auth.scss'
import { Registration } from '../Registration/Registration';
import { useRef, useState } from 'react';

export const Auth = () => {
    const [operationType, setOperaionType] = useState('Авторизуйтесь');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    
    const userData = useRef({
        role: 'role',
        email: 'eamil',
        password: 'password',
    });

    const continueButtonHandler = (event) => {
        event.preventDefault();
        console.log({
            role: 'role',
            email: 'eamil',
            password: 'password',
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