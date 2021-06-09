import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={clsx(styles.quarter1, styles.quarter)}>1</div>
      <div className={clsx(styles.quarter2, styles.quarter)}>2</div>
      <div className={clsx(styles.quarter3, styles.quarter)}>3</div>
      <div className={clsx(styles.quarter4, styles.quarter)}>4</div>
    </div>
  );
};

export default Layout;
