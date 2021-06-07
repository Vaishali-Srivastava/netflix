import React from 'react';
import { Accordion } from '../../components/';
import faqsData from '../../fixtures/faqs.json';
import OptFormWrapper from '../opt-form';


export default function AccordionWrapper() {
  return (
    <Accordion.Container>
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqsData.map((item) => {
            return (
              <Accordion.Item id={item.id}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion.Frame>
        <OptFormWrapper />
      </Accordion>
     
    </Accordion.Container>
  );
}
