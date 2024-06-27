import { useState } from 'react';

const CommentForm = (props) => {
    const emptyForm = {
        text: '',
    }

    const [formData, setFormData] = useState(emptyForm);
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.comment ? props.handleEditComment(props.post.id, props.comment.comment_id, formData) : props.handleNewComment(props.post.id, formData)
        setFormData(emptyForm);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className='comment-form'>
                <div className='comment-headline'>
                    <h3>{props.comment? 'Edit Comment:' : 'New Comment:'}</h3>
                </div>
                <div className='comment-input-box'>
                    <label htmlFor="text-input"></label>
                    <input
                        required
                        type="text"
                        name="text"
                        id="text-input"
                        value={formData.text}
                        onChange={handleChange}
                        placeholder='What to say...'
                    />
                </div>
                <div className='comment-submit-button'>
                    <button type="submit">{props.comment ? 'Submit Changes' : 'Add Comment'}</button>
                </div>
            </div>
        </form>
        </>
    )
}

export default CommentForm