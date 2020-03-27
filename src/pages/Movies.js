import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  Alert,
  AlertIcon,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/core";

const Movies = () => {
  return (
    <>
      <Heading as="h1" css={headingCss}>Movies</Heading>
      <Text mb={8}>movies</Text>
      <Stack spacing={2}>
        <Alert status="success">
          <AlertIcon />
          Chakra-ui + emotion installed.
        </Alert>
      </Stack>
    </>
  );
}

const headingCss = {
  color: '#0f0',
};

export default withRouter(Movies);
