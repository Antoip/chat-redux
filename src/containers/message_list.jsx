import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Importing children components
import Message from '../components/message';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      this.props.messages.map((message) => {
        console.log(message)
        return <Message message={message} key={message.content} />;
      }));
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

// function mapDispatchToProps(dispatch) {
//   return null;
// }

export default connect(mapStateToProps, null)(MessageList);
