import React from 'react';
import { Footer } from '../../components/';
import {
  StyledFooterCardWrapper,
  StyledFooterLinks,
  StyledFooterListWrapper,
} from './styles';

export default function FooterWrapper() {
  return (
    <Footer.Container>
      <Footer>
        <StyledFooterCardWrapper className='footer-card-wrapper'>
          <div className='site-footer'>
            <p class='footer-top'>
              Questions? Call{' '}
              <a class='footer-top-a' href='tel:000-800-040-1843'>
                000-800-040-1843
              </a>
            </p>
            <StyledFooterListWrapper>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>FAQ</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Help Centre</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Account</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Media Centre</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Investor Relations</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Jobs</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Ways to Watch</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Terms of Use</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Privacy</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Cookie Preferences</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Corporate Information</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Contact Us</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Speed Test</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Legal Notices</a>
              </StyledFooterLinks>
              <StyledFooterLinks>
                <a href='javascript:void(0)'>Netflix Originals</a>
              </StyledFooterLinks>
            </StyledFooterListWrapper>
          </div>
          <div class='lang-selection-container' id='lang-switcher'>
            <div data-uia='language-picker+container' class='ui-select-wrapper'>
              <label for='undefined-select' class='ui-label no-display'>
                <span class='ui-label-text'></span>
              </label>
              <div class='select-arrow medium prefix globe'>
                <select
                  data-uia='language-picker'
                  class='ui-select medium'
                  id='undefined-select'
                  tabindex='0'
                  placeholder='lang-switcher'
                >
                  <option
                    selected=''
                    value='/in/'
                    data-language='en'
                    data-country='IN'
                  >
                    English
                  </option>
                  <option value='/in-hi/' data-language='hi' data-country='IN'>
                    हिन्दी
                  </option>
                </select>
              </div>
            </div>
          </div>
          <p class="footer-country">Netflix India</p>
        </StyledFooterCardWrapper>
      </Footer>
    </Footer.Container>
  );
}
