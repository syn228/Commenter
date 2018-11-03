import React, { Component } from 'react';

class CommentBox extends Component {
  render(){
    return(
      <form>
          <h4>Add a Comment</h4>
          <textarea></textarea>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
    )
  }
}

export default CommentBox