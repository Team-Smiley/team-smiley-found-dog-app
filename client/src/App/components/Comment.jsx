import React from 'react';

function Comment(props) {
    const { comment } = props;
    return (
        <div>{comment.message}</div>
    )
}

export default Comment 