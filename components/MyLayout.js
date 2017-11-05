import stylesheet from 'styles/index.scss'
import React from 'react'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.onload = function() {
      twemoji.size = '16x16';
      twemoji.parse(document.body);
    }
  }
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {this.props.children}
        <script src="//twemoji.maxcdn.com/twemoji.min.js"></script>
      </div>
    )
  }
}

export default Layout
