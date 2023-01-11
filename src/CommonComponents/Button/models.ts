import React, { ReactElement } from 'react';

export interface IButtonProps {
  title?: string | ReactElement;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  icon?: ReactElement | null;
  className?: string;
  tabIndex?: number;
  autoFocus?: boolean;
}
