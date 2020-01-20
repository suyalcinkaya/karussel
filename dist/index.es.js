import React from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ":root {\n  --gap: 6px;\n}\n\n.style_karusselContainer__2BKIh {\n  display: flex;  \n  align-items: stretch;  \n  width: 100%;  \n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding-left: calc(var(--gap) * 3);\n  padding-right: calc(var(--gap) * 3);\n  padding-bottom: calc(var(--gap) * 3);\n  margin-top: 0;\n  margin-left: calc(var(--gap) * -4);\n  margin-right: calc(var(--gap) * -4);\n  -webkit-scroll-snap-destination: 0% 0%;  \n  -webkit-overflow-scrolling: touch; /* important for iOS */\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  scroll-snap-type: x mandatory; /* Chrome Canary */\n  scroll-snap-type: mandatory; /* Firefox */\n  -ms-scroll-snap-type: mandatory; /* IE/Edge */\n  -webkit-scroll-snap-type: mandatory; /* Safari */\n  scroll-behavior: smooth;\n}\n\n.style_karusselContainer__2BKIh > * {\n  flex-shrink: 0;\n  display: inline-block !important;\n  padding-right: var(--gap) !important;\n  padding-left: var(--gap) !important;\n  -webkit-scroll-snap-coordinate: 0% 0%;\n  scroll-snap-coordinate: 0% 0%;\n  scroll-snap-align: center;\n  white-space: pre-wrap;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  max-width: 100%;\n}\n\n.style_karusselContainer__2BKIh > *:first-child {\n  padding-left: calc(var(--gap) * 4) !important;\n}\n\n.style_karusselContainer__2BKIh > *:last-child {\n  padding-right: calc(var(--gap) * 4) !important;\n}\n\n.style_arrows__3bE0A {\n  position: absolute !important;\n  display: block !important;\n  transform: translateY(-50%) !important;\n  z-index: 1 !important;\n  transition: all 0.2s ease-in-out;\n}\n\n.style_arrows__3bE0A button {\n  display: inline-block !important;\n  cursor: pointer !important;\n  text-align: center !important;\n  line-height: 1 !important;\n  position: relative !important;\n  touch-action: manipulation !important;\n  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px !important;\n  border-radius: 50% !important;\n  border-width: 2px !important;\n  border-style: solid !important;\n  border-color: transparent !important;\n  background: rgb(255, 255, 255) !important;\n  outline: none;\n  width: 32px;\n  height: 32px;\n}\n\n.style_arrows__3bE0A {\n  top: calc(50% - (var(--gap) * 2));\n}\n\n.style_arrows__3bE0A.style_left__23qnn {\n  left: calc(var(--gap) * 2);\n  opacity: 0;\n  visibility: hidden;\n}\n\n.style_arrows__3bE0A.style_right__1o-p7 {\n  right: calc(var(--gap) * 2);\n}";
var styles = { "karusselContainer": "style_karusselContainer__2BKIh", "arrows": "style_arrows__3bE0A", "left": "style_left__23qnn", "right": "style_right__1o-p7" };
styleInject(css);

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Karussel = function Karussel(props) {
  var children = props.children,
      rest = objectWithoutProperties(props, ['children']);

  return React.createElement(
    'div',
    { style: { overflow: 'hidden', position: 'relative' } },
    React.createElement(
      'div',
      _extends({ className: styles.karusselContainer }, rest),
      [].concat(toConsumableArray(children)).map(function (child, index) {
        return React.createElement(
          'div',
          { key: index },
          child
        );
      })
    )
  );
};

Karussel.propTypes = {
  children: PropTypes.node
};

export default Karussel;
//# sourceMappingURL=index.es.js.map
