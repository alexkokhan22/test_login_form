// react
import React, { memo } from 'react';

// utils
import { classes } from '../../Utils/classes';

// models
import { IButtonProps } from './models';

export const Button = memo(function Button(props: IButtonProps) {
  const { title, className, onClick, icon, ...otherProps } = props;

  const clickInterception = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick && onClick(e);
  };

  return (
    <button
      {...otherProps}
      onClick={clickInterception}
      className={classes(className)}
    >
      {title} {icon}
    </button>
  );
});
