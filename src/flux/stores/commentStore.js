import alt from "../alt";
import CommentActions from "../actions/commentActions";

class _CommentStore {
  constructor() {
    this.comment = "";
    this.bindActions(CommentActions);
  }

  onAddComment(new_comment) {
    this.comment = new_comment;
  }

  onClearComment() {
    this.comment = "";
  }
}

export default alt.createStore(_CommentStore, "CommentStore");
