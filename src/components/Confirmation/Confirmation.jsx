import './Confirmation.scss';
import { useState } from 'react';

export const Confirmation = () => {
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [calendarEvent, setCalendarEvent] = useState('');

  const emailInputHandler = () => {
    console.log(emailInput);
  };

  const phoneInputHandler = () => {
    console.log(phoneInput);
  }

  const passwordInputHandler = () => {
    console.log(passwordInput);
  };

  const handleCalendarEvent = () => {
    setCalendarEvent(!calendarEvent);
  };

  const handleAppointmentButton = () => {
    console.log('The appointment with the doctor has been created!');
  };

    return (
        <div className='Confirmation'>
          <p
            className='Confirmation__title'
          >Для підтвердження запису до лікаря треба ввести ці данні</p>

          <div>
            <p className='Confirmation__text'>Email</p>
            <form
              onSubmit={emailInputHandler}
            >
              <input
                  placeholder="you@company.com"
                  className='Confirmation__input'
                  value={emailInput}
                  onChange={e => setEmailInput(e.target.value)}
              />
            </form>
          </div>

          <div>
            <p className='Confirmation__text'>Номер телефону</p>
            <form
              onSubmit={phoneInputHandler}
            >
              <input
                  placeholder="+380 (063) 548 99 19"
                  className='Confirmation__input'
                  value={emailInput}
                  onChange={e => setPhoneInput(e.target.value)}
              />
            </form>
          </div>

          <div>
            <p className='Confirmation__text'>Пароль</p>
            <form
              onSubmit={passwordInputHandler}
            >
              <input
                  placeholder="**********"
                  className='Confirmation__input'
                  value={emailInput}
                  onChange={e => setPasswordInput(e.target.value)}
              />
            </form>
          </div>

          <div className="Confirmation__checkbox">
            <input
              type="checkbox"
              checked={calendarEvent}
              onChange={handleCalendarEvent}
            />
              <p className="Confirmation__calendar-text">Позначити івент в Google Calendar</p>
          </div>

          <button
            className="Confirmation__appointment"
            onClick={handleAppointmentButton}
          >
            Записатись
          </button>
        </div>
    );
};