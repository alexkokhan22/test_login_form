//react
import React, { useState } from 'react';

//components
import { Input } from '../../CommonComponents/Input';
import { Button } from '../../CommonComponents/Button';

//api
import { loginUserService } from '../../Api';

//styles
import styles from './styles/index.module.scss';

//helpers
import {
  emailValidation,
  passwordValidation,
} from '../../Utils/validateHelpers';

export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitForm = () => loginUserService(email, password);

  return (
    <div className={styles.formContainer}>
      <h1>Вход</h1>
      <h4>Для существующих участников</h4>
      <div className={styles.loginForm}>
        <Input
          isRequired
          label={'E-Mail: '}
          type={'email'}
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
          validate={() => emailValidation(email)}
        />
        <Input
          isRequired
          label={'Пароль: '}
          type={'password'}
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
          validate={() => passwordValidation(password)}
        />
        <Button
          title={'Войти в систему'}
          onClick={submitForm}
          disabled={!!passwordValidation(password) || !!emailValidation(email)}
        />
      </div>
    </div>
  );
};
