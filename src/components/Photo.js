import React from 'react';


function Photo(props){
        const post = props.post
        return(
            <div>

            <figure className = 'figure'>

                <img className = 'photo' src = {post.imageLink} alt = {post.description} />
                
                <figurecaption>
                    <p>{post.description}</p>
                </figurecaption>

                <div className = 'remove-container'>
                <button className = 'remove-button' onClick = {() => {
                    props.onRemovePhoto(post)
                }}>Remove</button>
            </div>

            </figure>

            </div>
        )
    }


export default Photo;