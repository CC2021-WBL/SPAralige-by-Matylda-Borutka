import { Button } from '@mui/material';
import { ReactNode } from 'react';

const LanguageButton = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick: () => void;
  className?: any;
}) => {
  return (
    <Button className={className} variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};
export default LanguageButton;
