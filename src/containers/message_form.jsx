import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';

import { createMessage } from '../actions';

class MessageForm extends Component {
  handleChange(event) {
    this.props.createMessage(
      this.props.selectedChannel,
      this.props.currentUser,
      event.target.content
    );
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button>
          <input type="submit" onChange={this.handleChange()} />
        </button>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
