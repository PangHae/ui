import React, { ComponentProps, CSSProperties, FC, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './button.module.scss';

interface Props extends ComponentProps<'button'> {
  className: 'primary' | 'secondary' | 'green' | 'black';
  isRound?: boolean;
  icon?: ReactNode;
  size?: 'big' | 'medium' | 'small';
  width?: string;
  height?: string;
}

const Button: FC<Props> = ({
  className = 'primary',
  isRound = false,
  icon,
  size,
  width,
  height,
  children,
  ...props
}) => {
  const style = {
    '--width': width && width,
    '--height': height && height,
  } as CSSProperties;

  return (
    <button
      className={clsx(styles.buttonJSX, styles[className], {
        [styles[size!]]: Boolean(size),
        [styles.round]: isRound,
      })}
      style={style}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
