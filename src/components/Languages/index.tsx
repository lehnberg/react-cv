//src/components/Languages.tsx

import * as React from 'react';
import { Bread, Box, Title } from './../../common/styles/styles';
import Panel from './../../common/components/Panel';

export interface Item {
  language: string;
  proficiency: string;
}

export interface Props {
  title: string;
  content: Item[];
}

const Languages: React.FunctionComponent<Props> = ({ title, content }) => {
  const contentElement = content.map((item, index) => (
    <Box row key={index}>
      <Title row>{item.language}</Title>
      <Bread mini>({item.proficiency})</Bread>
    </Box>
  ));

  return <Panel title={title}>{contentElement}</Panel>;
};

export default Languages;
