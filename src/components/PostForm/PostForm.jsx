import { useState, useEffect } from 'react';

const PostForm = (props) => {
    const emptyForm = {
        location: '',
        text: '',
    }
    const [formData, setFormData] = useState(emptyForm);
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    useEffect(() => {
        const fillForm = () => {
            setFormData({
                location: props.post.location,
                text: props.post.text
              })
        }
        if (props.post) fillForm();
    }, [props.post])

    const locateMe = (evt) => {
        evt.preventDefault();
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
            setFormData({...formData, "location": `(${position.coords.longitude},${position.coords.latitude})`})
            }, () => {
                setFormData({...formData, "location": 'try again!'})
            })
        }
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.post ? props.handleEditPost(props.post.id, formData) : props.handleNewPost(formData)
        setFormData(emptyForm);
    };
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className='post-form'>
                <div className='post-form-title'>
                    <h3>{props.post? 'Edit Check In' : 'New Check In'}</h3>
                </div>
                <div className='post-locate-button'>
                    <button onClick={locateMe}>Locate me!</button>
                </div>
                <div className='post-location-input-box'>
                    <label htmlFor="location-input">Location:</label>
                    <input
                        required
                        type="text"
                        name="location"
                        id="location-input"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="(Longitude, Latitude)"
                    />
                </div>
                <div className='post-text-input-box'>
                    <label htmlFor="text-input">Text:</label>
                    <input
                        required
                        type="text"
                        name="text"
                        id="text-input"
                        value={formData.text}
                        onChange={handleChange}
                        placeholder="What to say?..."
                    />
                </div>
                <div className='post-submit-button'>
                    <button type="submit">{props.post ? 'Submit Changes' : 'Create New Post'}</button>
                    </div>
            </div>
        </form>
        </>
    )
}

export default PostForm