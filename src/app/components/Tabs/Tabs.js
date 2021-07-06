import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenedTab } from '../../redux/actions';

const Tabs = ({ page, tabs }) => {
  const selectedTabId = useSelector((state) => state.selectedTabs[page]);
  const TabComponent = tabs.find((tab) => tab.id === selectedTabId).component;

  const dispatch = useDispatch();

  return (
    <TabsContainer>
      <TabsNavigation>
        {tabs.map((tab) => (
          <TabsNavItem
            className="disabled"
            key={tab.id}
            onClick={() => dispatch(setOpenedTab(page, tab.id))}
          >
            {tab.label}
          </TabsNavItem>
        ))}
      </TabsNavigation>
      <TabComponent />
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 60px;
  width: 900px;
  background-color: #fdfdfd;
  box-shadow: 1px 2px #dddddd;
`;

const TabsNavigation = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;

const TabsNavItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  align-items: center;
  height: 32px;
  
  &:last-child {
    border-right: none;
  }
  
  &.disabled {
    background-color: #eeeeee;
  }
  
  &.selected {
    border-bottom: none;
  }
`;

Tabs.propTypes = {
  page: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
