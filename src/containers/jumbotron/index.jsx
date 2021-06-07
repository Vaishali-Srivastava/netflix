import React from 'react';
import { Jumbotron } from '../../components/';
import jumboData from '../../fixtures/jumbo.json';
import { StyledCardContainer } from '../../components/jumbotron/styles';

export default function JumbotronContainerWrapper () {
  return (
    <>
      <Jumbotron.Container>
        {jumboData.map((item) => {
          return (
            <Jumbotron id={item.id} direction={item.direction}>
              <StyledCardContainer className='card-container'>
                <div className='info-panel'>
                  <h2 className='card-title'>{item.title}</h2>
                  <h3 className='card-sub-title'>{item.subTitle}</h3>
                </div>
                <div className='image-panel'>
                  <img src={item.image} alt={item.alt} />
                </div>
                {console.log('item', item.image)}
              </StyledCardContainer>
            </Jumbotron>
          );
        })}
      </Jumbotron.Container>
    </>
  );
}
