import './Confirmation.scss';
import { useState } from 'react';

export const Confirmation = () => {
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [calendarEvent, setCalendarEvent] = useState(false);

  const formHandler = (event) => {
    event.preventDefault();
    console.log('form Handler');
  };

  const handleCalendarEvent = () => {
    setCalendarEvent(!calendarEvent);
    console.log(calendarEvent);
  };

    return (
        <div className='Confirmation'>
          <p
            className='Confirmation__title'
          >Для підтвердження запису до лікаря треба ввести ці данні</p>

          <div>
            
            <form
              onSubmit={formHandler}
            >
              <p className='Confirmation__text'>Email</p>
              <input
                  placeholder="you@company.com"
                  className='Confirmation__input'
                  value={emailInput}
                  onChange={e => setEmailInput(e.target.value)}
              />

              <p className='Confirmation__text'>Номер телефону</p>
              <input
                  placeholder="+380 (063) 548 99 19"
                  className='Confirmation__input'
                  value={phoneInput}
                  onChange={e => setPhoneInput(e.target.value)}
              />

              <p className='Confirmation__text'>Пароль</p>
              <input
                  placeholder="**********"
                  className='Confirmation__input'
                  value={passwordInput}
                  onChange={e => setPasswordInput(e.target.value)}
              />

              <div >
                <label className="Confirmation__checkbox">
                  <input
                    type="checkbox"
                    checked={calendarEvent}
                    onChange={handleCalendarEvent}
                  />
                  <p className="Confirmation__calendar-text">Позначити івент в Google Calendar</p>
                </label>
              </div>

              <button
                type='submit'
                className="Confirmation__appointment"
              >
                Записатись
              </button>
            </form>
          </div>
        </div>
    );
};