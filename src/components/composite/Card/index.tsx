'use client';

import { FC, PropsWithChildren } from 'react';

import { useRouter } from 'next/navigation';

import styles from './card.module.scss';

interface Props {
  teamId: string;
}

interface TitleProps {
  name: string;
}

interface DescriptionProps {
  content: string;
}

interface CardFooterProps {
  content: string;
}

const CardMain: FC<PropsWithChildren<Props>> = ({ teamId, children }) => {
  const router = useRouter();

  return (
    <section
      className={styles.card}
      onClick={() => router.push(`/team?teamId=${teamId}`)}
    >
      {children}
    </section>
  );
};

const Title: FC<TitleProps> = ({ name }) => {
  return <h1 className={styles.title}>{name}</h1>;
};

const Description: FC<DescriptionProps> = ({ content }) => {
  return <div className={styles.description}>{content}</div>;
};

const Owner: FC<CardFooterProps> = ({ content }) => {
  return <p className={styles.cardFooter}>{content}</p>;
};

const MemberCounter: FC<CardFooterProps> = ({ content }) => {
  return <p className={styles.cardFooter}>{content}</p>;
};

const Card = Object.assign(CardMain, {
  Title,
  Description,
  Owner,
  MemberCounter,
});

export default Card;
