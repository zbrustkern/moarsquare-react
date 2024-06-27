import Post from '../Post/Post';

const PostList = (props) => {

    if (!props.posts) return (
        <>
        Loading...
        </>
    )

    return (
        <div className = "post-list">
            <h1>Check in Feed</h1>
            <ul>
            {props.posts.map((post) => (
                <li key={post.id}>
                    <div>
                        <Post posts={props.posts} post={post} handleDeletePost={props.handleDeletePost} user={props.user} togglePostFormDisplay={props.togglePostFormDisplay} setPosts={props.setPosts}/>
                    </div>
                </li>
            )
            )}
            </ul>
        </div>
    )
}

export default PostList