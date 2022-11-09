import React from 'react';
import s from "./Post.module.css"

export type MessagePropsType = {
    message: string
    likesCount: number
}


export const Post = (props: MessagePropsType) => {
    return (
        <div className={s.item}>
            <img src="https://cdn-icons-png.flaticon.com/512/1845/1845433.png" alt="avatar"/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    );
};