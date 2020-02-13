import styled from 'styled-components';
import { gutter, text, color } from './../../common/styles/styles';

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4cm;
  padding-bottom: ${gutter.large};
`;

export const Headline = styled.div`
  font-size: ${text.large};
  font-weight: ${text.bold};
  color: ${color.highlight};
  padding-bottom: ${gutter.xtraSmall};
`;

export const Subheadline = styled.div`
  font-size: ${text.medium};
  font-style: italic;
  color: ${color.highlight};
  padding-bottom: ${gutter.large};
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
