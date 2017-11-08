import React from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="header container--large">
        <div className="header__circle"></div>
        <Link href="/">
          <a className="logo">Camonote</a>
        </Link>
        <FindChannelName name={this.props.channelName}/>
      </div>
    )
  }
}

class FindChannelName extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const channelName = this.props.name

    if (1 != 'undefined') {
      return (
        <div className="header__channel-name">{channelName}</div>
      )
    }
    else {
      console.log('no name found')
      return;
    }
  }
}
