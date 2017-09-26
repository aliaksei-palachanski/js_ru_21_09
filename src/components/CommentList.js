import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends Component {

    state = {
        isOpened: false
    }

    renderBody() {
        
        if (!this.props.comments.length) return <h3>No Comments</h3>
        const commentElements = this.props.comments.map((comment) => <li key={comment.id}>
            <Comment comment={comment}/>
        </li>)
        return (
            <ul>
                {commentElements}
            </ul>
        )

    }

    render() {                
        const body = this.state.isOpened && this.renderBody();
        return (
            <div>
                <h3>
                    Comments
                    <button onClick={this.toggleComments}>
                        {this.state.isOpened ? 'hide comments' : 'show comments'}
                    </button>
                </h3>
                {body}
            </div>
        )
    }

    toggleComments = () => {
        this.setState({isOpened: !this.state.isOpened })
    }
}

CommentList.propTypes = {
    comments: PropTypes.array
}

export default CommentList