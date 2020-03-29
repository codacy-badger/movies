import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/core';
import { Link, withRouter } from 'react-router-dom';
import logo from '../img/svg/error/404.svg';

const Error404 = () => {
  return (
    <>
      <Heading as="h1">404</Heading>
      <Text>Page not found</Text>
      <Text>
        <Link to="/">Go back to homepage</Link>
      </Text>
      <Box>
        <Image src={logo} size="128px" alt="404" />
      </Box>
    </>
  );
};

export default withRouter(Error404);
