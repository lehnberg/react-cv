//src/components/SmallPanel.tsx : A section of items without dates

import * as React from 'react';
import Panel from './../Panel';
import { Bread, Box, Title } from './../../styles/styles';

export interface Item {
  name: string;
  keywords: string[];
}

export interface Props {
  title: string;
  content: Item[];
}

const SmallPanel: React.FunctionComponent<Props> = ({ title, content }) => {
  const contentElement = content.map((item, index) => (
    <Box row key={index}>
      <Title row>{item.name}</Title>
      <Bread mini>({item.keywords.join(', ')})</Bread>
    </Box>
  ));

  return <Panel title={title}>{contentElement}</Panel>;
};

export default SmallPanel;
