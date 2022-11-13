import s from "./MyPosts.module.css"
import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post message={"Hi, how are you?"} likesCount={23}/>
                <Post message={"It's my first post!!!"} likesCount={45}/>
            </div>
        </div>
    );
};