import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchStoriesThenItems } from "../actions";
import Item from "./Item";

const Segment = ({ fetchStoriesThenItems }) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchStoriesThenItems(page);
  }, []);

  return (
    <div className="ui segment">
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Click me
      </button>
      <div className="ui relaxed divided list">
        <Item heading={page} description="Updated 10 mins ago" />
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
  return { stories: state.stories };
};

export default connect(mapStateToProps, { fetchStoriesThenItems })(Segment);
