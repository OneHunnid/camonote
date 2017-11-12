import React from 'react'
import _ from 'lodash'
import $ from 'jquery'
import CommentBar from './CommentBar'

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
  }
  __createMessagesList() {
    const obj = this.props.data

    _.forEach(obj, (value, key) => {
      const message = value.message

      $('#chatMessageList').append(
        $('<div/>')
        .append($('</div>'))
        .addClass("chat__message")
        .append("<span/>")
        .text(message)
      );
    })
  }
  render() {
    this.__createMessagesList()
    return (
      <div className="chat-ui">
        <div id="chatMessageList"></div>
          <CommentBar channelName={this.props.channelName}/>
      </div>
    )
  }
}
