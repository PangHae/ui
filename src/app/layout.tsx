import localFont from 'next/font/local';

import cx from 'clsx';
import { Metadata } from 'next';

import '@/styles/globals.scss';
import '@/styles/reset.scss';
import styles from './layout.module.scss';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'dokmo',
  description: '독서합시다~!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(styles.body, `${pretendard.className}`)}>
        {children}
      </body>
    </html>
  );
}
