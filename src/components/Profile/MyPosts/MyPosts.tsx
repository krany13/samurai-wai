import s from "./MyPosts.module.css"
import React from 'react';
import {Post} from "./Post/Post";

export type PostTypeProps = {
    message: string
    likesCount: number
}

export type PostType = {
    posts: Array<PostTypeProps>
}

export const MyPosts = (props: PostType) => {

    let postsElement = props.posts.map((el) => {
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