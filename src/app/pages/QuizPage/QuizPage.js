import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';
import Tabs from '../../components/Tabs/Tabs';
import GeneralKnowledgeTab from './GeneralKnowledgeTab';
import {
  GENERAL_KNOWLEDGE_TAB, GEOGRAPHIC_TAB, QUIZ_PAGE_TABS, FINAL_ROUND_TAB, HISTORICAL_TAB,
} from '../../redux/constants';
import GeographicsTab from './GeographicsTab';
import FinalRoundTab from './FinalRoundTab';
import HistoricalTab from './HistoricalTab';

const QuizPage = () => {
  const quizUnlocked = useSelector((state) => state.quizUnlocked);
  const history = useHistory();
  const geoQuizStage = useSelector((state) => state.quizStages[GEOGRAPHIC_TAB]);

  useEffect(() => {
    if (!quizUnlocked) {
      history.push('/');
    }
  }, []);

  const tabs = [
    { label: 'Wiedza ogólna', component: GeneralKnowledgeTab, id: GENERAL_KNOWLEDGE_TAB },
    { label: 'Historia', component: HistoricalTab, id: HISTORICAL_TAB },
    { label: 'Geografia', component: GeographicsTab, id: GEOGRAPHIC_TAB },
    { label: 'Runda Finałowa', component: FinalRoundTab, id: FINAL_ROUND_TAB },
  ];

  return (
    <Layout>
      <Tabs page={QUIZ_PAGE_TABS} tabs={tabs} />
      {geoQuizStage === 5 && (
        <HiddenTip>
          Via del Governo Vecchio
        </HiddenTip>
      )}
    </Layout>
  );
};

const HiddenTip = styled.div`
  margin-top: 200px;
  display: block;
  color: green;
`;

export default QuizPage;
