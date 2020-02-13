// src/components/Header.tsx

import * as React from 'react';
import { Headline, Subheadline, HeaderRow, HeaderDiv } from './styles';
import { Bread } from './../../common/styles/styles';
import { formatUrl } from './../../common/utils/functions';

export interface HeaderProps {
  name: string;
  description: string;
  email: string;
  phone: string;
  url: string;
  github: string;
  location: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  name,
  description,
  email,
  phone,
  url,
  github,
  location
}) => (
  <HeaderDiv>
    <Headline>{name}</Headline>
    <Subheadline>{description}</Subheadline>
    <HeaderRow>
      <Bread header>{location}</Bread>
      <Bread header>{'\xa0|\xa0'}</Bread>
      <Bread header as="a" href={'mailto:' + email}>
        {email}
      </Bread>
      <Bread header>{'\xa0|\xa0'}</Bread>
      <Bread header as="a" href={'tel:' + phone.replace(/\s/g, '')}>
        {phone}
      </Bread>
      <Bread header>{'\xa0|\xa0'}</Bread>
      <Bread header as="a" href={github}>
        {formatUrl(github)}
      </Bread>
      <Bread header>{'\xa0|\xa0'}</Bread>
      <Bread header as="a" href={url}>
        {formatUrl(url)}
      </Bread>
    </HeaderRow>
  </HeaderDiv>
);

export default Header;
