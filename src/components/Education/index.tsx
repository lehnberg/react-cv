//src/components/Education.tsx

import * as React from 'react';
import { ItemsMap } from './../../common/components/Item';
import Panel from './../../common/components/Panel';

export interface Item {
  institution: string;
  area: string;
  startDate: string;
  endDate?: string;
  location?: string;
  highlights?: string[];
  url?: string;
}

export interface Props {
  title: string;
  content: Item[];
}

const Education: React.FunctionComponent<Props> = ({ content, title }) => (
  <Panel title={title}>
    {ItemsMap(content, { titleProp: 'institution', subtitleProp: 'area' })}
  </Panel>
);

export default Education;
