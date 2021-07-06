import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs }) => (
  <div>
    <ul>
      {tabs.map((tab) => <li>{tab.label}</li>)}
    </ul>
    {tabs.map((tab) => <tab.component />)}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
