import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import HomeMenu from "./HomeMenu/HomeMenu";
import HomeBody from "./HomeBody/HomeBody";
import HomeHeader from "./HomeHeader/HomeHeader";
import TestMenu from "./TestMenu";

class App extends React.Component {
  renderHeader() {
    return (
      <>
        <Route exact path="/" component={HomeHeader} />
      </>
    );
  }

  renderMenu() {
    return (
      <>
        <Route exact path="/" component={HomeMenu} />
      </>
    );
  }

  renderMain() {
    return (
      <>
        <Route exact path="/" component={HomeBody} />
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomeHeader />
        </header>
        <main className="App-main">{this.renderMain()}</main>
        <menu className="App-menu">
          <HomeMenu />
        </menu>
      </div>
    );
  }
}

export default App;
