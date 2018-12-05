import React from 'react'
import $ from 'jquery'
import fire from '../lib/firebaseDb'
import _ from 'lodash'
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
  componentDidMount() {
    function scrollToBottom() {
      // this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      console.log(document)
    }

    scrollToBottom()
  }
  render() {
    const {channelName} = this.props
    const messagesArr = this.state.messages

    return (
      <div className="chat-ui">
        <div id="chatMessageList" className="chat-wrapper">
            {messagesArr.map(obj => {
                return <MessageBubble message={obj.message} key={obj.timestamp}/>
            })}

            <div id="foo" ref='messagesEnd'></div>
        </div>

        <CommentBar channelName={channelName} />
      </div>
    )
  }
}
