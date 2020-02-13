//src/common/components/Panel.tsx : Title of a section

import * as React from 'react';
import { SectionTitleBox, SectionHeadline, TitleBorder } from './styles';

export interface Props {
  text: string;
}

const SectionTitle: React.FunctionComponent<Props> = ({ text }) => {
  return (
    <SectionTitleBox>
      <SectionHeadline>{text}</SectionHeadline>
      <TitleBorder />
    </SectionTitleBox>
  );
};

export default SectionTitle;
