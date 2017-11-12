import React from 'react'
import $ from 'jquery'
import moment from 'moment'

import sendMessage from '../lib/send-message.js'

export default class CommentBar extends React.Component {
  constructor(props) {
    super(props)
    this.__handleSubmit = this.__handleSubmit.bind(this)
  }
  __handleSubmit(e) {
    e.preventDefault();
    let form = $('#commentBar')
    let inputMessage = $('#message');
    let searchValue = inputMessage.val();
    let channelName = this.props.channelName
    let time = moment().valueOf();

    // Need to sanitize message

    let messageObj = {
      message: searchValue,
      channel: channelName,
      timestamp: time
    }

    sendMessage(messageObj)

    inputMessage.val('')
  }
  render() {
    return (
        <form id="commentBar" className="form-comment" onSubmit={this.__handleSubmit}>
          <input id="message" type="text" className="input-message" placeholder="Type a message..."/>
          <button className="button--send">Send</button>
        </form>
    )
  }
}
