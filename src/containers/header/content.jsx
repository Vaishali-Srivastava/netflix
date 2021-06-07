import React from 'react';
import { Header } from '../../components';
import { ContextWrapper} from './styles';
import OptFormWrapper from '../opt-form';
import FeatureWrapper from '../feature';

export default function HeaderContentWrapper() {
  return (
      <Header>
        <ContextWrapper className='content-wrapper'>
          <FeatureWrapper />
          <OptFormWrapper />
        </ContextWrapper>
      </Header>
  );
}
