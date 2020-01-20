import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

const Karussel = props => {
  const { children, ...rest } = props;
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <div className={styles.karusselContainer} {...rest}>
        {[...children].map((child, index) => (
          <div key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

Karussel.propTypes = {
  children: PropTypes.node,
};

export default Karussel;
