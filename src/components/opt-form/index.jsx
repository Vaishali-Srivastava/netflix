import React from 'react';
import { Container } from '../styles';
import { StyledOptForm, Input, Text, Button } from './styles';

export default function OptForm ({ children, ...restProps }) {
  return <StyledOptForm {...restProps}>{children}</StyledOptForm>;
}

OptForm.Container = function OptFormContainer({ children, ...restProps }) {
  return (
    <OptForm>
      <Container {...restProps}>{children}</Container>
    </OptForm>
  );
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};