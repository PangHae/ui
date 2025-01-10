import { FC } from 'react';

import styles from './profile.module.scss';

interface Props {
  name: string;
}

const Profile: FC<Props> = ({ name }) => {
  return <p className={styles.profile}>{name}</p>;
};

export default Profile;
