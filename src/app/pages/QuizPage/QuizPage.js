import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Tabs from '../../components/Tabs/Tabs';
import GeneralKnowledgeTab from './GeneralKnowledgeTab';

const QuizPage = () => {
  const quizUnlocked = useSelector((state) => state.quizUnlocked);
  const history = useHistory();

  useEffect(() => {
    if (!quizUnlocked) {
      history.push('/');
    }
  }, []);

  const tabs = [
    { label: 'Wiedza ogólna', component: GeneralKnowledgeTab },
    { label: 'Geografia', component: GeneralKnowledgeTab },
  ];

  return (
    <Layout>
      <Tabs tabs={tabs} />
    </Layout>
  );
};

export default QuizPage;
