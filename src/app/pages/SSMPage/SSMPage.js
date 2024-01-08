import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { SuperSlideMe } from 'react-super-slide-me';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { unlockGame } from '../../redux/actions';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  margin: 30px;
  border-radius: 2px;
`;

const SSMPage = () => {
  const dispatch = useDispatch();
  const ssmUnlocked = useSelector((state) => state.ssmUnlocked);
  const history = useHistory();

  useEffect(() => {
    if (!ssmUnlocked) {
      history.push('/');
    }
  }, []);
  const handleFinish = useCallback(() => {
    dispatch(unlockGame());
    alert('quiz odblokowany');
  }, []);

  return (
    <Layout>
      <Container>
        <SuperSlideMe levelConfig={{ levelFilter: 'demo' }} onLastLevelReached={handleFinish} />
      </Container>
    </Layout>
  );
};

export default SSMPage;
