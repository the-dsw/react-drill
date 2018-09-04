import _ from "lodash";
import React, { Component } from "react";
import TimeStore from "../stores/timeStore";
import CommentStore from "../stores/commentStore";

export default ComposedComponent =>
  class withStore extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: TimeStore.getState(),
        comment: CommentStore.getState().comment
      };
    }

    componentDidMount() {
      TimeStore.listen(this.timeChanged);
      CommentStore.listen(this.commentChanged);
    }

    componentWillUnmount() {
      TimeStore.unlisten(this.timeChanged);
      CommentStore.unlisten(this.commentChanged);
    }

    timeChanged = _.debounce(time => {
      this.setState({ time });
    }, 1000);

    commentChanged = _.throttle(({ comment }) => {
      this.setState({ comment });
    }, 150);

    render() {
      const { time, comment } = this.state;
      return (
        <ComposedComponent
          {...this.props}
          time={time.hours}
          comment={comment}
        />
      );
    }
  };
