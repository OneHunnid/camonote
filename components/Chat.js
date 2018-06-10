import React, { Component } from 'react'
import _ from 'lodash'
import CommentBar from './CommentBar'

export default class Chat extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props;
    const sortedMessages = _.sortBy(data, 'timestamp');
    const messageHtml = sortedMessages.map((value, i) => (
      <div className="chat__message" key={i}>
        <span>{value.message}</span>
      </div>
    ));
    
    return (
      <div className="chat-ui">
        <div id="chatMessageList">
          {messageHtml}
        </div>
          <CommentBar channelName={this.props.channelName}/>
      </div>
    )
  }
}
