import React from 'react';
import { Alert, AlertIcon } from '@chakra-ui/react';

interface Props {
  status: string;
  description: string;
}

const AlertDisplay: React.FC<Props> = ({ status, description }) => {
  return (
    <>
      <Alert status="error">
        <AlertIcon />
       {description}
      </Alert>
    </>
  );
};

export default AlertDisplay;
