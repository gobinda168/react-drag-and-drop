import clsx from 'clsx';
import React, { useRef } from 'react';
import Video from '../Video/Video';
import styles from './styles.module.scss';
import Corner from '../Corner/Corner';

const Layout: React.FC = () => {
  const handleDrop = (e: any) => {
    e.preventDefault();
    e.target.appendChild(videoRef.current);
    // e.target.appendChild(document.getElementById(data));
    e.target.style.border = '1px solid red';
  };
  const handleDragOver = (e: any) => {
    e.preventDefault();
    console.log(videoRef, 'over');
    // videoRef.current.style.display = 'block';
    e.target.style.border = '1px dashed black';
  };

  const videoRef = useRef();
  const containerRef = useRef();
  return (
    <div className={styles.layout}>
      <div
        className={clsx(styles.quarter1, styles.quarter)}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        // onDragStart={handleDragStart}
      />
      <div
        className={clsx(styles.quarter2, styles.quarter)}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        // onDragStart={handleDragStart}
      />
      <div
        className={clsx(styles.quarter3, styles.quarter)}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        // onDragStart={handleDragStart}
      >
        <Video videoRef={videoRef} />
      </div>
      <div
        className={clsx(styles.quarter4, styles.quarter)}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        // onDragStart={handleDragStart}
      />
    </div>
  );
};

export default Layout;
