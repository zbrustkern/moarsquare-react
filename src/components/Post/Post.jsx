import { useState } from 'react'
import PostEditButtons from "../PostEditButtons/PostEditButtons"
import CommentEditButtons from '../CommentEditButtons/CommentEditButtons'
import MapBoxMap from "../MapBoxMap/MapBoxMap"
import CommentForm from "../CommentForm/CommentForm";
import * as postService from '../../services/postService';


const Post = (props) => {

    const [updatedPost, setUpdatedPost] = useState({})

    const handleNewComment = async (postId, commentFormData) => {
        await postService.createComment(postId, commentFormData);
        const returnedPost = await postService.showPost(postId)
        setUpdatedPost(returnedPost.post)
    }
    
    const handleDeleteComment = async (postId, commentId) => {
        await postService.deleteComment(postId, commentId);
        const returnedPost = await postService.showPost(postId)
        setUpdatedPost(returnedPost.post)
    }

    if (updatedPost.text) return (
        <div className="post-box">
            <h2>{updatedPost.author_username}</h2>
        <div className='post-content'>
            <h3>{updatedPost.text}</h3>
            {updatedPost.post_author_id == props.user.id && <PostEditButtons handleDeletePost={props.handleDeletePost}  post={updatedPost} togglePostFormDisplay={props.togglePostFormDisplay}/>}
        </div>
        <div className='post-map'>
            <MapBoxMap location={updatedPost.location} />
        </div>
            <hr />
        <div className="comment-section">
            <div className="new-comment-box">
                <CommentForm handleNewComment={handleNewComment} post={props.post}/>
            </div>
            <h3>Comments...</h3>
            <ul>
                {updatedPost.comments?.map((comment) => (
                    <li key={comment.comment_id}>
                        <div className='comment-content'>
                            <div>
                                {comment.comment_author_username} said: {comment.comment_text}
                            </div>
                            <div className='comment-edit-buttons'>
                                {comment.comment_author_username == props.user.username && <CommentEditButtons handleDeleteComment={handleDeleteComment} comment={comment} post={updatedPost}/>}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )

    return (
        <div className="post-box">
                <h2>{props.post.author_username}</h2>
                <div className='post-content'>
                    <h3>{props.post.text}</h3>
                        {props.post.post_author_id == props.user.id && <PostEditButtons handleDeletePost={props.handleDeletePost}  post={props.post} togglePostFormDisplay={props.togglePostFormDisplay}/>}
                </div>
            <div className='post-map'>
                <MapBoxMap location={props.post.location} />
            </div>
            <hr />
            <div className="comment-section">
                <div className="new-comment-box">
                    <CommentForm handleNewComment={handleNewComment} post={props.post}/>
                </div>
                <h3>Comments...</h3>
                <ul>
                    {props.post.comments?.map((comment) => (
                        <li key={comment.comment_id}>
                            <div className='comment-content'>
                                <div>
                                    {comment.comment_author_username} said: {comment.comment_text}
                                </div>
                                <div className='comment-edit-buttons'>
                                    {comment.comment_author_username == props.user.username && <CommentEditButtons handleDeleteComment={handleDeleteComment} comment={comment} post={props.post}/>}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Post