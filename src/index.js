import React from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

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
      this.setState({ slideThereshold: this.slidContainerRef.current.scrollWidth / this.slidContainerRef.current.childElementCount });

      this.slidContainerRef.current.addEventListener('scroll', () => {
        if (this.slidContainerRef.current.scrollLeft > this.state.slideThereshold) {
          this.prevRef.current.style.opacity = 1;
          this.prevRef.current.style.visibility = 'visible';
        } else if (this.slidContainerRef.current.scrollLeft < this.state.slideThereshold) {
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

      this.slidContainerRef.current.addEventListener('click', event => {
        console.log('document.body.getBoundingClientRect().width', document.body.getBoundingClientRect().width);
        console.log('event.target.getBoundingClientRect():', event.target.getBoundingClientRect());

        if ((event.target.getBoundingClientRect().left + event.target.getBoundingClientRect().right) / 2 < document.body.getBoundingClientRect().width / 2) {
          console.log('Swipe left');
          if (event.target.getBoundingClientRect().left > 0) {
            this.slidContainerRef.current.scrollLeft -= event.target.getBoundingClientRect().left;
          } else {
            this.slidContainerRef.current.scrollLeft -= document.body.getBoundingClientRect().width / 2;
          }
        } else {
          console.log('Swipe right');
          this.slidContainerRef.current.scrollLeft += (event.target.getBoundingClientRect().left) / 2;
        }
        // event.target.scrollIntoView();
        // console.log(this.slidContainerRef.current.childNodes.contains(event.target));
      });
    }
  }

  swipeRight = () => {
    // this.slidContainerRef.current.scrollLeft += this.state.slideThereshold;

    this.slidContainerRef.current.scrollBy({
      behavior: "smooth",
      left: this.state.slideThereshold,
    });
  }

  swipeLeft = () => {
    // this.slidContainerRef.current.scrollLeft -= this.state.slideThereshold;

    this.slidContainerRef.current.scrollBy({
      behavior: "smooth",
      left: this.slidContainerRef.current.scrollLeft + this.state.slideThereshold,
    });
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
