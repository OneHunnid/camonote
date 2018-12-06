import React from 'react'
import $ from 'jquery'
import fire from '../lib/firebaseDb'
import _ from 'lodash'
import ScrollableFeed from 'react-scrollable-feed'
import CommentBar from './CommentBar'
import MessageBubble from './MessageBubble'


export default class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }
  componentWillMount() {
   let messagesRef = fire.database().ref('/hashtags/' + this.props.channelName).orderByChild('timestamp').limitToLast(50);

   messagesRef.on('value', snapshot => {
      let messageObj = snapshot.val()
      this.setState({
        messages: _.map(messageObj)
      })
    })
  }
  render() {
    const {channelName} = this.props
    const messagesArr = this.state.messages

    return (
      <div className="chat-ui">
        <ScrollableFeed>
            {messagesArr.map(obj => {
                return <MessageBubble message={obj.message} key={obj.timestamp}/>
            })}
        </ScrollableFeed>

        <CommentBar channelName={channelName} />
      </div>
    )
  }
}
