'use client';

import OAuthButton from '@/components/base/OAuthButton';

import styles from './header.module.scss';

const Header = () => {
  const handleClickOauth = () => {
    window.open(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_API_LOCAL_URL}/auth/login/callback&scope=profile_nickname, profile_image`,
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
        onClick={handleClickOauth}
      />
    </header>
  );
};

export default Header;
