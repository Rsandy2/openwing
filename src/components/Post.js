import React from 'react'
import './Post.css';
function Post({ postID, postDesc, imageUrl}) {
    return (
        <div className="post__container">
            {/* Header -> News Icon + Network Name */}
            <div className="post__header">
            <h2>{postID}</h2>

            </div>
            
            {/* Image */}
            <img 
            className="post__image"
            src={imageUrl}
            />
            {/* Description + Text */}
            <div className="post__text">
                <p>{postDesc}</p>
            </div>
        </div>
    )
}

export default Post
