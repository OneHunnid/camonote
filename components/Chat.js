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

    console.log('STATE', this.state)

    return (
      <div className="chat-ui">
        <div id="chatMessageList">
          <ul>
            {
             this.state.messages.map(function(obj) {
               const message = obj.message
               const key = obj.timestamp

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
