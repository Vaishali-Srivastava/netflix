import React, { createContext, useState, useContext } from 'react';
import FontAwesome from 'react-fontawesome';

import { Container } from '../styles';
import { StyledAccordion, Title, Item, Header, Body, Frame } from './styles';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return <StyledAccordion {...restProps}>{children}</StyledAccordion>;
}

Accordion.Container = function AccordionContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionTitle({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  console.log('toggleShow', toggleShow);

  return (
    <>
      <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
        <span className='title'>{children}</span>
        {toggleShow ? (
          <FontAwesome className='icons' name='times' size='1x' />
        ) : (
          <FontAwesome className='icons' name='plus' size='1x' />
        )}
      </Header>
    </>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
