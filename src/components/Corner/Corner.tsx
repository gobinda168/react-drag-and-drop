import React, { ReactNode } from 'react';

interface IProps {
  id: string;
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
  className: string;
  videoRef: any;
}
const Corner: React.FC<IProps> = ({
  id,
  children,
  className,
  videoRef,
}: IProps) => {
  const handleDrop = (e: any) => {
    e.preventDefault();
    if (e.target.childNodes.length > 0) return;
    e.target.appendChild(videoRef.current);
    e.target.childNodes[0].style.opacity = '1';
    e.target.style.border = '1px solid red';
  };
  const handleDragOver = (e: React.DragEvent) => {
    const target = e.target as HTMLElement;
    e.preventDefault();
    target.style.border = '1px dashed black';
  };
  return (
    <div
      id={id}
      className={className}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {children}
    </div>
  );
};

export default Corner;
