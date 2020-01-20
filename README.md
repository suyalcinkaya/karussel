# karussel

> A minimal React based carousel/slider component

[![NPM](https://img.shields.io/npm/v/karussel.svg)](https://www.npmjs.com/package/karussel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/karussel) ![NPM](https://img.shields.io/npm/l/karussel)

## Install

### npm

```bash
npm install --save karussel
```

### Yarn

```bash
yarn add karussel
```

## Usage

```jsx
import React, { Component } from "react";
import Karussel from "karussel";

class Example extends Component {
  const images = [
    "https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  ];

  render() {
    return (
      <Karussel>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              height={200}
              width={300}
              alt="..."
            />
          </div>
        ))}
      </Karussel>
    );
  }
}

export default Example;
```

## License

MIT © [suyalcinkaya](https://github.com/suyalcinkaya)
