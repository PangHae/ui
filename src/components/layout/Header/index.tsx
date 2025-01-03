'use client';

import OAuthButton from '@/components/base/OAuthButton';

import styles from './header.module.scss';

const Header = () => {
  const handleClickOauth = async (type: 'kakao' | 'google' | 'naver') => {
    window.open(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/dok/api/${type}/login`,
      '_self',
    );
  };

  return (
    <header className={styles.header}>
      <section className={styles.logoMenu}>
        DOKMO
        <menu className={styles.menu}>
          <li>모임 스페이스</li>
        </menu>
      </section>
      <OAuthButton
        companyName="kakao"
        width="140px"
        height="36px"
        onClick={() => handleClickOauth('kakao')}
      />
    </header>
  );
};

export default Header;
