import s from "./MyPosts.module.css"
import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message={"Hi, how are you?"}/>
                <Post message={"It's my first post!!!"}/>
            </div>
        </div>
    );
};