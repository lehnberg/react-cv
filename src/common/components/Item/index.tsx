//src/common/components/Item.tsx : Display of item that's categorized by a date

import * as React from 'react';
import { Bread, Box, Title } from './../../styles/styles';
import { dateDisplay } from './../../utils/functions';
import Icon from './../Icon';

export interface Props {
  title: string;
  subtitle: string;
  startDate: string;
  endDate?: string;
  location?: string;
  highlights?: string[];
  url?: string;
}

const Item: React.FunctionComponent<Props> = ({
  title,
  subtitle,
  startDate,
  endDate,
  location,
  highlights,
  url
}) => (
  <Box padding>
    {url ? (
      <Box row as="a" href={url}>
        <Title row>{title},</Title>
        <Bread heading>{subtitle + '\xa0'}</Bread>
        <Icon />
      </Box>
    ) : (
      <Box row>
        <Title row>{title},</Title>
        <Bread heading>{subtitle}</Bread>
      </Box>
    )}
    <Box row>
      <Bread date>{dateDisplay(startDate, endDate)}</Bread>
      {location ? <Bread>{'\xa0|\xa0' + location}</Bread> : ''}
    </Box>
    {highlights ? <Bread>{highlights}</Bread> : ''}
  </Box>
);

export const ItemsMap = (
  items: any[],
  options: { titleProp: string; subtitleProp: string }
) => {
  return items.map((item, index) => {
    const {
      [options.titleProp]: title,
      [options.subtitleProp]: subtitle,
      ...rest
    } = item;
    return <Item key={index} title={title} subtitle={subtitle} {...rest} />;
  });
};
export default Item;
