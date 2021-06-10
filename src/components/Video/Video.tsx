import React from 'react';
import styles from './styles.module.scss';

interface IProps {
  videoRef: any;
}
const Video: React.FC<IProps> = ({ videoRef }: IProps) => {
  const handleDragStart = (e: any) => {
    e.preventDefault();
    e.dataTransfer.setData('video_id', e.target.id);
    // console.log(e.target.id, 'drag start');
    // setTimeout(() => {
    //   e.target.style.display = 'none';
    // }, 0);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.stopPropagation();
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
      onDragOver={handleDragOver}
    >
      <source
        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default Video;
