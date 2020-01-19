import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

const Slid = props => {
  const { children, ...rest } = props;
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <div className={styles.slidContainer} {...rest}>
        {[...children].map((child, index) => (
          <div key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

Slid.propTypes = {
  children: PropTypes.node,
};

export default Slid;
