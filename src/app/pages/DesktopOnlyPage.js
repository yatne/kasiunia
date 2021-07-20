import React from 'react';
import styled from 'styled-components';
import Layaout from '../components/Layout/Layout';
import bukiet from '../../static/img/bukiet.png';

const DesktopOnlyPage = () => (
  <Layaout>
    <Info>
      <Header>
        WSZYSTKIEGO NAJLEPSZEGO KASIA!!
      </Header>
      <Image src={bukiet} alt="bukiet" />
      <Text>Niestety do zabawy musisz użyć kompa.</Text>
    </Info>
  </Layaout>
);

const Image = styled.img`
  width: 100%;
`;

const Header = styled.h2`
  font-family: "Lato", sans-serif;
  text-align: center;
  font-size: 20px;
`;

const Text = styled.p`
  font-family: "Lato", sans-serif;
  text-align: center;
  font-size: 15px;
`;

const Info = styled.div`
  background: white;
  width: 80%;
`;

export default DesktopOnlyPage;
