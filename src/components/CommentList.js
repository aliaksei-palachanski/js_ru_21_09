import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import NewComment from './NewComment'

class CommentList extends Component {

    render() {
        const { comments, isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {getBody(this.props)}
            </div>
        )
    }
}

function getBody(props) {
    const { comments, isOpen } = props
    if (!isOpen) return null

    const body = comments.length ? (
        <ul>
            {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
        </ul>
    ) : <h3>No comments yet</h3>

    return (
        <div>
            {body}
            <NewComment />
        </div>
    )
}


CommentList.defaultProps = {
    comments: []
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default toggleOpen(CommentList)