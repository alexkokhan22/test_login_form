//react
import React from 'react';

//components
import { LoginForm } from '../../Components/LoginForm';

//styles
import styles from './styles/index.module.scss';

export const App = () => {
  return (
    <div className={styles.appPageContainer}>
      <LoginForm />
    </div>
  );
};
