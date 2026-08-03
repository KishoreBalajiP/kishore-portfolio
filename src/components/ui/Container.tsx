import type { ElementType, ReactNode } from 'react';

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export default function Container({
  as: Tag = 'div',
  className = '',
  children,
}: ContainerProps) {
  return (
    <Tag className={`container-wide ${className}`}>
      {children}
    </Tag>
  );
}