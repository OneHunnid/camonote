import React from 'react'
import _ from 'lodash'
import $ from 'jquery'

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
  }
  __createMessagesList() {
    const obj = this.props.data
    console.log('OBJ', obj)
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
        <form className="form-comment">
          <input type="text" className="input-message" placeholder="Type a message..."/>
          <div className="button--send">Send</div>
        </form>
      </div>
    )
  }
}
