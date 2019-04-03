import App, { Container } from "next/app";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <container>
        <p>Hey i'm on every page</p>
        <Component />
      </container>
    );
  }
}

export default MyApp;
