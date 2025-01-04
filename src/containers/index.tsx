'use client';

import Card from '@/components/composite/Card';
import BaseLayout from '@/components/layout/BaseLayout';

import styles from './index.module.scss';

const Home = () => {
  const data = [
    {
      id: 1,
      name: '독서합시다~!',
      description: '건국대학교 공과대학 독서모임!',
      memberCount: 7,
    },
    {
      id: 2,
      name: '독서합시다~!',
      description: '건국대학교 공과대학 독서모임!',
      memberCount: 7,
    },
    {
      id: 3,
      name: '독서합시다~!',
      description: '건국대학교 공과대학 독서모임!',
      memberCount: 7,
    },
    {
      id: 4,
      name: '독서합시다~!',
      description: '건국대학교 공과대학 독서모임!',
      memberCount: 7,
    },
    {
      id: 5,
      name: '독서합시다~!',
      description: '건국대학교 공과대학 독서모임!',
      memberCount: 7,
    },
    {
      id: 6,
      name: '독서합시다~!',
      description: '건국대학교 공과대학 독서모임!',
      memberCount: 7,
    },
  ];

  return (
    <BaseLayout>
      <section className={styles.gridContainer}>
        {data.map(({ id, name, description, memberCount }) => {
          return (
            <Card key={`${id}`} teamId={id.toString()}>
              <Card.Title name={name} />
              <Card.Description content={description} />
              <Card.MemberCounter content={`${memberCount}명`} />
            </Card>
          );
        })}
      </section>
    </BaseLayout>
  );
};

export default Home;
