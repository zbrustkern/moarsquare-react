const PostEditButtons = (props) => {
    return (
        <div className="post-edit-buttons">
            <button onClick={() => props.togglePostFormDisplay(props.post)}>🖊️</button>
            <span>     </span>
            <button onClick={() => props.handleDeletePost(props.post.id)}>🗑️</button>
        </div>
    )
}

export default PostEditButtons