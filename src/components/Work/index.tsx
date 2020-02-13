//src/components/Work.tsx

import * as React from 'react';
import { ItemsMap } from './../../common/components/Item';
import Panel from './../../common/components/Panel';

export interface Item {
  company: string;
  position: string;
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

const Work: React.FunctionComponent<Props> = ({ title, content }) => (
  <Panel title={title}>
    {ItemsMap(content, { titleProp: 'company', subtitleProp: 'position' })}
  </Panel>
);

export default Work;
