import React, { ComponentProps, CSSProperties, FC } from 'react';

import cx from 'clsx';

import GoogleLogo from '@p/assets/google-logo.svg';
import KakaoLogo from '@p/assets/kakao-logo.svg';
import NaverLogo from '@p/assets/naver-logo.svg';

import { SocialType } from '@/types/socialType';

import styles from './oauthButton.module.scss';

interface Props extends ComponentProps<'button'> {
  companyName: SocialType;
  className?: string;
  width?: string;
  height?: string;
}

const OAuthLogoMap = {
  kakao: <KakaoLogo className={styles.icon} />,
  naver: <NaverLogo className={styles.icon} />,
  google: <GoogleLogo className={styles.icon} />,
};

const OAuthButton: FC<Props> = ({
  className,
  companyName,
  width,
  height,
  ...rest
}) => {
  const style = {
    '--width': width && width,
    '--height': height && height,
  } as CSSProperties;

  return (
    <button
      className={cx(
        styles.oauthButton,
        styles[companyName],
        className && styles[className],
      )}
      style={style}
      {...rest}
    >
      {OAuthLogoMap[companyName]}
      {`${companyName[0].toUpperCase() + companyName.slice(1)} 로그인`}
    </button>
  );
};

export default OAuthButton;
