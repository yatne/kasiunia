import React from 'react';
import PropTypes from 'prop-types';

const Printable = ({ children }) => (<div className="printable">{children}</div>);

Printable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Printable;
