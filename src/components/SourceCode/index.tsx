//src/components/Generic.tsx

import * as React from 'react';
import TextPanel from './../../common/components/TextPanel';
import { Bread } from './../../common/styles/styles';
import { formatUrl } from './../../common/utils/functions';

export interface Props {
  title: string;
  description: string;
  url: string;
}

const SourceCode: React.FunctionComponent<Props> = ({
  title,
  description,
  url
}) => {
  return (
    <TextPanel title={title} content={description + '\xa0'}>
      <Bread as="a" href={url}>
        {formatUrl(url)}
      </Bread>
    </TextPanel>
  );
};

export default SourceCode;
