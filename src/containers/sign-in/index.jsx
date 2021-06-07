import React, { useState } from 'react';
import { Header } from '../../components';
import { Form } from '../../components'
import { StyledSignIn } from './styles';

export default function SignInWrapper() {

  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  return (
    <StyledSignIn>
      <Header>
        <Form >

        </Form>
      </Header>
    </StyledSignIn>
  );
}
