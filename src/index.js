import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

class Slid extends React.Component {
  slidContainerRef = React.createRef();
  prevRef = React.createRef();
  nextRef = React.createRef();

  state = {
    slideThereshold: null
  }

  componentDidMount() {
    if (window !== undefined) {
      this.setState({ slideThereshold: this.slidContainerRef.current.scrollWidth / this.slidContainerRef.current.childElementCount / 2 + 3 })
      const widthThereshold = this.slidContainerRef.current.children[2].offsetWidth / 2 + 4;
      console.log('widthThereshold:', widthThereshold);
      this.slidContainerRef.current.addEventListener('scroll', () => {
        console.log('scrollLeft:', this.slidContainerRef.current.scrollLeft);
        console.log('scrollWidth:', this.slidContainerRef.current.scrollWidth);

        if (this.slidContainerRef.current.scrollLeft > widthThereshold) {
          this.prevRef.current.style.opacity = 1;
          this.prevRef.current.style.visibility = 'visible';
        } else if (this.slidContainerRef.current.scrollLeft < widthThereshold) {
          this.prevRef.current.style.opacity = 0;
          this.prevRef.current.style.visibility = 'hidden';
        }

        if (this.slidContainerRef.current.scrollWidth - this.slidContainerRef.current.scrollLeft < 500) {
          this.nextRef.current.style.opacity = 0;
          this.nextRef.current.style.visibility = 'hidden';
        } else if (this.slidContainerRef.current.scrollWidth - this.slidContainerRef.current.scrollLeft > 500) {
          this.nextRef.current.style.opacity = 1;
          this.nextRef.current.style.visibility = 'visible';
        }
      });
    }
  }

  swipeRight = () => {
    const widthThereshold = this.slidContainerRef.current.children[2].offsetWidth / 2 + 4;
    this.slidContainerRef.current.scrollLeft += widthThereshold;
  }

  swipeLeft = () => {
    const widthThereshold = this.slidContainerRef.current.children[2].offsetWidth / 2 + 4;
    this.slidContainerRef.current.scrollLeft -= widthThereshold;
  }

  render() {
    const { children, showArrows, ...rest } = this.props;
    return (
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {showArrows && (
          <React.Fragment>
            <div ref={this.prevRef} id="left-arrow" className={styles.arrows + ' ' + styles.left}>
              <button onClick={() => this.swipeLeft()}>
                <svg viewBox="0 0 18 18" role="img" aria-label="Geri" focusable="false" fill="currentcolor" style={{ height: 10, width: 10 }}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg>
              </button>
            </div>
            <div ref={this.nextRef} id="right-arrow" className={styles.arrows + ' ' + styles.right}>
              <button onClick={() => this.swipeRight()}>
                <svg viewBox="0 0 18 18" role="img" aria-label="İleri" focusable="false" fill="currentcolor" style={{ height: 10, width: 10 }}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>
              </button>
            </div>
          </React.Fragment>
        )}
        <div ref={this.slidContainerRef} id="slid-container" className={styles.slidContainer} {...rest}>
          {[...children].map((child, index) => (
            <div key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Slid.propTypes = {
  children: PropTypes.node,
};

export default Slid;
