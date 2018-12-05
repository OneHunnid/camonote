import React from 'react'

export default class MessageBubble extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { message } = this.props

    return (
        <div className="chat__item">
          <div className="chat__emoji"></div>
          <div className="chat__message">{message}</div>
        </div>
    )
  }
}
