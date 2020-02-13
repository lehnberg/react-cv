//src/components/TextPanel.tsx : A section with only a paragraph of text.

import * as React from 'react';
import Panel from './../Panel';
import { Bread } from './../../styles/styles';

export interface Props {
  title: string;
  content: string;
}

const TextPanel: React.FunctionComponent<Props> = ({
  content,
  title,
  children
}) => {
  return (
    <Panel title={title}>
      <Bread>
        {content}
        {children}
      </Bread>
    </Panel>
  );
};

export default TextPanel;
