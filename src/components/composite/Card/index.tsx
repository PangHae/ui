import { FC, PropsWithChildren } from 'react';

import styles from './card.module.scss';

interface TitleProps {
  name: string;
}

interface DescriptionProps {
  content: string;
}

interface CardFooterProps {
  content: string;
}

const CardMain: FC<PropsWithChildren> = ({ children }) => {
  return <section className={styles.card}>{children}</section>;
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
