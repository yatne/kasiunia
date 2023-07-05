import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Tabs from '../../components/Tabs/Tabs';
import { TAB_A, TAB_B } from '../../redux/constants';
import TabA from './TabA';
import TabB from './TabB';
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
    { label: 'Specjalista It', component: TabA, id: TAB_A },
    { label: 'Pytania i skojarzenia', component: TabB, id: TAB_B },
  ];

  return (
    <Layout>
      <Tabs tabs={tabs} />
      <ISBNInput />
    </Layout>
  );
};

export default QuizPage;
