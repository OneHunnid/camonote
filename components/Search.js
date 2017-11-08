import React from 'react'
import $ from 'jquery'

export default class Search extends React.Component {
  __handleSubmit(e) {
    e.preventDefault();
    const searchValue = $('#search').val();
    window.location="/c/" + searchValue;
  }
  render() {
    return (
        <form onSubmit={this.__handleSubmit} className="form-search">
          <input className="search" id="search" type="search" placeholder="Start or find a chat"/>
        </form>
    )
  }
}
