import { useState } from 'react';
import Button from './Button';
import FormInput from './FormInput';
import styled from 'styled-components';


const Form = styled.form`
    border: 1px solid #ccc;
    background: white;
    padding: 30px 40px;
    width: 400px;
    font-size: 16px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);

    & h2{
        margin-bottom: 30px;
        color: rgb(68, 68, 68);
    }

`

const FormValidation = function (props) {
    const [usernameInput, setUsernameInput] = useState('');
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('')
    const [usernameIsValid, setUsernameIsValid] = useState(true);

    const [passwordInput, setPasswordInput] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('')
    const [isPasswordValid, setPasswordValid] = useState(true);

    const [passwordCheck, setPasswordCheck] = useState('');
    const [checkPasswordMessage, setCheckPasswordMessage] = useState('');
    const [isPasswordCheckValid, setIsPasswordCheckValid] = useState(true);

    const [emailCheck, setEmailCheck] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    //usernameCheck
    function onUsername(e) {
        e.preventDefault();
        setUsernameInput(e.target.value.trim());

        if (usernameInput.trim().length === 0) {
            setUsernameIsValid(false);
            setUsernameErrorMessage('Username cannot be blank');
        }else if (usernameInput.trim().length < 5) {
            setUsernameIsValid(false);
            setUsernameErrorMessage('Short username');
        } else if (usernameInput.trim().length >= 5) {
            setUsernameIsValid(true);
        }
        
        setUsernameInput(e.target.value);
        
    }

    //Is email
    function isEmailTrue(email){
        return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
   }

    //emailCheck
    function emailValidation(e) {
        e.preventDefault();
        setEmailCheck(e.target.value.trim());

        if (!isEmailTrue(emailCheck.trim())) {
            setIsEmailValid(false)
            setEmailErrorMessage('Invalid E-mail')
        } else {
            setIsEmailValid(true)
        }
        setEmailCheck(e.target.value.trim());
    }



    //password
    function onPassword(e) {
        setPasswordInput(e.target.value.trim());

        if (passwordInput.trim().length === 0) {
            setPasswordValid(false)
            setPasswordMessage('Password cannot be blank')
        } else if(passwordInput.trim().length < 5){
            setPasswordValid(false);
            setPasswordMessage('Weak password')
        } else if (passwordInput.trim().length >= 5) {
            setPasswordValid(true)
        }

        setPasswordInput(e.target.value);
    }

    //Check password
    function checkPassword(e) {
        setPasswordCheck(e.target.value.trim())

        if (passwordCheck.trim().length < 5) {
            setIsPasswordCheckValid(false)
            setCheckPasswordMessage('Weak password')
        } else {
            setIsPasswordCheckValid(true)
        }
        setPasswordCheck(e.target.value);
    }

    //onSubmitFunction
    function onSubmitHandler(e) {
        e.preventDefault();
        //username
        if (usernameInput.trim().length === 0) {
            setUsernameIsValid(false);
            setUsernameErrorMessage('Username cannot be blank');
        }else if (usernameInput.trim().length < 5) {
            setUsernameIsValid(false);
            setUsernameErrorMessage('Short username');
        }
        //password
        if (passwordInput.trim().length === 0) {
            setPasswordValid(false)
            setPasswordMessage('Password cannot be blank')
        } else if(passwordInput.trim().length < 5){
            setPasswordValid(false);
            setPasswordMessage('Weak password')
        }

        //passwordCheck
        if (passwordCheck !== passwordInput || passwordCheck.trim().length === 0) {
            setIsPasswordCheckValid(false)
            setCheckPasswordMessage("The password doesn't match")
        }

        //email
        if (emailCheck.trim().length < 5) {
            setIsEmailValid(false)
            setEmailErrorMessage('invalid E-mail address')
        }

    }

    

    return (
        <Form onSubmit={onSubmitHandler}>
            <h2>Create account</h2>
            <FormInput
                key='username'
                className={`formControl`}
                booleano={!usernameIsValid}
                type="text"
                onChangeHandler={onUsername}
                placeholder='username'
                errorMessage={`${usernameErrorMessage}`}
                id="username" >
                Username
            
            </FormInput>

            <FormInput
                key='lat'
                className={`formControl`}
                booleano={!isEmailValid}
                type="email"
                onChangeHandler={emailValidation}
                placeholder='example@gmail.com'
                errorMessage={emailErrorMessage}
                id="email" >
                E-mail
            </FormInput>

            <FormInput
                key="ok"
                className={`formControl`}
                booleano={!isPasswordValid}
                type="password"
                onChangeHandler={onPassword}
                placeholder='password'
                errorMessage={`${passwordMessage}`}
                id="password" >
                Password
            </FormInput>
            
            <FormInput
                className={`formControl`}
                booleano={!isPasswordCheckValid}
                type="password"
                onChangeHandler={checkPassword}
                errorMessage={checkPasswordMessage}
                placeholder='password check'
                id="passwordCheck" >
                Password Check
            </FormInput>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default FormValidation;