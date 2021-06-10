import clsx from 'clsx';
import React, { useRef } from 'react';
import Video from '../Video/Video';
import styles from './styles.module.scss';
import Corner from '../Corner/Corner';

const Layout: React.FC = () => {
  const videoRef = useRef();

  return (
    <div className={styles.layout}>
      <Corner
        id="quarter1"
        className={clsx(styles.quarter1, styles.quarter)}
        videoRef={videoRef}
      />
      <Corner
        id="quarter2"
        className={clsx(styles.quarter2, styles.quarter)}
        videoRef={videoRef}
      />
      <Corner
        id="quarter3"
        className={clsx(styles.quarter3, styles.quarter)}
        videoRef={videoRef}
      >
        <Video videoRef={videoRef} />
      </Corner>
      <Corner
        id="quarter4"
        className={clsx(styles.quarter4, styles.quarter)}
        videoRef={videoRef}
      />
    </div>
  );
};

export default Layout;
