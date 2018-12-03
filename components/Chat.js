import React from 'react'
import _ from 'lodash'
import CommentBar from './CommentBar'
import fire from '../lib/firebaseDb'


export default class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }
  componentWillMount() {
    // It's not sorting by timestamp...
   let messagesRef = fire.database().ref('/hashtags/' + this.props.channelName).orderByChild('timestamp').limitToLast(100);

   messagesRef.on('child_added', snapshot => {
     let message = { text: snapshot.val(), id: snapshot.key };
       this.setState({ messages: [message].concat(this.state.messages)
     });
    })
  }
  render() {
    const {channelName} = this.props

    // const test = this.state.messages
    // console.log(test.sortBy('timestamp'))
    // console.log(this.state.messages)
    
    return (
      <div className="chat-ui">
        <div id="chatMessageList">
        <ul>
         {
          this.state.messages.map(function(obj) {
            const message = obj.text.message
            const key = obj.text.timestamp

            return <li key={key}>{message}</li>
          })
         }
        </ul>
        </div>

        <CommentBar channelName={channelName} />
      </div>
    )
  }
}
