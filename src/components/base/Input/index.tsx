'use client';

import { ComponentProps, FC } from 'react';

import cx from 'clsx';

import styles from './input.module.scss';

interface Props extends ComponentProps<'input'> {
  className?: string;
}

const Input: FC<Props> = ({ className, type, ...rest }) => {
  return (
    <input
      className={cx(styles.input, className ? styles[className] : null)}
      type={type || 'text'}
      {...rest}
    />
  );
};

export default Input;
