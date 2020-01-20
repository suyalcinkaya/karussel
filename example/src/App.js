import React, { Component } from 'react';
import Karussel from 'karussel';

export default class App extends Component {
  render() {
    const images = [
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1544236296-1ad3cf4edbf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1570057633712-870fa818fa15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1567493756992-e2b6227cddc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1568314735654-32fb53a5c886?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1506126279646-a697353d3166?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    ]
    return (
      <div style={{ display: 'flex', height: '100%', justifyContent: 'center', flexDirection: 'column' }}>
        <Karussel>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} height={50} width={50} alt="" loading="lazy" style={{ objectFit: 'cover', borderRadius: 8 }} />
              {/* <h4 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Modern home in city center</h4> */}
            </div>
          ))}
        </Karussel>

        <div style={{ marginTop: 20 }}>
          <Karussel>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} height={80} width={80} alt="" loading="lazy" style={{ objectFit: 'cover', borderRadius: 8 }} />
                {/* <h4 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Modern home in city center</h4> */}
              </div>
            ))}
          </Karussel>
        </div>

        <div style={{ marginTop: 20 }}>
          <Karussel>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} height={50} width={100} alt="" loading="lazy" style={{ objectFit: 'cover', borderRadius: 8 }} />
                {/* <h4 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Modern home in city center</h4> */}
              </div>
            ))}
          </Karussel>
        </div>

        <div style={{ marginTop: 20 }}>
          <Karussel>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} height={100} width={100} alt="" loading="lazy" style={{ objectFit: 'cover', borderRadius: 8 }} />
                {/* <h4 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Modern home in city center</h4> */}
              </div>
            ))}
          </Karussel>
        </div>

        <div style={{ marginTop: 20 }}>
          <Karussel>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} height={150} width={200} alt="" loading="lazy" style={{ objectFit: 'cover', borderRadius: 8 }} />
                {/* <h4 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Modern home in city center</h4> */}
              </div>
            ))}
          </Karussel>
        </div>

        <div style={{ marginTop: 20 }}>
          <Karussel>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} height={200} width={300} alt="" loading="lazy" style={{ objectFit: 'cover', borderRadius: 8 }} />
                {/* <h4 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Modern home in city center</h4> */}
              </div>
            ))}
          </Karussel>
        </div>

        <div style={{ marginTop: 20 }}>
          <Karussel>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} height={300} width={300} alt="" loading="lazy" style={{ objectFit: 'cover', borderRadius: 8 }} />
                {/* <h4 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Modern home in city center</h4> */}
              </div>
            ))}
          </Karussel>
        </div>
      </div>
    )
  }
}
