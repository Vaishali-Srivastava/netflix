import React from 'react';
import { Header } from '../../components/';
import { Logo } from '../../components';
import { TopHeader} from './styles';
import * as ROUTES from '../../constants/routes';


export default function HeaderWrapper({ loginOption }) {
  return (
    <header>
      <TopHeader className='top-header'>
        <Header.Logo alt='Netflix' to={ROUTES.HOME}>
          <Logo />
        </Header.Logo>
        {loginOption ? <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink> : null}
        
      </TopHeader>
    </header>
  );
}
