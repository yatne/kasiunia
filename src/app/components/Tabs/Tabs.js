import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenedTab } from '../../redux/actions';

const Tabs = ({ tabs }) => {
  const selectedTabId = useSelector((state) => state.selectedTab);
  const TabComponent = tabs.find((tab) => tab.id === selectedTabId).component;

  const dispatch = useDispatch();

  return (
    <TabsContainer>
      <TabsNavigation>
        {tabs.map((tab, index) => (
          <TabsNavItem
            className={`${selectedTabId === tab.id ? 'selected' : ''} tab-${index}`}
            key={tab.id}
            onClick={() => dispatch(setOpenedTab(tab.id))}
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
  align-items: center;
  height: 32px;
  cursor: pointer;
  
  &:last-child {
    border-right: none;
  }
  
  &.disabled {
    background-color: #eeeeee;
    cursor: auto;
    color: grey;
  }
  &.tab-0 {
    background: #D7E114;
  }
  &.tab-1 {
    background: #18B715;
  }
  &.tab-2 {
    background: #3D19DC;
  }
  &.tab-3 {
    background: #DB1AD2;
  }
  &.selected {
    height: 40px;
  }
`;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
