// react
import React, { useState } from 'react';

// utils
import { classes } from '../../Utils/classes';

// styles
import styles from './styles/index.module.scss';

// models
import { IInputProps } from './models';

export const Input = (props: IInputProps) => {
  const [errorContent, setErrorContent] = useState<string | null>('');

  const {
    label,
    validate,
    isRequired,
    className,
    classNameInput,
    autofocus,
    ...otherProps
  } = props;

  const resetErrorContent = () => setErrorContent('');

  const validateInput = () => validate && setErrorContent(validate());

  return (
    <div className={classes(styles.inputContainer, className)}>
      {label && (
        <div
          className={`${styles.inputLabel} ${
            isRequired && styles.requiredField
          }`}
        >
          {label}
        </div>
      )}
      <input
        {...otherProps}
        className={classes(
          styles.input,
          errorContent && styles.error,
          classNameInput
        )}
        onBlur={validateInput}
        onFocus={resetErrorContent}
        autoFocus={autofocus}
      />
      {errorContent && (
        <div className={classes(styles.errorContent)}>
          {errorContent}
          <div className={styles.aaa}></div>
        </div>
      )}
    </div>
  );
};
