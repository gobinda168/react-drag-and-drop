/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';

interface IProps {
  id: string;
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
  className: string;
  videoRef: React.MutableRefObject<undefined>;
}
const Corner: React.FC<IProps> = ({
  id,
  children,
  className,
  videoRef,
}: IProps) => {
  const handleDrop = (e: any) => {
    e.preventDefault();
    e.target.classList.add('demo');
    if (e.target.childNodes.length > 0) return;
    e.target.appendChild(videoRef.current);
    e.target.childNodes[0].style.opacity = '1';
    e.target.style.border = 'unset';
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    target.style.border = '2px dashed green';
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    target.style.border = 'unset';
  };

  return (
    <div
      id={id}
      className={className}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {children}
    </div>
  );
};

export default Corner;
