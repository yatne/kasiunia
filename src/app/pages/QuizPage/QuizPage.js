import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Tabs from '../../components/Tabs/Tabs';
import {
  TAB_A, TAB_B, TAB_C, TAB_D,
} from '../../redux/constants';
import TabA from './TabA';
import TabB from './TabB';
import TabC from './TabC';
import TabD from './TabD';
import ISBNInput from './ISBNInput';

const QuizPage = () => {
  const gameUnlocked = useSelector((state) => state.gameUnlocked);
  const history = useHistory();

  useEffect(() => {
    if (!gameUnlocked) {
      history.push('/');
    }
  }, []);

  const tabs = [
    { label: 'A', component: TabA, id: TAB_A },
    { label: 'B', component: TabB, id: TAB_B },
    { label: 'C', component: TabC, id: TAB_C },
    { label: 'D', component: TabD, id: TAB_D },
  ];

  return (
    <Layout>
      <Tabs tabs={tabs} />
      <ISBNInput />
    </Layout>
  );
};

export default QuizPage;
