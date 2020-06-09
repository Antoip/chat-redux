import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Importing children components
import Message from '../components/message';
import MessageForm from './message_form';
import { fetchMessages } from '../actions';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    if (!this.props.messages.length) {
      return (
        <div>
          <h1>Still no message in this channel!</h1>
          <MessageForm />
        </div>);
    }

    return (
      <div>
        {
          this.props.messages.map((message) => {
            return <Message message={message} key={message.createdAt} />;
          })
        }
        <MessageForm />
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
