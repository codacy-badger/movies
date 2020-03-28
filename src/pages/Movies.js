import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Heading,
  Text
} from "@chakra-ui/core";

const Movies = () => {
  return (
    <>
      <Heading as="h1">Movies</Heading>
      <Text>movies</Text>
    </>
  );
}

export default withRouter(Movies);
