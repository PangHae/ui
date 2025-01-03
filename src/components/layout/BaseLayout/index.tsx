import { FC, PropsWithChildren } from 'react';

import Header from '../Header';
import styles from './baseLayout.module.scss';

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
