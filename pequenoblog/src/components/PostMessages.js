import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage";

const PostMessages = (props) => {
  return <div> from PostMessages</div>;
};

const mapStateToProps = (state) => ({
  postMessageList: state.postMesssage.list,
});

const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
};
export default connect(mapStateToProps, mapActionToProps)(PostMessages);
