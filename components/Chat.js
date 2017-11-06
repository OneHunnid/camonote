import React from 'react'
import _ from 'lodash'
import $ from 'jquery'

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
  }
  __createMessagesList() {
    const obj = this.props.data
    const arrayByTime = _.sortBy(obj, 'timestamp');
    const arrayReverse = _.reverse(arrayByTime)

    _.forEach(arrayReverse, (value, key) => {
      const message = value.message

      $('#chatMessageList').append(
        $('<div/>')
        .addClass("chat-message")
        .append("<span/>")
        .text(message)
      );
    })
  }
  render() {
    this.__createMessagesList()
    return (
      <div className="">
        <div id="chatMessageList"></div>
      </div>
    )
  }
}
