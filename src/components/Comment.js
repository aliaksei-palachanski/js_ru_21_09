import React from 'react'
import PropTypes from 'prop-types'

function Comment(props) {
    
    return (
        <div>
            <h4>{props.comment.user}</h4>
            <p>{props.comment.text}</p>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string
    }).isRequired
}

export default Comment