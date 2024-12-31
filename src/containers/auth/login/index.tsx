'use client';

import OAuthButton from '@/components/base/OAuthButton';

import styles from './login.module.scss';

const Login = () => {
  const handleClickOauth = async (type: 'kakao' | 'google' | 'naver') => {
    window.open(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/social/${type}`,
      '_self',
    );
  };

  return (
    <menu className={styles.socialLogin}>
      <li>
        <OAuthButton
          companyName="kakao"
          onClick={() => handleClickOauth('kakao')}
        />
      </li>
      <li>
        <OAuthButton
          companyName="naver"
          onClick={() => handleClickOauth('naver')}
        />
      </li>
      <li>
        <OAuthButton
          companyName="google"
          onClick={() => handleClickOauth('google')}
        />
      </li>
    </menu>
  );
};

export default Login;
