import alt from "../alt";
import TimeActions from "../actions/timeActions";

class _TimeStore {
  constructor() {
    this.hours = [];
    this.bindActions(TimeActions);
  }

  onAddTime(new_time) {
    this.hours = [].concat(this.hours, [new_time]);
  }
}

export default alt.createStore(_TimeStore, "TimeStore");
