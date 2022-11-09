import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src="https://static.tildacdn.com/tild3939-3635-4064-a335-386461613361/social-network-app.png"
                      alt=""/></div>
            <div>
                <img src="src/components/Profile/Profile" alt=""/>
                ava + descr
            </div>
            <MyPosts/>
        </div>
    );
};