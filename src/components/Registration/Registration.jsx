import './Registration.scss';

export const Registration = (props) => {
    const { 
        operationType,
        emailInput,
        setEmailInput,
        passwordInput,
        setPasswordInput,
    } = props;

    const emailInputHandler = () => {

    };

    const passwordInputHandler = () => {

    };

    const handleGoogleButton = () => {
        console.log('Google button')
    };

    const handleFacebookButton = () => {
        console.log('Facebook button');
    };

    return (
        <div className='Registration'>
            <div>
                <div>
                    <p className='Registration__form-name'>Email</p>
                    
                    <form
                        onSubmit={emailInputHandler}
                    >
                        <input
                            placeholder="you@company.com"
                            className='Registration__input Registration__input-email'
                            value={emailInput}
                            onChange={e => setEmailInput(e.target.value)}
                        />
                    </form>
                </div>

                <div>
                <p className='Registration__form-name'>Пароль</p>
                <form
                    onSubmit={passwordInputHandler}
                >
                    <input
                        className='Registration__input Registration__input-password'
                        placeholder="************"
                        value={passwordInput}
                        onChange={e => setPasswordInput(e.target.value)}
                    />
                </form>
                </div>
            </div>


            <div className='Registration__separator'> 
                <div className='Registration__line'></div>
                <p className='Registration__or-text'>Або</p>   
                <div className='Registration__line'></div>
            </div>

            <div className='Registration__auth-buttons'>
                <p className='Registration__auth-text'> {`${operationType}  за допомогою`}</p>
                
                    <button
                        className='Registration__button Registration__button-google'
                        onClick={handleGoogleButton}
                    >
                        {Image}
                        Google
                    </button>



                    <button
                        className='Registration__button Registration__button-facebook' 
                        onClick={handleFacebookButton}
                    >
                        Facebook
                    </button>

            </div>
        </div>
    );
};