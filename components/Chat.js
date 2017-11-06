import React from 'react'

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
  }
  __createMessages() {
    console.log(this.props.data)
  }
  render() {
    this.__createMessages()
    return (
      <div className="">
        Chat!
      </div>
    )
  }
}
