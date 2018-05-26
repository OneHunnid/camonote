import React from 'react'
import _ from 'lodash'
import $ from 'jquery'
import CommentBar from './CommentBar'

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
  }
  __createMessagesList() {
    const data = this.props.data
    console.log('CHAT PAGE ', data)

    let sortedMessages = _.sortBy(data, 'timestamp');

    _.forEach(sortedMessages, (value, key) => {
      const message = value.message

      $('#chatMessageList').append(
        $('<div>')
        .append($('</div>'))
        .addClass("chat__message")
        .append("<span/>")
        .text(message)
      );
    })
  }

  componentDidMount() {

  }
  render() {
    // @TODO - Messages are duplicating because render() keeps firing everytime state get's updated (i.e messages are added to firebase)
    // I need to move __createMEssageList() out of render() but I am not sure where... I need to learn how to update state properly
    this.__createMessagesList()
    return (
      <div className="chat-ui">
        <div id="chatMessageList"></div>
          <CommentBar channelName={this.props.channelName}/>
      </div>
    )
  }
}
