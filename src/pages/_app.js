import App from 'next/app';
import React from 'react';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      // <Provider>
        <Component {...pageProps} />
      // </Provider>
    );
  }
}

export default MyApp;
