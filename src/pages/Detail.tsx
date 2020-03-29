import React from 'react';
import { withRouter } from 'react-router-dom';
import { Heading, List, ListItem, Text } from '@chakra-ui/core';

const Detail = () => {
  return (
    <>
      <Heading as="h1">Detail</Heading>
      <Text>
        This page will be loaded dynamically (NOT IN MENU) and populated with
        selected movie details.
      </Text>
      <List as="ol" styleType="decimal">
        <ListItem>Title</ListItem>
        <ListItem>Description</ListItem>
        <ListItem>Genre</ListItem>
        <ListItem>Poster</ListItem>
        <ListItem>Trailer</ListItem>
      </List>
    </>
  );
};

export default withRouter(Detail);
