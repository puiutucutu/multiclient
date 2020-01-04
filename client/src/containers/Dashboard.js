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

    window.gameKernel = gameKernel;
    console.log(gameKernel);
  }

  onBetClick(e) {
    console.log("onBetClick");
  }

  onDealClick(e) {
    console.log("onBetClick");
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h1 className={"f1 b red"}>{cardRankUnicode.diamonds.EIGHT}</h1>
        <button onClick={this.onBetClick}>Bet Amount</button>
        <button onClick={this.onBetClick}>Deal</button>
      </div>
    );
  }
}

export { Dashboard };
