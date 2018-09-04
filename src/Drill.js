import React, { Component } from "react";
import withStore from "./flux/hoc/drillStores";
import alt from "./flux";
import CommentActions from "./flux/actions/commentActions";
import Lockr from "lockr";

class Drill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSaveHandlerClick = () => {
    // Take a snapshot from stores
    const snap = alt.takeSnapshot();
    // Set localstorage with snapshot data
    Lockr.set("hours", snap);
  };

  onClearHandlerClick = () => {
    // Clean stores && localStorage
    CommentActions.clearComment();
    Lockr.flush();
  };

  render() {
    const { time, comment } = this.props;

    return (
      <div>
        <div>
          <button onClick={this.onSaveHandlerClick}>save me!</button>
          <button onClick={this.onClearHandlerClick}>clear</button>
        </div>
        <div>
          <ul>
            {comment}
            {time.map((time, i) => (
              <li key={i}>{time}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStore(Drill);
