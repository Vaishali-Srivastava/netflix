import React from 'react';
import { OptForm } from '../../components/';
import { StyledInputPanel } from './styles';
import FontAwesome from 'react-fontawesome';


export default function OptFormWrapper() {
  return (
    <OptForm.Container>
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <StyledInputPanel className='input-panel'>
          <OptForm.Input placeholder='Email Address' />
          <OptForm.Button>Get Started <FontAwesome className='icons' name='angle-right' size='1x' /></OptForm.Button>
        </StyledInputPanel>
      </OptForm>
    </OptForm.Container>
  );
}
