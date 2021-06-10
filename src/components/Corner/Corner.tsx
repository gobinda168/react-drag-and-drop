import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  customClass: string;
}
const Corner: React.FC<IProps> = ({ children, customClass }: IProps) => {
  const handleDrop = (e: any) => {
    e.preventDefault();
    console.log(e, 'drop');
    const data = e.dataTransfer.getData('video_id');
    // e.target.appendChild(document.getElementById(data));
    const video = document.getElementById(data);
    // video.style.display = 'block';
    console.log(video, data, 'video');
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log('over');
  };
  return (
    <div
      className={customClass}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {children}
    </div>
  );
};

export default Corner;
