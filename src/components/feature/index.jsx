import React from 'react';

import { StyledFeature, Title, SubTitle } from './styles';

export default function Feature ({ children, ...restProps }) {
  return <StyledFeature {...restProps}>{children}</StyledFeature>;
}

Feature.Title = function FeatureText({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureText({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
