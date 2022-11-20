import s from "./MyPosts.module.css"
import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let posts = [
        {message: "Hi, how are you?", likesCount: 23},
        {message: "It's my first post!!!", likesCount: 45}
    ]

    let postsElement = posts.map((el)=> {
        return (
            <Post message={el.message} likesCount={el.likesCount}/>
        )
    })

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};