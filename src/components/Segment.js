import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStories } from "../actions";
import Item from "./Item";

const Segment = ({ fetchStories }) => {
  useEffect(() => {
    fetchStories();
  });
  return (
    <div className="ui segment">
      <div className="ui relaxed divided list">
        <Item
          heading="Semantic-Org/Semantic-UI"
          description="Updated 10 mins ago"
        />
        <Item
          heading="Semantic-Org/Semantic-UI"
          description="Updated 10 mins ago"
        />
        <Item
          heading="Semantic-Org/Semantic-UI"
          description="Updated 10 mins ago"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchStories })(Segment);
