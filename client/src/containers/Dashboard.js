import React from "react";
import "tachyons/css/tachyons.min.css";

import { cards } from "../../../shared/cards";
import { cardRanks, suits } from "../../../shared/types";
import * as cardRankUnicode from "../../../shared/cardRankUnicode";
import { makeDeck } from "../../../server/functions";
import { GameKernel } from "../../../server/GameKernel";

class Dashboard extends React.Component {
  state = {
    abc: 123
  };

  constructor(props) {
    super(props);

    const gameKernel = new GameKernel();
    gameKernel.init();
    gameKernel.addPlayer("John Smith", 1000);

    window.gameKernel = gameKernel;
    console.log(gameKernel);
  }

  onBetClick(e) {
    console.log("onBetClick");
  }

  onDealClick(e) {
    console.log("onBetClick");
  }

  onHit(e) {
    console.log("onHit");
  }

  onStand(e) {
    console.log("onStand");
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h1 className="f1 b red">{cardRankUnicode.diamonds.EIGHT}</h1>

        <div className="db pa2 mb2 ba b--black br2 ba-light-grey">
          <span className="db b f5">Dealer's Hand</span>
          <span className="db">KQ</span>
        </div>

        <div className="db pa2 mb2 ba b--black br2 ba-light-grey">
          <span className="db b f5">Your Hand</span>
          <span className="db">KQ</span>
        </div>

        <div className="db pa2 ba b--black">
          <button onClick={this.onBetClick}>Bet</button>
          <button onClick={this.onBetClick}>Deal</button>
          <button onClick={this.onHit}>Hit</button>
          <button onClick={this.onStand}>Stand</button>
        </div>
      </div>
    );
  }
}

export { Dashboard };
