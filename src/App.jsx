import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState('email не может быть пустым')
  const [disabled, setDisabled] = useState(true)
  const [send, setSend] = useState('')

  const handleClick = (e) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('')
      setSend('Email отправлен')
    } else {
      setEmailError('')
    }
    console.log(value);
  }

  const handleChange = (e) => {
    const reSecond = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!e.target.value) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
    setValue(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase()) && e.target.value) {
      setEmailError('Не корректный email')
      setSend('')
    } else {
      setEmailError('')
    }
  }
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
    }
  }
  return (
    <div className='form'>
      <div className='contant'>
        <h1>Авторизация</h1>
        <div className='inputBlock'>
          {(emailDirty && emailError) && <div id='errorText' className={'errorBlockRed'}>{emailError}</div>}
          {send && <div style={{ color: 'green' }}>{send}</div>}
          <input
            name='email'
            onBlur={e => blurHandler(e)}
            value={value}
            onChange={(e) => handleChange(e)}
            type="email"
            placeholder='Введите email'
          />
          <button
            style={{ backgroundColor: disabled ? "gray" : "red", color: "#fff" }}
            disabled={disabled}
            type='submit'
            onClick={handleClick}>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default App;