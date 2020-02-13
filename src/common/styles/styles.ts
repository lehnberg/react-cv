import styled, { css } from 'styled-components';

export const defaultPage = {
  width: '21cm',
  height: '29.7cm',
  padding: '2cm'
};

export const text = {
  font: 'Karla',
  large: '22pt',
  medium: '16pt',
  small: '11pt',
  xtraSmall: '10pt',
  bold: 800,
  lineHeight: 1.3
};

export const color = {
  default: 'black',
  highlight: 'teal'
};

export const gutter = {
  xtraSmall: '2px',
  small: '4px',
  medium: '8px',
  large: '16px'
};

export const Page = styled.div`
  font-family: ${text.font};
  text-align: center;
  font-kerning: normal;
  letter-spacing: normal;
  margin: auto;
  width: ${defaultPage.width};
  min-height: ${defaultPage.height};
  padding: ${defaultPage.padding};
  padding-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-center;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: space-between;
  ${props =>
    props.primary &&
    css`
      width: 58%;
    `};
  ${props =>
    props.secondary &&
    css`
      width: 40%;
    `};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  ${props =>
    props.row &&
    css`
      flex-direction: row;
      flex-wrap: wrap;
      text-decoration: none;
      color: ${color.default};
      align-items: flex-start;
      margin-top: ${gutter.xtraSmall};
    `};

  ${props =>
    props.bottom &&
    css`
      margin-top: auto;
    `};

  ${props =>
    props.padding &&
    css`
      padding-bottom: ${gutter.small};
    `};
`;

export const Title = styled.div`
  font-size: ${text.xtraSmall};
  font-weight: ${text.bold};

  ${props =>
    props.row &&
    css`
      margin-right: ${gutter.small};
      display: inline;
      float: left;
    `};
`;

export const Bread = styled.div`
  font-size: ${text.xtraSmall};
  font-family: ${text.font};
  text-align: left;
  line-height: ${text.lineHeight};
  color: ${color.default};
  display: inline;
  word-wrap: break-word;

  ${props =>
    props.heading &&
    css`
      padding-right: ${gutter.xtraSmall};
      text-decoration: none;
      font-style: italic;
    `};

  ${props =>
    props.mini &&
    css`
      font-size: ${text.xtraSmall};
      font-style: italic;
      display: inline;
      float: left;
      word-wrap: break-word;
    `};

  ${props =>
    props.header &&
    css`
      padding-right: ${gutter.medium};
      text-decoration: none;
    `};

  ${props =>
    props.date &&
    css`
      color: ${color.highlight};
    `};
`;
