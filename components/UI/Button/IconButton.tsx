import React from 'react';

interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className = '',
  children,
}) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default IconButton;
