import React from "react";
import "tachyons/css/tachyons.min.css";

import { cards } from "../../../shared/cards";
import { cardRanks, suits } from "../../../shared/types";
import * as cardRankUnicode from "../../../shared/cardRankUnicode";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h1>{cardRankUnicode.diamonds.EIGHT}</h1>
      </div>
    );
  }
}

export { Dashboard };
