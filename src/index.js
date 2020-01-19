import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

class Slid extends React.Component {
  componentDidMount() {
    if (window !== undefined) {
      const slidContainerElem = document.getElementById('slid-container');
      const leftArrowElem = document.querySelector('#left-arrow');
      const rightArrowElem = document.querySelector('#right-arrow');
      const widthThereshold = document.querySelectorAll('#slid-container > *')[2].offsetWidth / 2 + 4;
      slidContainerElem.addEventListener('scroll', () => {
        console.log('scrollLeft:', slidContainerElem.scrollLeft);
        console.log('scrollWidth:', slidContainerElem.scrollWidth);

        if (slidContainerElem.scrollLeft > widthThereshold) {
          leftArrowElem.style.opacity = 1;
          leftArrowElem.style.visibility = 'visible';
        } else if (slidContainerElem.scrollLeft < widthThereshold) {
          leftArrowElem.style.opacity = 0;
          leftArrowElem.style.visibility = 'hidden';
        }

        if (slidContainerElem.scrollWidth - slidContainerElem.scrollLeft < 500) {
          rightArrowElem.style.opacity = 0;
          rightArrowElem.style.visibility = 'hidden';
        } else if (slidContainerElem.scrollWidth - slidContainerElem.scrollLeft > 500) {
          rightArrowElem.style.opacity = 1;
          rightArrowElem.style.visibility = 'visible';
        }
      });
    }
  }

  swipeRight = () => {
    const widthThereshold = [...document.querySelectorAll('#slid-container > *')][2].offsetWidth / 2 + 4;
    console.log('widthThereshold:', widthThereshold);
    document.querySelector('.style_slidContainer__1laRs').scrollLeft += widthThereshold;
  }

  swipeLeft = () => {
    const widthThereshold = [...document.querySelectorAll('#slid-container > *')][2].offsetWidth / 2 + 4;
    document.querySelector('.style_slidContainer__1laRs').scrollLeft -= widthThereshold;
  }

  render() {
    const { children, showArrows, ...rest } = this.props;
    return (
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {showArrows && (
          <div id="left-arrow" className={styles.arrows}>
            <button onClick={() => this.swipeLeft()}>
              <svg viewBox="0 0 18 18" role="img" aria-label="Geri" focusable="false" fill="currentcolor" style={{ height: 10, width: 10 }}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg>
            </button>
          </div>
        )}
        <div id="slid-container" className={styles.slidContainer} {...rest}>
          {[...children].map((child, index) => (
            <div key={index}>
              {child}
            </div>
          ))}
        </div>
        {showArrows && (
          <div id="right-arrow" className={styles.arrows}>
            <button onClick={() => this.swipeRight()}>
              <svg viewBox="0 0 18 18" role="img" aria-label="İleri" focusable="false" fill="currentcolor" style={{ height: 10, width: 10 }}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>
            </button>
          </div>
        )}
      </div>
    )
  }
}

Slid.propTypes = {
  children: PropTypes.any,
};

export default Slid;
