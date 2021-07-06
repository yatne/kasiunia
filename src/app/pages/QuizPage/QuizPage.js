import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Tabs from '../../components/Tabs/Tabs';
import GeneralKnowledgeTab from './GeneralKnowledgeTab';
import { GENERAL_KNOWLEDGE_TAB, GEOGRAPHIC_TAB, QUIZ_PAGE_TABS } from '../../redux/constants';
import GeographicsTab from './GeographicsTab';

const QuizPage = () => {
  const quizUnlocked = useSelector((state) => state.quizUnlocked);
  const history = useHistory();

  useEffect(() => {
    if (!quizUnlocked) {
      history.push('/');
    }
  }, []);

  const tabs = [
    { label: 'Wiedza ogólna', component: GeneralKnowledgeTab, id: GENERAL_KNOWLEDGE_TAB },
    { label: 'Geografia', component: GeographicsTab, id: GEOGRAPHIC_TAB },
  ];

  return (
    <Layout>
      <Tabs page={QUIZ_PAGE_TABS} tabs={tabs} />
    </Layout>
  );
};

export default QuizPage;
