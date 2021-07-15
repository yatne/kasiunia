import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import Tabs from '../../components/Tabs/Tabs';
import MathTab from './MathTab';
import {
  MATH_TAB,
  MUSIC_TAB,
  FINAL_FINAL_TAB,
  SECOND_PART_PAGE_TABS,
} from '../../redux/constants';
import { unlockSecondPart } from '../../redux/actions';
import MusicTab from './MusicTab';
import FinalFinalTab from './FinalFinalTab';

const SecondPartPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(unlockSecondPart());
  }, []);

  const tabs = [
    { label: 'Matematyka', component: MathTab, id: MATH_TAB },
    { label: 'Muzyka', component: MusicTab, id: MUSIC_TAB },
    { label: 'Runda naprawdę Finałowa', component: FinalFinalTab, id: FINAL_FINAL_TAB },
  ];

  return (
    <Layout>
      <Tabs page={SECOND_PART_PAGE_TABS} tabs={tabs} />
    </Layout>
  );
};

export default SecondPartPage;
