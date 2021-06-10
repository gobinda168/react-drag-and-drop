import clsx from 'clsx';
import React, { useRef } from 'react';
import Video from '../Video/Video';
import styles from './styles.module.scss';
import Corner from '../Corner/Corner';

const Layout: React.FC = () => {
  const handleDrop = (e: any) => {
    e.preventDefault();
    e.target.style.opacity = '1';
    // e.target.appendChild(document.getElementById(data));
  };
  const handleDragOver = (e: any) => {
    e.preventDefault();
    console.log(videoRef, 'over');
    e.target.classList.add('transition');
    e.target.appendChild(videoRef.current);
    // videoRef.current.style.display = 'block';
  };

  const videoRef = useRef();
  const containerRef = useRef();
  return (
    <div className={styles.layout}>
      <Corner customClass={clsx(styles.quarter1, styles.quarter)}>1</Corner>
      <div
        className={clsx(styles.quarter2, styles.quarter)}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      />
      <div
        className={clsx(styles.quarter3, styles.quarter)}
        onDrop={handleDrop}
      >
        <Video videoRef={videoRef} />
      </div>
      <div
        className={clsx(styles.quarter4, styles.quarter)}
        onDrop={handleDrop}
      >
        4
      </div>
    </div>
  );
};

export default Layout;
