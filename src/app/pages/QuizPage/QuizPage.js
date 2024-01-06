import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Tabs from '../../components/Tabs/Tabs';
import { TAB_A, TAB_B, TAB_C } from '../../redux/constants';
import TabA from './TabA';
import TabB from './TabB';
import ISBNInput from './ISBNInput';
import TabC from './TabC';

const QuizPage = () => {
  const gameUnlocked = useSelector((state) => state.gameUnlocked);
  const history = useHistory();

  useEffect(() => {
    if (!gameUnlocked) {
      history.push('/');
    }
  }, []);

  const tabs = [
    { label: 'Runda 1', component: TabA, id: TAB_A },
    { label: 'Runda 2', component: TabB, id: TAB_B },
    { label: 'Runda 3', component: TabC, id: TAB_C },
  ];

  return (
    <Layout>
      <Tabs tabs={tabs} />
      <ISBNInput />
    </Layout>
  );
};

export default QuizPage;
