/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './styles.module.scss';
import constants from '../../constants';

interface IProps {
  videoRef: any;
}
const Video: React.FC<IProps> = ({ videoRef }: IProps) => {
  const handleDragStart = (e: any) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    target.style.opacity = '0';
    videoRef.current.pause();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    target.style.opacity = '1';
    videoRef.current.play();
    target.style.border = 'unset';
  };

  const handleTouchStart = (e: any) => {
    // console.log(e);
  };
  const handleTouchMove = (e: any) => {
    // pause video
    videoRef.current.pause();

    // Prevent scrolling
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };

    const touchLocation = e.targetTouches[0];
    const width = e.target.offsetWidth;
    const height = e.target.offsetHeight;

    e.target.style.width = `${width}px`;
    e.target.style.height = `${height}px`;
    e.target.style.position = 'fixed';
    e.target.style.left = `${touchLocation.clientX - width / 2}px`;
    e.target.style.top = `${touchLocation.clientY - height / 2}px`;
  };
  const handleTouchEnd = (e: any) => {
    const box1 = e.target.getBoundingClientRect();
    const x1 = box1.left;
    const y1 = box1.top;
    const h1 = e.target.offsetHeight;
    const w1 = e.target.offsetWidth;
    const b1 = y1 + h1;
    const r1 = x1 + w1;

    const targets = document.querySelectorAll('#quarter');
    // eslint-disable-next-line consistent-return
    targets.forEach((target: any) => {
      const box2 = target.getBoundingClientRect();
      const x2 = box2.left;
      const y2 = box2.top;
      const h2 = target.offsetHeight;
      const w2 = target.offsetWidth;
      const b2 = y2 + h2;
      const r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        return false;
      }
      target.appendChild(e.target);
      // console.log(target);
    });
  };
  return (
    <video
      ref={videoRef}
      id="video_id"
      muted
      controls={false}
      loop
      // autoPlay={false}
      playsInline
      width="200"
      className={styles.video}
      draggable
      onDrag={handleDragStart}
      onDragEnd={handleDragOver}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={() =>
        videoRef.current.paused
          ? videoRef.current.play()
          : videoRef.current.pause()
      }
      poster={constants.POSTER}
    >
      <source src={constants.VIDEO_SRC} type="video/mp4" />
    </video>
  );
};

export default Video;
