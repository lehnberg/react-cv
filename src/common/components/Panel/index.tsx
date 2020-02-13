//src/common/components/Panel.tsx : A section

import * as React from 'react';
import SectionTitle from './../SectionTitle';
import { Box } from './../../styles/styles';

export interface Props {
  title: string;
  children: React.ReactNode;
}

const Panel: React.FunctionComponent<Props> = ({ title, children }) => (
  <Box padding>
    <SectionTitle text={title} />
    {children}
  </Box>
);

export default Panel;
