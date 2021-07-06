import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenedTab } from '../../redux/actions';

const Tabs = ({ page, tabs }) => {
  const selectedTabId = useSelector((state) => state.selectedTabs[page]);
  const TabComponent = tabs.find((tab) => tab.id === selectedTabId).component;

  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,max-len */}
        {tabs.map((tab) => <li onClick={() => dispatch(setOpenedTab(page, tab.id))}>{tab.label}</li>)}
      </ul>
      <TabComponent />
    </div>
  );
};

Tabs.propTypes = {
  page: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
