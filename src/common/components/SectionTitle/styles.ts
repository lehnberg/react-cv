import styled from 'styled-components';
import { gutter, text, color } from './../../styles/styles';

export const SectionTitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  padding-top: ${gutter.xtraSmall};
  padding-bottom: ${gutter.xtraSmall};
`;

export const SectionHeadline = styled.span`
  font-size: ${text.small};
  font-weight: ${text.bold};
  color: ${color.highlight};
  text-align: left;
  margin-right: ${gutter.medium};
  text-transform: uppercase;
`;

export const TitleBorder = styled.hr`
  display: block;
  border: 0;
  border-top: ${gutter.xtraSmall} solid ${color.highlight};
  width: 100%;
  margin-bottom: 6px;
`;
