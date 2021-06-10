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
    target.style.border = 'unset';
  };

  const handleTouchStart = (e: any) => {
    // get initial position
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // pause video while dragging
    videoRef.current.pause();
    const target = e.target as HTMLElement;

    // Prevent scrolling
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };

    const touchLocation = e.targetTouches[0];
    const width = target.offsetWidth;
    const height = target.offsetHeight;

    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.position = 'fixed';
    target.style.left = `${touchLocation.clientX - width / 2}px`;
    target.style.top = `${touchLocation.clientY - height / 2}px`;
  };
  const handleTouchEnd = (e: any) => {
    const videoElement = e.target.getBoundingClientRect();
    const x1 = videoElement.left;
    const y1 = videoElement.top;
    const h1 = e.target.offsetHeight;
    const w1 = e.target.offsetWidth;
    const b1 = y1 + h1;
    const r1 = x1 + w1;

    const targets = document.querySelectorAll('#quarter');
    // eslint-disable-next-line consistent-return
    targets.forEach((target: any) => {
      const divElement = target.getBoundingClientRect();
      const x2 = divElement.left;
      const y2 = divElement.top;
      const h2 = target.offsetHeight;
      const w2 = target.offsetWidth;
      const b2 = y2 + h2;
      const r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        return false;
      }
      target.appendChild(e.target);
      e.target.style.left = `${x2}px`;
      e.target.style.top = `${y2}px`;
    });
  };
  const handleVideoClick = () => {
    const video = videoRef.current;
    return video.paused ? video.play() : video.pause();
  };
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      ref={videoRef}
      id="video_id"
      controls={false}
      loop
      playsInline
      width="200"
      className={styles.video}
      draggable
      onDrag={handleDragStart}
      onDragEnd={handleDragOver}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleVideoClick}
      poster={constants.POSTER}
    >
      <source src={constants.VIDEO_SRC} type="video/mp4" />
    </video>
  );
};

export default Video;
