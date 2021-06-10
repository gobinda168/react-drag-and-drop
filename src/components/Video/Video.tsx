/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './styles.module.scss';
import constants from '../../constants';

interface IProps {
  videoRef: any;
}
const Video: React.FC<IProps> = ({ videoRef }: IProps) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    target.style.opacity = '0';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    target.style.opacity = '1';
    target.style.border = 'unset';
  };

  return (
    <video
      ref={videoRef}
      id="video_id"
      muted
      controls={false}
      autoPlay
      playsInline
      width="200"
      className={styles.video}
      draggable
      onDrag={handleDragStart}
      onDragEnd={handleDragOver}
    >
      <source src={constants.VIDEO_SRC} type="video/mp4" />
    </video>
  );
};

export default Video;
