import s from "./MyPosts.module.css"
import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postsData = [
        {message: "Hi, how are you?", likesCount: 23},
        {message: "It's my first post!!!", likesCount: 45}
    ]
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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    );
};