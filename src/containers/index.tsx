import Card from '@/components/composite/Card';
import BaseLayout from '@/components/layout/BaseLayout';

import styles from './index.module.scss';

const Home = () => {
  const data = [
    {
      name: '독서합시다~!',
      description: '건국대학교 공과대학 독서모임!',
      memberCount: 7,
    },
    {
      name: '독서합시다~!',
      description: '건국대학교 공과대학 독서모임!',
      memberCount: 7,
    },
    {
      name: '독서합시다~!',
      description: '건국대학교 공과대학 독서모임!',
      memberCount: 7,
    },
    {
      name: '독서합시다~!',
      description: '건국대학교 공과대학 독서모임!',
      memberCount: 7,
    },
    {
      name: '독서합시다~!',
      description: '건국대학교 공과대학 독서모임!',
      memberCount: 7,
    },
    {
      name: '독서합시다~!',
      description: '건국대학교 공과대학 독서모임!',
      memberCount: 7,
    },
  ];

  return (
    <BaseLayout>
      <section className={styles.gridContainer}>
        {data.map(({ name, description, memberCount }, index) => {
          return (
            <Card key={`${name}${index}`}>
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
