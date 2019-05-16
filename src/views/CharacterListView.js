import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { characterFetch } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.characterFetch();
  }

  render() {
    if (this.props.fetching) {
      <h1> Fetching... </h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = (state) => {
  return {
      characters: state.charsReducer.characters,
      error: state.charsReducer.error,
      fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  {
    characterFetch
  }
)(CharacterListView);

