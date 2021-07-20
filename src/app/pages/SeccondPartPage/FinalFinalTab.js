import React from 'react';
import styled from 'styled-components';
import wieszak from '../../../static/img/wieszak.jpeg';

const FinalFinalTab = () => (
  <TabContainer>
    <img src={wieszak} alt="wieszak" />
  </TabContainer>
);

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default FinalFinalTab;
